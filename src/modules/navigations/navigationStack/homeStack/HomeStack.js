/** @format */

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

import BottomTabNavigator from "../../bottomTab/BottomTabNavigation";
import AlbumSongsList from "../../../screens/albumsongs/AlbumSongsList";
import AudioPlayer from "../../../screens/player/TestingPlayer";
import LocalSongsPlayer from "../../../screens/player/LocalSongsPlayer";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="BottomTabNavigator">
      <Stack.Screen
        name="BottomTabNavigator"
        options={{ headerShown: false }}
        component={BottomTabNavigator}
      />
      <Stack.Screen
        name="AlbumSongsList"
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "black",
          },
          headerShown: true,
          headerTitleAlign: "center",
          headerBackTitle: "Back",
          headerShadowVisible: false,
          headerTintColor: "white",
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  marginRight: wp("2%"),
                  padding: 7,
                  borderRadius: 10,
                }}
                onPress={() => console.log("I am Zia")}
              >
                <AntDesign name="search1" size={25} color={"white"} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: 7,
                  borderRadius: 10,
                }}
                onPress={() => console.log("I am Zia")}
              >
                <Ionicons
                  name="ellipsis-horizontal-circle-outline"
                  size={25}
                  color={"white"}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
        component={AlbumSongsList}
      />
      <Stack.Screen
        name="AudioPlayer"
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "black",
          },
          headerShown: true,
          headerTitleAlign: "center",
          headerBackTitle: "Back",
          headerShadowVisible: false,
          headerTintColor: "white",
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              {/* <TouchableOpacity
                style={{
                  marginRight: wp("2%"),
                  padding: 7,
                  borderRadius: 10,
                }}
                onPress={() => console.log("I am Zia")}
              >
                <AntDesign name="search1" size={25} color={"white"} />
              </TouchableOpacity> */}
              <TouchableOpacity
                style={{
                  padding: 7,
                  borderRadius: 10,
                }}
                onPress={() => console.log("I am Zia")}
              >
                <Ionicons
                  name="ellipsis-horizontal-circle-outline"
                  size={25}
                  color={"white"}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
        component={AudioPlayer}
      />
      <Stack.Screen
        name="LocalSongsPlayer"
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "black",
          },
          headerShown: true,
          headerTitleAlign: "center",
          headerBackTitle: "Back",
          headerShadowVisible: false,
          headerTintColor: "white",
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  padding: 7,
                  borderRadius: 10,
                }}
              >
                <Ionicons
                  name="ellipsis-horizontal-circle-outline"
                  size={25}
                  color={"white"}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
        component={LocalSongsPlayer}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
