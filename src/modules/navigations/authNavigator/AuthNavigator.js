import React from 'react';
import {View, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignUp from '../../auth/register/SignupScreen';
import Login from '../../auth/login/LoginScreen';


const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">

    


     

      <Stack.Screen
        name="Sign up"
        options={{headerShown: true,headerTitleAlign:'center',headerBackTitle:'Back',headerShadowVisible:false}}
        component={SignUp}
      />
      <Stack.Screen
        name="Login"
        options={{headerShown: true,headerTitleAlign:'center',headerBackTitle:'Back',headerShadowVisible:false}}
        component={Login}
      />

     


   
    </Stack.Navigator>
  );
};

export default AuthNavigator;