/** @format */

import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "../authNavigator/AuthNavigator";
import AppNavigator from "../appNavigator/AppNavigator";
import Onboarding from "react-native-onboarding-swiper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from "../../../constants";

const AppRoute = ({ navigation }) => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    checkIfFirstLaunch();
  }, []);

  const checkIfFirstLaunch = async () => {
    const isFirstLaunchValue = await AsyncStorage.getItem("isFirstLaunch");
    if (isFirstLaunchValue === null) {
      AsyncStorage.setItem("isFirstLaunch", "false");
      setIsFirstLaunch(true);
    } else {
      setIsFirstLaunch(false);
    }
  };

  if (isFirstLaunch === null) {
    return (
      <View
        style={{
          backgroundColor: Colors.black,
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <ActivityIndicator size="large" color={Colors.yellow} />
      </View>
    );
  }

  if (isFirstLaunch) {
    return (
      <Onboarding
        onDone={() => {
          AsyncStorage.setItem("isFirstLaunch", "true");
          navigation.navigate("AppNavigator");
        }}
        pages={[
          {
            backgroundColor: "#000",
            image: (
              <Image
                source={require("../../../assets/images/undraw_Compose_music_re_wpiw.png")}
                style={{
                  width: "60%",
                  height: "60%",
                  alignSelf: "center",
                  borderRadius: 50,
                }}
              />
            ),
            title: "Your ultimate music companion",
            subtitle:
              "Discover and enjoy a vast collection of online and offline music",
          },
          {
            backgroundColor: "#000",
            image: (
              <Image
                source={require("../../../assets/images/undraw_Meditating_re_aiqa.png")}
                style={{
                  width: "60%",
                  height: "60%",
                  alignSelf: "center",
                  borderRadius: 50,
                }}
              />
            ),
            title: "Favorite Songs",
            subtitle: "Save and access your favorite tracks",
          },
          {
            backgroundColor: "#000",
            image: (
              <Image
                source={require("../../../assets/images/undraw_Music_re_a2jk.png")}
                style={{
                  width: "60%",
                  height: "60%",
                  alignSelf: "center",
                  borderRadius: 50,
                }}
              />
            ),
            title: "Offline Listening",
            subtitle: "Enjoy music even without an internet connection",
          },
        ]}
      />
    );
  }

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default AppRoute;
