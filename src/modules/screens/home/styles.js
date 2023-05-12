import { StyleSheet, Dimensions } from "react-native";
import Colors from '../../../constants/colors';
const { width, height } = Dimensions.get("window");


export const styles = StyleSheet.create({
  body: {
    backgroundColor: "black",
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 16,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  selectedItem: {
    borderBottomColor: "yellow",
  },
  itemText: {
    fontSize: 16,
    color:'white'
  },
  button: {
    backgroundColor:Colors.yellow,
    // paddingVertical: 16,
    // marginHorizontal: 16,
    borderRadius: 8,
    // marginTop: 16,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
