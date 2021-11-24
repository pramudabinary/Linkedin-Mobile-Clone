import React from 'react'
import { View, StyleSheet,Image } from 'react-native'
import 'react-native-gesture-handler';
import Carousel from '../components/Carousel'
import { dummyData } from '../data/Data'

const  AuthenticationScreen = () => {
    return (
        <View style={styles.container}>

                <View style={styles.imageL} >
                <Image
        style={styles.tinyLogo}
        source={require('../assets/linkedin-logo.png')}
      />
                </View>

                <View >
                <Carousel data = {dummyData}/>
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
    imageL:{
        width:20,
        height:20,
    },
    tinyLogo:{
      // marginBottom:100,
        width:150,
        height:50,
    }
  });
  

export default AuthenticationScreen;
