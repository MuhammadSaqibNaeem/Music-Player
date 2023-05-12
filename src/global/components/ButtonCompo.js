import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { Colors, headings } from "../../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";

const ButtonCompo = (props) => {
  const { title, onPress, btnStyle, icon, borderRadius } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btnStyle,
        {
          backgroundColor: icon !== "shuffle" ? Colors.darkGray : Colors.yellow,
        },
      ]}
    >
      {icon == "shuffle" ? (
        <Entypo name={icon} size={15} />
      ) : (
        <AntDesign name={icon} size={15} color={Colors.yellow} />
      )}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCompo;

const styles = StyleSheet.create({
  btnStyle: {
    width: wp("40%"),
    height: hp("5%"),
    backgroundColor: Colors.yellow,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    borderRadius: 20,
    marginVertical: hp("3%"),
  },
  text: { marginLeft: 10, fontSize: headings.small, color: Colors.white },
});
