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
import Colors from "../../constants/colors";
import { headings } from "../../constants/spacers";
import colors from "../../constants/colors";
import SongsItem2 from "../SongsItem2";
const RecentlyPlayed = ({
  artist,
  recently,
  mostPlayed,
  imageStyle,
  text,
  data,
  title,
  item,
}) => {
  // const RenderItem2 = ({ item, data }) => {
  //   console.log("data========", data);
  //   // console.log("item k andr kya hai =================>:::: ", item);
  //   return (
  //     // <TouchableOpacity style={styles.itemContainer}>
  //     //   <Image
  //     //     source={require("../../assets/images/download.jpg")}
  //     //     style={[styles.itemImage, { borderRadius: imageStyle ? 50 : 8 }]}
  //     //   />
  //     //   <Text style={styles.itemTitle}>{item?.name}</Text>
  //     // </TouchableOpacity>

  //   );
  // };

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
            <Text
              style={{ color: colors.yellow, fontSize: 25, marginLeft: 10 }}
            >
              {item}
            </Text>
          )}
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({ item }) => (
            <SongsItem2 imageStyle={imageStyle} item={item} />
          )}
          keyExtractor={(item) => item?.id}
        />
        {/* {data?.map((item) => {
          return <SongsItem2 imageStyle={imageStyle} item={item} />;
        })} */}
      </View>
    </View>
    // <View style={styles.recent}>
    //   <View style={styles.recently}>
    //     <Text style={styles.recentlyText}>
    //       {artist || artist || recently || recently || mostPlayed || mostPlayed}
    //     </Text>
    //     <TouchableOpacity>
    //       <Text style={{ color: colors.yellow }}>See All</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View>
    //     {/* {data && data.map((item) => <RenderItem2 item={item} key={item.id} />)} */}
    //     <FlatList
    //       horizontal={true}
    //       data={data}
    //       renderItem={({ item }) => <RenderItem2 item={item} />}
    //       keyExtractor={(item) => item?.id}
    //     />
    //   </View>
    // </View>
  );
};

export default RecentlyPlayed;

const styles = StyleSheet.create({
  itemContainer: {
    marginRight: wp("2%"),
    marginTop: hp("1%"),
    marginLeft: wp("5%"),
    width: wp("30%"),
    justifyContent: "center",
  },
  itemImage: {
    width: wp("30%"),
    height: hp("15%"),
    // borderRadius:  8,
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: headings.small,
    textAlign: "center",
    color: Colors.white,
    height: hp("5%"),
  },
  // recently: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   marginHorizontal: wp("5%"),
  // },
  // recentlyText: { color: Colors.white },
  recent: { marginTop: hp("5%") },
  // imgStyle: {
  //   width: wp("30%"),
  //   height: hp("15%"),
  //   borderRadius: "30%",
  //   marginBottom: 10,
  // },
  // recently: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   marginHorizontal: wp("5%"),
  // },
  // recentlyText: { color: Colors.white },
  recent: { marginTop: hp("2%") },
  imgStyle: {
    width: wp("30%"),
    height: hp("15%"),
    borderRadius: "30%",
    marginBottom: 8,
  },
});
