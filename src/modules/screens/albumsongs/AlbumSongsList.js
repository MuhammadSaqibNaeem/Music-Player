/** @format */

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
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
// import Button from '../../../global/components/Button'
import ButtonCompo from "../../../global/components/ButtonCompo";
import { useNavigation } from "@react-navigation/native";

const AlbumSongsList = ({ artist, recently, mostPlayed, imageStyle, text }) => {
  const data2 = [
    {
      id: "1",
      title: "Shades",
      image: require("../../../assets/images/music11.png"),
      desc: "Muslim  | ",
      time: "3:58mins",
    },
    {
      id: "2",
      title: "Without",
      image: require("../../../assets/images/music11.png"),
      desc: "Muslim  | ",
      time: "3:58mins",
    },
    {
      id: "3",
      title: "Item 3",
      image: require("../../../assets/images/music11.png"),
      desc: "Muslim  | ",
      time: "3:58mins",
    },
  ];

  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: Colors.black, flex: 1 }}>
      <View style={styles.recent}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../../../assets/images/music11.png")}
            style={styles.img}
          />
          <View style={styles.imgTitle}>
            <Text
              style={{
                fontSize: headings.xLarge,
                color: Colors.white,
                textAlign: "center",
              }}
            >
              Ariana Grande
            </Text>
            <Text
              style={{
                fontSize: headings.xSize,
                color: Colors.white,
                textAlign: "center",
                marginTop: hp("1%"),
                color: Colors.gray,
              }}
            >
              1 Album | 20 songs | 01:50:30 mins
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <ButtonCompo icon={"shuffle"} title={"shuffle"} />
          <ButtonCompo
            onPress={() => navigation.navigate("AudioPlayer")}
            icon={"play"}
            title={"Play"}
          />
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: wp("80%"),
              alignSelf: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ color: Colors.white }}>Songs</Text>
            <Text style={{ color: Colors.yellow }}>See All</Text>
          </View>
          {data2.map((item) => {
            return <SongsItem imageStyle={imageStyle} item={item} />;
          })}
        </View>
      </View>
    </View>
  );
};

export default AlbumSongsList;

const styles = StyleSheet.create({
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
