import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from 'react-native'
import {
  TextField
} from 'react-native-material-textfield';
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonComponent from "../components/ButtonComponent";
import GoogleSign from "../components/GoogleSign";
const SignInScreen = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.imageL} >
        <Image
          style={styles.tinyLogo}
          source={require('../assets/Linkedin-Logo_new.png')}
        />
      </View>

      <View style={styles.form}>
        <Text style={styles.header}>Sign In</Text>

        <TextField
          label='Email or Phone'
          keyboardType='email-address'
        />
        <TextField
          label='Password'
          keyboardType='ascii-capable'
          secureTextEntry={true}
        />

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Remember Me</Text>
        </View>


        <TouchableOpacity>
          <Text style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 14, marginTop: 14, marginLeft: 8, color: '#0984e3' }}>
            Forget Password?
          </Text>
        </TouchableOpacity>

      </View>

      <View style={styles.buttons}>
        <ButtonComponent text='Join Now' />
        <GoogleSign text='Sign in With Google' />
        <GoogleSign text='Sign in With Facebook' />
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={{ fontWeight: 'bold',textAlign:'center',fontSize:18,marginTop:10,color:'#0984e3' }}>
            Sign Up
          </Text>
        </TouchableOpacity>

      </View>





    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#eaeaea"
  },
  imageL: {
    width: 20,
    height: 20,
  },
  tinyLogo: {
    width: 130,
    height: 32,
    marginBottom: 20
  },
  form: {

  },
  header: {
    color: 'black',
    marginTop: 20,
    fontSize: 38,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 6,
  },
  buttons: {
    marginTop: 35
  }
})


export default SignInScreen
