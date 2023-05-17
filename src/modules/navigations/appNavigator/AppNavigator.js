/** @format */

import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabNavigator from "../bottomTab/BottomTabNavigation";
import HomeStack from "../navigationStack/homeStack/HomeStack";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        options={{ headerShown: false }}
        component={HomeStack}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
