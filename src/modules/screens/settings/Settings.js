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
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import Ionicons from "react-native-vector-icons/Ionicons ";
import Colors from "../../../constants/colors";
import { headings } from "../../../constants/spacers";
import SongsItem from "../../../global/SongsItem";
// import Button from '../../../global/components/Button'
import ButtonCompo from "../../../global/components/ButtonCompo";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import ProfileListItem from "../../../global/components/ProfileListItem";

const Settings = ({ artist, recently, mostPlayed, imageStyle, text }) => {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: Colors.black, flex: 1 }}>
      <View style={styles.recent}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../../../assets/images/music11.png")}
            style={styles.img}
          />
        </View>

        <View>
          <ProfileListItem
            text={"Backup"}
            icon={<Feather name="share" size={20} color={Colors.white} />}
          />
          <ProfileListItem
            text={"Notification"}
            icon={<AntDesign name="bells" size={20} color={Colors.white} />}
          />
          <ProfileListItem
            text={"Language"}
            icon={
              <FontAwesome
                name="language"
                size={20}
                color={Colors.white}
                usa={"English (US)"}
              />
            }
          />

          <ProfileListItem
            text={"Share App"}
            icon={
              <MaterialCommunityIcons
                name="arrow-top-right-bold-outline"
                size={20}
                color={Colors.white}
                usa={"English (US)"}
              />
            }
          />
          <ProfileListItem
            text={"Change log"}
            icon={
              <MaterialCommunityIcons
                name="card-text-outline"
                size={20}
                color={Colors.white}
                usa={"English (US)"}
              />
            }
          />
          <ProfileListItem
            text={"Privacy Policy"}
            icon={
              <Ionicons
                name="ios-shield-checkmark-outline"
                size={20}
                color={Colors.white}
                usa={"English (US)"}
              />
            }
          />
          <ProfileListItem
            text={"FAQ"}
            icon={
              <Feather
                name="alert-octagon"
                size={20}
                color={Colors.white}
                usa={"English (US)"}
              />
            }
          />
          <ProfileListItem
            text={"Quit"}
            icon={
              <Feather
                name="log-out"
                size={20}
                color={Colors.white}
                usa={"English (US)"}
              />
            }
          />
        </View>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  list: { flexDirection: "row" },
  profileDiv: {
    width: wp("80%"),
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp("2%"),
  },
  img: { width: wp("80%"), height: hp("25%"), borderRadius: 20 },
  imgContainer: {
    width: wp("60%"),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp("2%"),
    marginBottom: hp("2%"),
  },
  imgTitle: {
    marginVertical: 10,
  },
  recently: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: wp("5%"),
  },
});
