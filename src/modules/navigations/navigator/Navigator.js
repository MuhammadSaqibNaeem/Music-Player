import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from '../authNavigator/AuthNavigator';
import AppNavigator from '../appNavigator/AppNavigator';
// import {useSelector} from 'react-redux';
// import auth from '@react-native-firebase/auth';
// import { selectIsLoggedIn } from '../../redux/slices/userSlice';

const AppRoute = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
//   const isLoggedIn = useSelector(state => state.isLoggedIn);

//   const onAuthStateChanged = user => {
//     setUser(user);


//     if (initializing) {
//       setInitializing(false);
//     }
//   };

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber;
//   }, []);

//   if (initializing) {
//     return <ActivityIndicator/>;
//   }
 

  return (
    <NavigationContainer>
     {/* {user ? <AppNavigator/> : <AuthNavigator/>   }  */}
     <AppNavigator />
     {/* <AuthNavigator /> */}
    </NavigationContainer>
  );
};

export default AppRoute;
