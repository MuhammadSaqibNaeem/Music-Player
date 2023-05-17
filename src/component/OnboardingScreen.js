/** @format */

import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { Colors } from "../constants";

const OnboardingScreen = ({ setIsFirstLaunch }) => {
  const handleDone = () => {
    setIsFirstLaunch(false);
  };

  return (
    <Onboarding
      onDone={handleDone}
      pages={[
        {
          backgroundColor: "#000",
          image: (
            <Image
              source={require("../assets/images/first.png")}
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
              source={require("../assets/images/second.png")}
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
              source={require("../assets/images/third.png")}
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
      nextLabel="Next"
      skipLabel="Skip"
      doneLabel="Done"
      showSkip={true}
      onSkip={handleDone}
      bottomBarHighlight={false}
    />
  );
};

export default OnboardingScreen;
