import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';

import {styles} from '../../modules/auth/register/styles';

const InputField = (props) => {

  const {title, placeholder, autoCapitalize,autoComplete,autoFocus,autoCorrect,
    cursorColor,keyboardAppearance,keyboardType,multiline,
    onBlur,onChange,onChangeText,onPress,placeholderTextColor,
    returnKeyLabel,returnKeyType, secureTextEntry,textAlign,
    textContentType ,style,onSubmitEditing,blurOnSubmit,ref,
    value,
  } = props;

  return (
    <SafeAreaView style={styles.mainContainer}>

      <Text style={styles.label}>{title} </Text>
      <View style={styles.SectionStyle}>

        <TextInput
          style={styles.inputStyle}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}     
          keyboardType={keyboardType}   
          autoCorrect={autoCorrect} 
          textContentType={textContentType}
          returnKeyType={returnKeyType}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={blurOnSubmit}
          ref={ref}
        />

      </View>

    </SafeAreaView>
  );
};

export default InputField;