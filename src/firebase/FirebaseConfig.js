import * as firebase from 'firebase';
import { initializeApp } from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDu41epW_LuW1uJ0qKMlWQICdzFg5MMnK4',
  authDomain: 'com.studyapp',
  projectId: 'study-9ec94',
  storageBucket: 'study-9ec94.appspot.com',
  messagingSenderId: '136681805086',
  appId: '1:136681805086:android:187442982b31285572650f',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };