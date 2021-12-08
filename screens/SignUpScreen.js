import React, { Component } from 'react'
import { Text, View,StyleSheet,Image } from 'react-native'
import {TextField} from 'react-native-material-textfield';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonComponent from "../components/ButtonComponent";

export default class SignUpScreen extends Component {
    render() {
        const { navigation,isSelected,setSelection } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.imageL} >
                    <Image
                        style={styles.tinyLogo}
                        source={require('../assets/linkedin-logo.png')}
                    />
                </View>

                <View style={styles.form}>
                    <Text style={styles.header}>Sign Up</Text>

                    <TextField
                        label='Full Name'
                        keyboardType='email-address'
                        // value={this.state.email}
                    // onChangeText={text => this.setState(
                    //     { email: text }
                    // )}
                    />

                    <TextField
                        label='Address'
                        keyboardType='email-address'
                    // value={this.state.email}
                    // onChangeText={text => this.setState(
                    //     { email: text }
                    // )}
                    />

                    <TextField
                        label='Email'
                        keyboardType='email-address'
                    // value={this.state.email}
                    // onChangeText={text => this.setState(
                    //     { email: text }
                    // )}
                    />

                    <TextField
                        label='Contact'
                        keyboardType='email-address'
                    // value={this.state.email}
                    // onChangeText={text => this.setState(
                    //     { email: text }
                    // )}
                    />

                    <TextField
                        label='Password'
                        keyboardType='ascii-capable'
                        secureTextEntry={true}
                    // value={this.state.password}
                    // onChangeText={text => this.setState(
                    //     { password: text }
                    // )}
                    />
                </View>


                <View style={styles.buttons}>
                    <ButtonComponent onPress={this.props.registerUser} text='SignUp' />
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
    label: {
      margin: 6,
    },
    buttons: {
      marginTop: 35
    }
  })