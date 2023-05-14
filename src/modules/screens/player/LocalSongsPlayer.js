/** @format */
/** @format */
import React, { useRef, useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  FlatList,
  Dimensions,
  Animated,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import Foundation from "@expo/vector-icons/Foundation";
import AntDesign from "@expo/vector-icons/AntDesign";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Audio } from "expo-av";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const { width, height } = Dimensions.get("window");
import AsyncStorage from "@react-native-async-storage/async-storage";
import Slider from "@react-native-community/slider";
import { Colors, headings } from "../../../constants";

const LOADING_STRING = "Loading...";
const BUFFERING_STRING = "Buffering...";
const RATE_SCALE = 3.0;

export default class LocalSongsPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.isSeeking = false;
    this.shouldPlayAtEndOfSeek = false;
    this.playbackInstance = null;

    this.state = {
      playbackInstanceName: LOADING_STRING,
      playbackInstancePosition: null,
      playbackInstanceDuration: null,
      shouldPlay: false,
      isPlaying: false,
      isBuffering: false,
      isLoading: true,
      fontLoaded: false,
      volume: 1.0,
      rate: 1.0,
      portrait: null,
      showValumeBox: false,
      duration: "00:00:00",
      timeElapsed: "00:00:00",
      isLiked: false,
    };
  }

  async componentDidMount() {
    const { route } = this.props;
    const { item } = route.params;
    console.log("item=============111", item.filename);
    // ...

    // Get the list of liked items from AsyncStorage and update the state
    const likedLocalItems =
      JSON.parse(await AsyncStorage.getItem("likedLocalItems")) || [];
    this.setState({
      isLiked: likedLocalItems.some(
        (likedLocalItems) => likedLocalItems.id === item.id
      ),
    });

    await this._loadNewPlaybackInstance(item?.uri);
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    });
    (async () => {
      await Font.loadAsync({});
      this.setState({ fontLoaded: true });
    })();

    // Store the entire item object in AsyncStorage if liked
  }
  _toggleLike = async () => {
    const { route } = this.props;
    const { item } = route.params;

    const isLiked = !this.state.isLiked;
    this.setState({ isLiked });

    try {
      const value = await AsyncStorage.getItem("likedLocalItems");
      let likedLocalItems = value ? JSON.parse(value) : [];

      if (isLiked) {
        likedLocalItems.push(item);
      } else {
        likedLocalItems = likedLocalItems.filter(
          (likedLocalItems) => likedLocalItems.id !== item.id
        );
      }

      await AsyncStorage.setItem(
        "likedLocalItems",
        JSON.stringify(likedLocalItems)
      );

      // Remove the current item ID from AsyncStorage if unliked
      if (!isLiked) {
        const currentItemId = await AsyncStorage.getItem("currentItemId");
        if (currentItemId === item.id) {
          await AsyncStorage.removeItem("currentItemId");
        }
      }
    } catch (error) {
      console.log("Error storing liked items:", error);
    }
  };
  async _loadNewPlaybackInstance(songURI) {
    if (this.playbackInstance != null) {
      await this.playbackInstance.unloadAsync();
      this.playbackInstance.setOnPlaybackStatusUpdate(null);
      this.playbackInstance = null;
    }

    const source = { uri: songURI };
    const initialStatus = {
      shouldPlay: true,
      rate: this.state.rate,
      volume: this.state.volume,
    };

    const { sound, status } = await Audio.Sound.create(
      source,
      initialStatus,
      this._onPlaybackStatusUpdate
    );
    this.playbackInstance = sound;

    this._updateScreenForLoading(false);
  }

  _onPlayPausePressed = async () => {
    if (this.playbackInstance != null) {
      if (this.state.isPlaying) {
        await this.playbackInstance.pauseAsync();
        this.setState({ isPlaying: false });
      } else {
        await this.playbackInstance.playAsync();
        this.setState({ isPlaying: true });
      }
    }
  };

  _onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded) {
      this.setState({
        playbackInstancePosition: status.positionMillis,
        playbackInstanceDuration: status.durationMillis,
        shouldPlay: status.shouldPlay,
        isPlaying: status.isPlaying,
        isBuffering: status.isBuffering,
      });

      if (status.didJustFinish) {
        this.playbackInstance.setPositionAsync(0); // Reset the position to the beginning of the song
        this.playbackInstance.pauseAsync(); // Pause the playback instance
        this.setState({ isPlaying: false }); // Update the state to show that the song is not currently playing
      }
    } else {
      this.setState({
        playbackInstancePosition: null,
        playbackInstanceDuration: null,
        isPlaying: false,
        isBuffering: false,
      });
    }
  };

  _onForwardPressed = async () => {
    if (!this.playbackInstance) {
      console.log("Playback instance is null or undefined");
      return;
    }

    try {
      const { positionMillis, durationMillis } =
        await this.playbackInstance.getStatusAsync();
      const newPosition = positionMillis + 10000; // 10 seconds in milliseconds
      await this.playbackInstance.setPositionAsync(
        Math.min(newPosition, durationMillis)
      );
    } catch (error) {
      console.log("Error occurred while forwarding the song: ", error);
    }
  };

  _onBackPressed = async () => {
    if (!this.playbackInstance) {
      console.log("Playback instance is null or undefined");
      return;
    }

    try {
      const { positionMillis } = await this.playbackInstance.getStatusAsync();
      const newPosition = positionMillis - 10000; // 10 seconds in milliseconds
      await this.playbackInstance.setPositionAsync(Math.max(newPosition, 0));
    } catch (error) {
      console.log("Error occurred while rewinding the song: ", error);
    }
  };

  _onSeekSliderValueChange = () => {
    if (this.playbackInstance != null && !this.isSeeking) {
      this.isSeeking = true;
      this.shouldPlayAtEndOfSeek = this.state.shouldPlay;
      this.playbackInstance.pauseAsync();
    }
  };

  _onSeekSliderSlidingComplete = async (value) => {
    if (this.playbackInstance != null) {
      this.isSeeking = false;
      const seekPosition = value * this.state.playbackInstanceDuration;
      if (this.shouldPlayAtEndOfSeek) {
        this.playbackInstance.playFromPositionAsync(seekPosition);
      } else {
        this.playbackInstance.setPositionAsync(seekPosition);
      }
    }
  };

  _getSeekSliderPosition() {
    if (
      this.playbackInstance != null &&
      this.state.playbackInstancePosition != null &&
      this.state.playbackInstanceDuration != null
    ) {
      return (
        this.state.playbackInstancePosition /
        this.state.playbackInstanceDuration
      );
    }
    return 0;
  }

  _getMMSSFromMillis(millis) {
    const totalSeconds = millis / 1000;
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60);

    const padWithZero = (number) => {
      const string = number.toString();
      if (number < 10) {
        return "0" + string;
      }
      return string;
    };
    return padWithZero(minutes) + ":" + padWithZero(seconds);
  }

  _getTimestamp() {
    if (
      this.playbackInstance != null &&
      this.state.playbackInstancePosition != null &&
      this.state.playbackInstanceDuration != null
    ) {
      return `${this._getMMSSFromMillis(
        this.state.playbackInstancePosition
      )}       ${this._getMMSSFromMillis(this.state.playbackInstanceDuration)}`;
    }
    return "";
  }

  _getSeekSliderPosition() {
    if (
      this.playbackInstance != null &&
      this.state.playbackInstancePosition != null &&
      this.state.playbackInstanceDuration != null
    ) {
      return (
        this.state.playbackInstancePosition /
        this.state.playbackInstanceDuration
      );
    }
    return 0;
  }

  _getMMSSFromMillis(millis) {
    const totalSeconds = millis / 1000;
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60);

    const padWithZero = (number) => {
      const string = number.toString();
      if (number < 10) {
        return "0" + string;
      }
      return string;
    };
    return padWithZero(minutes) + ":" + padWithZero(seconds);
  }

  _getTimeStart() {
    if (
      this.playbackInstance != null &&
      this.state.playbackInstancePosition != null &&
      this.state.playbackInstanceDuration != null
    ) {
      return `${this._getMMSSFromMillis(this.state.playbackInstancePosition)}`;
    }
    return "";
  }
  _getTimeEnd() {
    if (
      this.playbackInstance != null &&
      this.state.playbackInstancePosition != null &&
      this.state.playbackInstanceDuration != null
    ) {
      return `${this._getMMSSFromMillis(this.state.playbackInstanceDuration)}`;
    }
    return "";
  }

  render() {
    const { route } = this.props;
    const { songName, artistName, songPlay } = route.params;
    const item = route.params;
    console.log("item=====", item?.item?.filename);
    return (
      <View style={{ backgroundColor: Colors.black, flex: 1 }}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../../../assets/images/player.png")}
            style={styles.img}
          />

          <View style={styles.heratTitleView}>
            <View style={styles.imgTitle}>
              <Text style={styles.songName}>
                {item?.item?.filename?.length > 20
                  ? item?.item?.filename.substring(0, 20) + "..."
                  : item?.item?.filename}
                {/* {item?.item?.filename ? item?.item?.filename : "Unknown"} */}
              </Text>
              <Text style={styles.songDesc}>
                {item?.item?.artist?.name
                  ? item?.item?.artist?.name
                  : "unknown"}
              </Text>
            </View>
            <TouchableOpacity onPress={this._toggleLike}>
              <View
                style={{
                  alignSelf: "center",
                  height: 50,
                  justifyContent: "center",
                }}
              >
                <AntDesign
                  name={this.state.isLiked ? "heart" : "hearto"}
                  size={30}
                  color={this.state.isLiked ? Colors.yellow : Colors.white}
                  style={{ marginHorizontal: "5%" }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.SliderArea}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Slider
              style={[styles.progressSlider]}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor={Colors.yellow}
              maximumTrackTintColor={Colors.yellow}
              thumbStyle={{ width: 20, height: 20, borderRadius: 10 }}
              trackStyle={{ height: 10, borderRadius: 5 }}
              thumbTintColor={Colors.yellow}
              value={this._getSeekSliderPosition()}
              onValueChange={this._onSeekSliderValueChange}
              onSlidingComplete={this._onSeekSliderSlidingComplete}
              disabled={this.state.isLoading}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              width: wp("90%"),
              alignSelf: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "white" }}>{this._getTimeStart()}</Text>
            <Text style={{ color: "white" }}> {this._getTimeEnd()}</Text>
          </View>

          {/* <View style={styles.detailsContainer}>
            <View style={styles.songTime}>
              <Text style={[styles.text, { marginRight: 20 }]}>
                {this._getTimeStart()}
              </Text>
              <Text style={styles.text}>{this.state.playbackInstanceName}</Text>
              <Text style={[styles.text, { marginLeft: 20 }]}>
                {this._getTimeEnd()}
              </Text>
            </View>
          </View> */}

          {/* ............................Player.............. */}
          <View style={styles.playerContainer}>
            <View style={styles.playerButtons}>
              {/* <TouchableOpacity>
                <View>
                  <AntDesign
                    name="stepbackward"
                    size={25}
                    color={Colors.white}
                  />
                </View>
              </TouchableOpacity> */}
              <TouchableOpacity onPress={this._onBackPressed}>
                <View>
                  <AntDesign name="banckward" size={25} color={Colors.white} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._onPlayPausePressed}>
                <View>
                  {this.state.isPlaying ? (
                    <AntDesign
                      name="pausecircleo"
                      size={40}
                      color={Colors.white}
                    />
                  ) : (
                    <AntDesign
                      name="playcircleo"
                      size={40}
                      color={Colors.yellow}
                    />
                  )}
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._onForwardPressed}>
                <View>
                  <AntDesign name="forward" size={25} color={Colors.white} />
                </View>
              </TouchableOpacity>
              {/* <TouchableOpacity>
                <View>
                  <AntDesign
                    name="stepforward"
                    size={25}
                    color={Colors.white}
                  />
                </View>
              </TouchableOpacity> */}
            </View>
          </View>
          {/* ............................... */}

          {/* End Aracbic */}

          {/* ................. */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  songName: {
    fontSize: headings.xLarge,
    color: Colors.white,
    textAlign: "center",
  },
  songDesc: {
    fontSize: headings.small,
    color: Colors.white,
    textAlign: "center",
    marginTop: hp("1%"),
    color: Colors.gray,
  },

  img: { width: wp("80%"), height: hp("45%"), borderRadius: 10 },
  imgContainer: {
    width: wp("60"),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp("2%"),
  },
  imgTitle: {
    marginVertical: 10,
  },
  recently: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: wp("5%"),
  },
  recentlyText: { color: Colors.white },
  recent: { marginTop: hp("2%") },
  imgStyle: {
    width: wp("30%"),
    height: hp("15%"),
    borderRadius: "30%",
    marginBottom: 8,
  },
  songTime: {
    alignSelf: "center",
    height: "60%",
    flexDirection: "row",
  },
  progressSlider: { width: wp("100%"), height: hp("4%"), marginBottom: 2 },

  playerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp("70%"),
    alignSelf: "center",
  },
  playerContainer: {
    justifyContent: "space-between",
    marginTop: 10,
  },
  detailsContainer: {
    height: 30,
    alignSelf: "center",
    width: wp("70%"),
  },
  text: {
    fontSize: 15,
    minHeight: 15,
    alignSelf: "center",
    color: Colors.white,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "600",
    textTransform: "capitalize",
    color: "#ffffff",
  },
  artist: {
    fontSize: 18,
    textAlign: "center",
    color: "#ffffff",
    textTransform: "capitalize",
  },

  albumCover: {
    width: 250,
    height: 250,
  },
  trackInfo: {
    padding: 40,
    backgroundColor: "#fff",
  },
  trackInfoText: {
    textAlign: "center",
    flexWrap: "wrap",
    color: "#550088",
  },
  largeText: {
    fontSize: 22,
  },
  smallText: {
    fontSize: 16,
  },
  control: {
    margin: 20,
  },
  controls: {
    flexDirection: "row",
  },
  heratTitleView: {
    flexDirection: "row",

    alignSelf: "center",
  },
});
