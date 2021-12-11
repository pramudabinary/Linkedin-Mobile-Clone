import React,{Component} from 'react'
import { View,Button, Text } from 'react-native'
import auth from '@react-native-firebase/auth';


export default class HomeScreen extends Component {

    signOut = () =>{
        auth()
        .signOut()
        .then(() => {
            console.log('signed out!!');
            this.props.navigation.navigate('AuthenticationScreen')
          })

    }


render(){
    return (
        <View>
            <Button
            onPress={this.signOut}
            title="SignOut"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )}
}


