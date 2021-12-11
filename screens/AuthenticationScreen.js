import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import ButtonComponent from '../components/ButtonComponent';
import SocialButton from '../components/SocialButton';
import auth from '@react-native-firebase/auth';
// import Carousel from '../components/Carousel'
// import { dummyData } from '../data/Data'
import { GoogleSignin } from '@react-native-google-signin/google-signin';


GoogleSignin.configure({
  webClientId: '440267365420-o8eh4fl790mg0l4p5shqqlsco5lasedb.apps.googleusercontent.com',
});

export default class App extends Component {

  onGoogleAuth = async () => {

    const { idToken } = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    return auth().signInWithCredential(googleCredential);


  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>

        <View style={styles.imageL} >
          <Image
            style={styles.tinyLogo}
            source={require('../assets/linkedin-logo.png')}
          />
        </View>


        {/* <View >
        <Carousel data={dummyData} />
      </View> */}

        <Image
          style={styles.stretch}
          source={require('../assets/B.jpg')}
        />

        <View style={styles.buttons}>
          <ButtonComponent onPress={() => navigation.navigate('SignUp2')} text='Join Now' />
          <SocialButton onPress={this.onGoogleAuth} text='Sign up With Google' />
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 18, marginTop: 20, color: '#0984e3' }}>
              Sign In
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
  stretch: {
    marginTop:80,
    width:320,
    height: 220,
    resizeMode: 'stretch'
  },
  tinyLogo: {
    width: 130,
    height: 50,
  },
  buttons: {
    marginTop: 60
  }
});

