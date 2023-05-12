/** @format */

// /** @format */

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   Modal,
//   TextInput
// } from "react-native";
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from "react-native-responsive-screen";
// import AntDesign from "react-native-vector-icons/AntDesign";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import Colors from "../../../constants/colors";
// import { headings } from "../../../constants/spacers";
// import SongsItem from "../../../global/SongsItem";
// import ButtonCompo from "../../../global/components/ButtonCompo";
// // import PlayList from "./PlayList";
// // import Modal from 'react-native-modal';
// const PlayList = ({ artist, recently, mostPlayed, imageStyle, text }) => {
//   const [playlistName, setPlaylistName] = useState("");

//   const handleAddPlaylist = () => {
//     onAddPlaylist(playlistName);
//     setPlaylistName("");
//   };
//   const data2 = [
//     {
//       id: "1",
//       title: "Shades",
//       image: require("../../../assets/images/download.png"),
//       desc: "Muslim  | ",
//       time: "3:58mins",
//     },
//     {
//       id: "2",
//       title: "Without",
//       image: require("../../../assets/images/download.png"),
//       desc: "Muslim  | ",
//       time: "3:58mins",
//     },
//     {
//       id: "3",
//       title: "Item 3",
//       image: require("../../../assets/images/download.png"),
//       desc: "Muslim  | ",
//       time: "3:58mins",
//     },
//     {
//       id: "4",
//       title: "Without",
//       image: require("../../../assets/images/download.png"),
//       desc: "Muslim  | ",
//       time: "3:58mins",
//     },
//     {
//       id: "5",
//       title: "Item 3",
//       image: require("../../../assets/images/download.png"),
//       desc: "Muslim  | ",
//       time: "3:58mins",
//     },
//     {
//       id: "6",
//       title: "Without",
//       image: require("../../../assets/images/download.png"),
//       desc: "Muslim  | ",
//       time: "3:58mins",
//     },
//     {
//       id: "7",
//       title: "Item 3",
//       image: require("../../../assets/images/download.png"),
//       desc: "Muslim  | ",
//       time: "3:58mins",
//     },
//     {
//       id: "8",
//       title: "Item 3",
//       image: require("../../../assets/images/download.png"),
//       desc: "Muslim  | ",
//       time: "3:58mins",
//     },
//     {
//       id: "9",
//       title: "Without",
//       image: require("../../../assets/images/download.png"),
//       desc: "Muslim  | ",
//       time: "3:58mins",
//     },
//     {
//       id: "10",
//       title: "Item 3",
//       image: require("../../../assets/images/download.png"),
//       desc: "Muslim  | ",
//       time: "3:58mins",
//     },
//   ];

//   //   console.log("image style ", imageStyle);
//   const PlayListItemsData = ({ isVisible, onAddPlaylist, onCancel }) => {
//     <Modal isVisible={isVisible}>
//       <View style={styles.container}>
//         <TextInput
//           placeholder="Playlist name"
//           value={playlistName}
//           onChangeText={setPlaylistName}
//           style={styles.input}
//         />
//         <View style={styles.buttonsContainer}>
//           <TouchableOpacity onPress={handleAddPlaylist} style={styles.button}>
//             <Text style={styles.buttonText}>Add Playlist</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={onCancel} style={styles.button}>
//             <Text style={styles.buttonText}>Cancel</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </Modal>;
//   };

//   return (
//     <View style={{ backgroundColor: Colors.black, flex: 1 }}>
//       <View style={styles.recent}>
//         <View style={styles.playlist}>
//           <Text style={styles.playlistText}>14 playlists</Text>
//           <Text style={[styles.playlistText, { color: Colors.yellow }]}>
//             14 playlists
//           </Text>
//         </View>
//         <View style={{ flexDirection: "row", alignItems: "center" }}>
//           <TouchableOpacity
//             style={[styles.btnStyle]}
//             onPress={PlayListItemsData}
//           >
//             <AntDesign name={"plus"} size={25} color={Colors.white} />
//           </TouchableOpacity>
//           <Text style={{ color: Colors.white }}>Add new Playlist</Text>
//         </View>
//         <ScrollView>
//           <View>
//             {data2.map((item) => {
//               return <SongsItem imageStyle={imageStyle} item={item} />;
//             })}
//           </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// export default PlayList;

// const styles = StyleSheet.create({
//   playlist: {
//     width: wp("90%"),
//     alignSelf: "center",
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   playlistText: {
//     color: Colors.white,
//   },
//   favSongContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: wp("80%"),
//     alignSelf: "center",
//     marginTop: 20,
//   },
//   img: { width: wp("50%"), height: hp("20%"), borderRadius: 10 },
//   imgContainer: {
//     width: wp("60"),
//     alignSelf: "center",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: hp("2%"),
//   },
//   imgTitle: {
//     marginVertical: 10,
//   },
//   recently: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginHorizontal: wp("5%"),
//   },
//   recentlyText: { color: Colors.white },
//   recent: { marginTop: hp("2%") },
//   imgStyle: {
//     width: wp("30%"),
//     height: hp("15%"),
//     borderRadius: "30%",
//     marginBottom: 8,
//   },
//   btnStyle: {
//     width: wp("20%"),
//     height: hp("10%"),
//     backgroundColor: Colors.yellow,
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row",
//     marginHorizontal: 20,
//     borderRadius: 100,
//     marginVertical: hp("3%"),
//   },
//   ///Modal Style////
//   container: {
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     padding: 16,
//   },
//   input: {
//     height: 40,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 4,
//     paddingHorizontal: 8,
//     marginBottom: 16,
//   },
//   buttonsContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   button: {
//     backgroundColor: "#0080ff",
//     borderRadius: 4,
//     padding: 8,
//     width: "48%",
//   },
//   buttonText: {
//     color: "#fff",
//     textAlign: "center",
//   },
// });

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import LocalItemSongsItem from "../../../global/LocalItemSongsItem";
import { Audio } from "expo-av";
import * as MediaLibrary from "expo-media-library";
import { useFocusEffect } from "@react-navigation/native";

export default function LocalSongs() {
  const [songList, setSongList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(songList);
  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        const { status } = await MediaLibrary.requestPermissionsAsync();
        if (status === "granted") {
          const media = await MediaLibrary.getAssetsAsync({
            mediaType: MediaLibrary.MediaType.audio,
            first: 999999, // fetch all audio files
          });
          setSongList(media.assets);
          setIsLoading(false);
        }
      })();
    }, [])
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="#fb9902" />
        </View>
      ) : (
        <ScrollView style={styles.container}>
          {songList.map((item) => {
            return <LocalItemSongsItem item={item} />;
          })}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
