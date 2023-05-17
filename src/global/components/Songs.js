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
import Colors from "../../constants/colors";
import { headings } from "../../constants/spacers";
import colors from "../../constants/colors";
import SongsItem from "../SongsItem";
import { useNavigation } from "@react-navigation/native";

const Songs = ({ artist, recently, mostPlayed, imageStyle, text, data }) => {
  const data2 = [
    {
      id: "1",
      title: "Shades",
      image: require("../../assets/images/music11.png"),
      desc: "Muslim  | ",
      time: "3:58mins",
    },
    {
      id: "2",
      title: "Without",
      image: require("../../assets/images/music11.png"),
      desc: "Muslim  | ",
      time: "3:58mins",
    },
    {
      id: "3",
      title: "Item 3",
      image: require("../../assets/images/music11.png"),
      desc: "Muslim  | ",
      time: "3:58mins",
    },
    {
      id: "4",
      title: "Item 4",
      image: require("../../assets/images/music11.png"),
      desc: "Muslim  | ",
      time: "3:58mins",
    },
    {
      id: "5",
      title: "Item 5",
      image: require("../../assets/images/music11.png"),
      desc: "Muslim  | ",
      time: "3:58mins",
    },
  ];

  const navigation = useNavigation();

  // console.log('data =============> ',data)

  // console.log("image style ", imageStyle);

  return (
    <View style={styles.recent}>
      <View style={styles.recently}>
        <Text style={styles.recentlyText}>
          {artist || artist || recently || recently || mostPlayed || mostPlayed}
        </Text>
        <TouchableOpacity>
          {text ? (
            <Text style={{ color: colors.yellow }}> {text}</Text>
          ) : (
            <Text style={{ color: colors.yellow }}> Ascending</Text>
          )}
        </TouchableOpacity>
      </View>
      <View>
        {data?.map((item) => {
          return <SongsItem imageStyle={imageStyle} item={item} />;
        })}
      </View>
    </View>
  );
};

export default Songs;

const styles = StyleSheet.create({
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
