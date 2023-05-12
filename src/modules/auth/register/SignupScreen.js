import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    Image,
    ScrollView,
  } from 'react-native';
  import React, {useState} from 'react';
  // import { useDispatch } from 'react-redux';
  import InputField from '../../../global/components/InputField';
  import {styles} from './styles';
  import CheckBox from '@react-native-community/checkbox';
  import Button from '../../../global/components/Button';
//   import  auth, { firebase }  from '@react-native-firebase/auth';
//   import { setSignIn } from '../../redux/slices/userSlice';
//   import firestore from '@react-native-firebase/firestore';
  
  const SignUp = () => {
    const [name, setName] = useState('');
    const [nameErrorMessage, setNameErrorMessage] = useState('');
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [isLoggedIn, selectIsLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
  
   
    // const HandleSignUp = async() =>{sss
    //   try {
    //    const userInformation =  await auth().createUserWithEmailAndPassword(email,password)
      
    //    if(userInformation != null){
  
    //     const userCredential = firebase
    //     .firestore()
    //     .collection('newUser')
    //     .doc(auth().currentUser.uid);
    //     userCredential.set({
    //       id: auth().currentUser.uid,
    //       name:name,
    //       email:email,
    //       password:password,
    //       phone:phone,
    //       checkBoxText:toggleCheckBox,
    //     })
    //    }
  
    //   } catch (error) {
        
    //     console.warn(error);
    //   }
    // }
  
    return (
      <ScrollView style={{backgroundColor: 'white', flex: 1}}>
        <View style={{marginTop: 2}}>
          <InputField
            placeholder="Your name"
            placeholderTextColor="#64748B"
            keyboardType="default"
            autoFocus="true"
            title="Name"
            textContentType="name"
            returnKeyType="next"
            autoCorrect={false}
            autoCapitalize="none"
            value={name}
            onChangeText={name => setName(name)}
            style={styles.inputStyle}
          />
        
          <InputField
            placeholder="Xyz@gmail.com"
            placeholderTextColor="#64748B"
            keyboardType="email-address"
            autoFocus="false"
            returnKeyType="next"
            title="Email"
            textContentType="emailAddress"
            autoCapitalize="none"
            value={email}
            onChangeText={email => setEmail(email)}
            style={styles.inputStyle}
          />
       
  
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
            onChangeText={password => setPassword(password)}
            style={styles.inputStyle}
          />
       
          <InputField
            placeholder="Phone"
            placeholderTextColor="#64748B"
            returnKeyType="next"
            keyboardType="numeric"
            autoFocus="false"
            title="Phone"
            textContentType="telephoneNumber"
            autoCapitalize="none"
            value={phone}
            onChangeText={phone => setPhone(phone)}
            style={styles.inputStyle}
          />
  
        
        </View>
  
        <View style={styles.checkboxContainer}>
          {/* <CheckBox
            tintColors={{true: 'blue'}}
            checked= 'green'
            disabled={false}
            style={styles.checkbox}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          /> */}
          <Text style={styles.checkBoxText}>
            I agree with the terms and conditions and also the protection of my
            personal data on this application
          </Text>
        </View>
       
        {/* <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image
                  source={require('../../assets/authentication/Vector2.png')}
                />
                <Image
                  source={require('../../assets/authentication/Vector.png')}
                  style={{marginTop: 50, position: 'absolute'}}
                />
                <Image
                  source={require('../../assets/authentication/Ellipse1.png')}
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 115,
                    marginTop: -10,
                  }}
                />
                <Image
                  source={require('../../assets/authentication/Ellipse2.png')}
                  style={{
                    width: 7,
                    height: 7,
                    position: 'absolute',
                    marginTop: 20,
                    marginRight: -100,
                  }}
                />
                <Image
                  source={require('../../assets/authentication/Ellipse2.png')}
                  style={{width: 7, height: 7, marginLeft: 140, marginTop: -30}}
                />
                <Image
                  source={require('../../assets/authentication/Union.png')}
                  style={{marginTop: 70, position: 'absolute'}}
                />
                <Text style={styles.modalHeader}>
                  Account Information is Correct ?
                </Text>
                <Text style={styles.modalText}>
                  {' '}
                  I agree with the terms and conditions and also the protection of
                  my personal data on this application
                </Text>
  
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={HandleSignUp}
                 >
                  <Text style={styles.textStyle}>Accept</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View> */}
  
        <View style={{margin: 17, position: 'relative'}}>
          <Button title="Sign up"  onPress={() => console.log('Sign Up Success')}  />
        </View>
  
        {/* <TouchableOpacity >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity> */}
      </ScrollView>
    );
  };
  
  export default SignUp;