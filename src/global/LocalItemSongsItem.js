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
import Colors from "../constants/colors";
import { headings } from "../constants/spacers";
import { useNavigation } from "@react-navigation/native";
// import colors from "../constants/colors";

const LocalItemSongsItem = ({ item, imageStyle, onPress }) => {
  const navigation = useNavigation();

  function formatSongDuration(durationInSeconds) {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds.toFixed(0)}`;
  }

  return (
    <View style={styles.itemContainer}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          onPress={imageStyle ? onPress : null}
          style={styles.deepInnerContainer}
        >
          {imageStyle ? (
            <Image
              source={require("../assets/images/music11.png")}
              style={[styles.itemImage, { borderRadius: 50 }]}
            />
          ) : (
            <Image
              source={require("../assets/images/music11.png")}
              style={[styles.itemImage, { borderRadius: 8 }]}
            />
          )}
          <View style={styles.titleContainer}>
            <Text style={styles.itemTitle}>
              {item?.filename?.length > 20
                ? item?.filename?.substring(0, 20) + "..."
                : item?.filename}
            </Text>
            <Text style={styles?.desc}>
              {formatSongDuration(item?.duration)}
            </Text>
          </View>
        </TouchableOpacity>
        {imageStyle ? null : (
          <View style={styles.icons}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("LocalSongsPlayer", {
                  item,
                })
              }
            >
              <AntDesign name="play" size={25} color={Colors.yellow} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="dots-vertical"
                size={25}
                color={Colors.white}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default LocalItemSongsItem;

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: hp("1%"),
    width: wp("100%"),
    justifyContent: "center",
    // height:hp('10%')
  },
  itemImage: {
    width: wp("12%"),
    height: hp("6%"),
    // borderRadius: 8,
    marginBottom: 8,
    tintColor: Colors.yellow,
  },
  itemTitle: {
    fontSize: headings.small,
    textAlign: "center",
    color: Colors.white,
    marginTop: hp("1%"),
    textAlign: "left",
    width: 100,
  },
  desc: {
    fontSize: headings.xSize,
    textAlign: "center",
    color: Colors.gray,
    height: hp("5%"),
    textAlign: "left",
    marginTop: hp("1%"),
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
  icons: {
    width: wp("20%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginRight: wp("2%"),
  },

  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: wp("5%"),
  },
  deepInnerContainer: { flexDirection: "row", justifyContent: "space-between" },
  titleContainer: {
    marginLeft: wp("4%"),
    justifyContent: "center",
  },
});
