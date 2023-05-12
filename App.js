import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import AppRoute from './src/modules/navigations/navigator/Navigator';
import colors from './src/constants/colors';

const App = () => {
  return (
    <>
    <StatusBar backgroundColor={colors.black} />
     <AppRoute/>
    </>
  )
}

export default App