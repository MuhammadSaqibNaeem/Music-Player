/** @format */

import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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

import Home from "../../screens/home/Home";
import Favorites from "../../screens/favorite/Favorites";
import LocalSongs from "../../screens/LocalSongs/LocalSongs";
import Settings from "../../screens/settings/Settings";

//Icons
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import colors from "../../../constants/colors";
import { Colors, headings } from "../../../constants";
import Entypo from "@expo/vector-icons/Entypo";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fb9902 "
      inactiveColor="#CBD5E1"
      // tabBarStyle={{backgroundColor:'black'}}
      screenOptions={{
        tabBarActiveTintColor: "#fb9902",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 45,
          backgroundColor: "black",
          borderTopWidth: 1,
          borderTopColor: "black",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "black" },

          title: "Mume",
          headerTitleStyle: { color: colors.white },
          tabBarIcon: ({ color }) => (
            <View>
              <FontAwesome name="home" color={color} size={25} />
              <Text
                style={{
                  color: color,
                  fontSize: headings.xSize,
                  // color: Colors.white,
                  textAlign: "center",
                }}
              >
                Home
              </Text>
            </View>
          ),
          headerLeft: () => (
            <View style={styles.musicIcon}>
              <FontAwesome name={"music"} size={25} color={colors.yellow} />
            </View>
          ),
          headerRight: (Colors) => (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  marginRight: wp("5%"),
                  padding: 7,
                  borderRadius: 10,
                }}
                onPress={() => console.log("I am Zia")}
              >
                <AntDesign name="search1" size={25} color={"white"} />
              </TouchableOpacity>
            </View>
          ),
        }}
        component={Home}
      />

      <Tab.Screen
        name="Favorites"
        options={{
          headerTitle: "Favorites",
          headerShown: true,
          headerTintColor: "white",
          headerStyle: { backgroundColor: "black" },
          tabBarIcon: ({ color }) => (
            <>
              <EvilIcons name="heart" color={color} size={25} />
              <Text
                style={{
                  color: color,
                  fontSize: headings.xSize,
                  // color: Colors.white,
                  textAlign: "center",
                }}
              >
                Favorites
              </Text>
            </>
          ),

          headerLeft: () => (
            <View style={styles.musicIcon}>
              <FontAwesome name={"music"} size={25} color={colors.yellow} />
            </View>
          ),
          headerRight: (color) => (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{ marginRight: 10, padding: 7, borderRadius: 10 }}
                onPress={() => console.log("true")}
              >
                <AntDesign name="search1" size={25} color={Colors.white} />
              </TouchableOpacity>
            </View>
          ),
        }}
        component={Favorites}
      />
      <Tab.Screen
        name="LocalSongs"
        options={{
          headerTitle: "Local Songs",
          headerShown: true,
          headerTintColor: "white",
          headerStyle: { backgroundColor: "black" },
          tabBarIcon: ({ color }) => (
            <>
              <Entypo name="folder-music" color={color} size={20} />
              <Text
                style={{
                  color: color,
                  fontSize: headings.xSize,
                  // color: Colors.white,
                  textAlign: "center",
                }}
              >
                Local Songs
              </Text>
            </>
          ),

          headerLeft: () => (
            <View style={styles.musicIcon}>
              <FontAwesome name={"music"} size={25} color={colors.yellow} />
            </View>
          ),
          // headerRight: (color) => (
          //   <View style={{ flexDirection: "row" }}>
          //     <TouchableOpacity
          //       style={{ marginRight: 10, padding: 7, borderRadius: 10 }}
          //       onPress={() => console.log("true")}
          //     >
          //       <AntDesign name="search1" size={25} color={Colors.white} />
          //     </TouchableOpacity>
          //   </View>
          // ),
        }}
        component={LocalSongs}
      />
      {/* <Tab.Screen
        name="Settings"
        options={{
          headerTitle: "Settings",
          headerShown: true,
          headerTintColor: "white",
          headerStyle: { backgroundColor: "black" },
          tabBarIcon: ({ color }) => (
            <>
              <Ionicons name="settings-outline" color={color} size={20} />
              <Text
                style={{
                  color: color,
                  fontSize: headings.xSize,
                  // color: Colors.white,
                  textAlign: "center",
                }}
              >
                Settings
              </Text>
            </>
          ),

          headerLeft: () => (
            <View style={styles.musicIcon}>
              <FontAwesome name={"music"} size={25} color={colors.yellow} />
            </View>
          ),
          headerRight: (color) => (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  marginRight: 10,
                  padding: 7,
                  borderRadius: 10,
                  marginTop: 3,
                }}
                onPress={() => console.log("true")}
              >
                <Ionicons
                  name="ellipsis-horizontal-circle-outline"
                  size={25}
                  color={Colors.white}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
        component={Settings}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  musicIcon: { marginLeft: wp("5%") },
  tabText: {
    fontSize: headings.xSize,
    color: Colors.white,
    textAlign: "center",
  },
});
