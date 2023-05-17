/** @format */

import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, ActivityIndicator } from "react-native";
import AppRoute from "./src/modules/navigations/navigator/Navigator";
import colors from "./src/constants/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

import OnboardingScreen from "./src/component/OnboardingScreen";
const App = () => {
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
          flex: 1,
          backgroundColor: colors.black,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color={colors.yellow} />
      </View>
    );
  }
  return (
    <>
      <StatusBar backgroundColor={colors.black} />

      {isFirstLaunch ? (
        <View style={{ flex: 1, backgroundColor: Colors.yellow }}>
          <OnboardingScreen setIsFirstLaunch={setIsFirstLaunch} />
        </View>
      ) : (
        <AppRoute />
      )}
    </>
  );
};

export default App;
