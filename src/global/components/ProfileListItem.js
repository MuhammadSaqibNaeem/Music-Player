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
import Colors from "../../constants/colors";
import { headings } from "../../constants/spacers";
import SongsItem from "../../global/SongsItem";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const ProfileListItem = ({text,icon}) => {
  return (
    <View>
     <View style={styles.profileDiv}>
          <TouchableOpacity style={styles.list}>
            <Text style={{marginRight:15}}>

            {icon}
            </Text>
            <Text style={{ color: Colors.white,marginRight:10 }}>{text}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="angle-right" size={20} color={Colors.white} />
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default ProfileListItem

const styles = StyleSheet.create({ 
    list:{flexDirection:'row', },
    profileDiv: {
      width: wp("85%"),
      alignSelf: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop:hp('3%')
    },
})