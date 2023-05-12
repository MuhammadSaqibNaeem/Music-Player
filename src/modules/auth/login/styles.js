import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainContainer: {backgroundColor: 'white'},
  SectionStyle: {
    flexDirection: 'row',
    margin: 20,
  },
  label: {
    position: 'absolute',
    marginLeft: 20,
    fontSize: 20,
    color: 'black',
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 25,
    paddingRight: 15,
    borderRadius: 10,
    borderColor: '#CBD5E1',
    borderWidth: 2,
    marginTop: 10,
    height: 50,
    fontSize: 20,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 25,
    alignItems: 'center',
    letterSpacing: 0.2,
    color: '#64748B',
    backgroundColor: '#F1F5F966',
  },

  SignButton: {
    width: 350,
    height: 49,
    margin: 20,
    backgroundColor: 'red',
  },
  buttonText: {
    width: 350,
    height: 49,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 16,
  },
  checkbox: {
    fontSize: 20,
    alignSelf: 'center',
  },
  checkBoxText: {
    marginLeft: 20,
    marginTop: 5,
    fontSize: 20,
    fontFamily: ' Poppins',
    fontSize: 13,
    lineHeight: 22,
    letterSpacing: 0.2,
  },

  forgetPassword: {
    color: 'orange',
    marginLeft: width / 20,
    marginTop: height / 50,
    fontSize:15,
    
  },
  buttonBox: {
    marginTop: height / 15,
  },
  dontBox: {
    flexDirection: 'row',
    marginTop: height / 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});