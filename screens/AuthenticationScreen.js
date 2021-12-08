import React,{Component} from 'react'
import { View, StyleSheet, Text, Image, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import ButtonComponent from '../components/ButtonComponent';
import GoogleSign from '../components/GoogleSign';
// import Carousel from '../components/Carousel'
// import { dummyData } from '../data/Data'

export default class App extends Component {
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

        {/* 
      <View >
        <Carousel data={dummyData} />
      </View> */}

        <View style={styles.buttons}>
          <ButtonComponent onPress={() => navigation.navigate('SignUp2')} text='Join Now' />
          <GoogleSign text='Sign up With Google' />
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
  tinyLogo: {
    width: 130,
    height: 50,
  },
  buttons: {
    marginTop: 60
  }
});

