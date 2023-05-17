/** @format */

import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "../authNavigator/AuthNavigator";
import AppNavigator from "../appNavigator/AppNavigator";

const AppRoute = ({ navigation }) => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default AppRoute;
