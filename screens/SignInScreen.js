import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from 'react-native'
import { TextField } from 'react-native-material-textfield';
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonComponent from "../components/ButtonComponent";
import SocialButton from "../components/SocialButton";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { LoginManager,Settings, AccessToken } from 'react-native-fbsdk-next';

GoogleSignin.configure({
  webClientId: '440267365420-o8eh4fl790mg0l4p5shqqlsco5lasedb.apps.googleusercontent.com',
});

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  signinUser = () => {
    auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log('signed in!');
        this.props.navigation.navigate('Home')
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }

  onGoogleAuth = async () => {

    const { idToken } = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // this.props.navigation.navigate('Home')

    return auth().signInWithCredential(googleCredential);


}

 
onFacebookAuth = async () => {

  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  return auth().signInWithCredential(facebookCredential);

}

  render() {
    const { navigation, isSelected, setSelection } = this.props;
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
            value={this.state.email}
            onChangeText={text => this.setState(
              { email: text }
            )}
          />
          <TextField
            label='Password'
            keyboardType='ascii-capable'
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={text => this.setState(
              { password: text }
            )}
          />

          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Remember me.</Text>
          </View>


          <TouchableOpacity>
            <Text style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 14, marginTop: 14, marginLeft: 8, color: '#0984e3' }}>
              Forget Password?
            </Text>
          </TouchableOpacity>

        </View>

        <View style={styles.buttons}>
          <ButtonComponent onPress={this.signinUser} text='Continue' />
          <SocialButton onPress={this.onGoogleAuth} text='Sign in With Google' />
          <SocialButton onPress={this.onFacebookAuth} text='Sign in With Facebook' />
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 18, marginTop: 20, color: '#0984e3' }}>
              Sign Up
            </Text>
          </TouchableOpacity>

        </View>





      </View>
    )
  }
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

