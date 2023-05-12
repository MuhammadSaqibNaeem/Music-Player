/** @format */

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../../constants/colors";
import { headings } from "../../../constants/spacers";
import SongsItem from "../../../global/SongsItem";
import LocalItemSongsItem from "../../../global/LocalItemSongsItem";
// import Button from '../../../global/components/Button'
import AsyncStorage from "@react-native-async-storage/async-storage";
import ButtonCompo from "../../../global/components/ButtonCompo";
import { useFocusEffect } from "@react-navigation/native";

const Favorites = ({ artist, recently, mostPlayed, imageStyle, text }) => {
  const [likedItems, setLikedItems] = useState([]);
  const [localSongs, setLocalSongs] = useState([]);
  async function getLikedItems() {
    try {
      const value = await AsyncStorage.getItem("likedItems");
      return value ? JSON.parse(value) : [];
    } catch (error) {
      console.log("Error retrieving liked items:", error);
      return [];
    }
  }
  async function getLocalSongsLikedItems() {
    try {
      const value = await AsyncStorage.getItem("likedLocalItems");
      return value ? JSON.parse(value) : [];
    } catch (error) {
      console.log("Error retrieving liked items:", error);
      return [];
    }
  }
  useFocusEffect(
    React.useCallback(() => {
      async function fetchData() {
        const items = await getLikedItems();
        setLikedItems(items);
        console.log("Liked items:", items);
      }
      async function fetchLocalSongsLikedItems() {
        const items = await getLocalSongsLikedItems();
        setLocalSongs(items);
        console.log("Liked items:", items);
      }
      fetchData();
      fetchLocalSongsLikedItems();
    }, [])
  );
  return (
    <View style={{ backgroundColor: Colors.black, flex: 1 }}>
      <View style={styles.recent}>
        {/* <View style={{ flexDirection: "row" }}>
          <ButtonCompo icon={"shuffle"} title={"shuffle"} />
          <ButtonCompo icon={"play"} title={"Play"} />
        </View> */}
        <View style={{ height: "50%" }}>
          <ScrollView>
            <View>
              <View style={styles.favSongContainer}>
                <Text style={{ color: Colors.white }}>
                  {likedItems?.length} favorites
                </Text>
                <Text style={{ color: Colors.yellow }}> Date Added</Text>
              </View>
              {likedItems.map((item) => {
                return <SongsItem imageStyle={imageStyle} item={item} />;
              })}
            </View>
          </ScrollView>
        </View>
        <View style={{ alignSelf: "center" }}>
          <Text
            style={{
              color: Colors.yellow,
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Local Favorites Songs
          </Text>
        </View>
        <View style={{ height: "45%" }}>
          <ScrollView>
            <View>
              <View style={styles.favSongContainer}>
                <Text style={{ color: Colors.white }}>
                  {localSongs?.length} favorites
                </Text>
                <Text style={{ color: Colors.yellow }}> Date Added</Text>
              </View>
              {localSongs.map((item) => {
                return (
                  <LocalItemSongsItem imageStyle={imageStyle} item={item} />
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  favSongContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("90%"),
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  img: { width: wp("50%"), height: hp("20%"), borderRadius: 10 },
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
});
