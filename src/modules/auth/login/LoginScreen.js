import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useRef, useState } from "react";

import InputField from "../../../global/components/InputField";
import { styles } from "./styles";
import Button from "../../../global/components/Button";
// import {useDispatch} from 'react-redux';
// import {setSignIn} from '../../redux/slices/userSlice';
// import auth from '@react-native-firebase/auth';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState();
  const [isLoggedIn, selectIsLoggedIn] = useState(false);

  // const dispatch = useDispatch();

  const handleLogin = async () => {
    if (!email) {
      setErrorMessage("Enter correct  email");
      return;
    }
    if (!password) {
      setPasswordErrorMessage("Password is required field");
      return;
    }
    if (password?.length < 5 || password?.length > 10) {
      setPasswordErrorMessage("Password 5 char to 10 char");
      return;
    }
    selectIsLoggedIn(true);

    // try {
    //   await auth().signInWithEmailAndPassword(email, password);
    // } catch (error) {
    //   console.log(error);
    //  }

    // const userDetails = {
    //   isLoggedIn: isLoggedIn,
    //   email: email,
    //   password: password,
    // };
    // dispatch(setSignIn(userDetails));
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ marginTop: 30 }}>
        <InputField
          placeholder="Email or username"
          placeholderTextColor="#64748B"
          keyboardType="email-address"
          autoFocus="false"
          returnKeyType="next"
          title="Email"
          textContentType="emailAddress"
          autoCapitalize="none"
          value={email}
          blurOnSubmit={false}
          onChangeText={(email) => setEmail(email)}
          style={styles.inputStyle}
        />
        {!email ? (
          <Text
            style={{
              color: "red",
              flexDirection: "row",
              marginLeft: 20,
              marginTop: 80,
              position: "absolute",
            }}
          >
            {errorMessage}
          </Text>
        ) : null}

        <InputField
          placeholder="Password"
          placeholderTextColor="#64748B"
          returnKeyType="next"
          keyboardType="password"
          autoFocus="false"
          title="Password"
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry={true}
          value={password}
          onSubmitEditing={Keyboard.dismiss}
          blurOnSubmit={false}
          onChangeText={(password) => setPassword(password)}
          style={styles.inputStyle}
        />

        {!password ? (
          <Text
            style={{
              color: "red",
              flexDirection: "row",
              marginLeft: 20,
              marginTop: 180,
              position: "absolute",
            }}
          >
            {passwordErrorMessage}
          </Text>
        ) : null}
        {password?.length < 5 || password?.length > 10 ? (
          <Text
            style={{
              color: "red",
              flexDirection: "row",
              marginLeft: 20,
              marginTop: 180,
              position: "absolute",
            }}
          >
            {passwordErrorMessage}
          </Text>
        ) : null}

        <TouchableOpacity
          activeOpacity={0.5}
          style={{ marginTop: -20 }}
          onPress={() => navigation.navigate("Forgot Password")}
        >
          <Text style={styles.forgetPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <View style={{ margin: 20, marginTop: 50 }}>
        <Button title="Sign in" onPress={handleLogin} />
      </View>

      <View style={styles.dontBox}>
        <Text style={{ color: "rgba(51, 65, 85, 1)", fontSize: 17 }}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Sign up")}>
          <Text style={{ color: "orange", fontSize: 17 }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>

      {/* <TouchableOpacity >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default Login;
