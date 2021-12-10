import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native'
import { TextField } from 'react-native-material-textfield';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonComponent from "../components/ButtonComponent";
import auth from '@react-native-firebase/auth';
import GoogleSign from '../components/GoogleSign';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { AsyncStorage } from 'react-native';



export default class SignUpScreen extends Component {

    constructor(props) {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }



    registerUser = () => {
        auth().
            createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((createdUser) => {
                createdUser.user.updateProfile({
                    displayName: this.state.displayName

                })
            })
    }

    render() {
        const { navigation } = this.props;

        return (

            <View style={styles.container}>
                <KeyboardAvoidingView flex={1} behavior="padding"
                    justifyContent="center"
                    keyboardVerticalOffset={-400}>
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
                            keyboardType='name-phone-pad'
                            value={this.state.name}
                            onChangeText={text => this.setState(
                                { name: text }
                            )}
                        />


                        <TextField
                            label='Email'
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


                    </View>


                    <View style={styles.buttons}>
                        <ButtonComponent onPress={this.registerUser} text='SignUp' />
                        <GoogleSign text='Sign up With Google' />
                        <GoogleSign text='Sign up With FaceBook' />
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 18, marginTop: 20, color: '#0984e3' }}>
                                Sign In
                            </Text>
                        </TouchableOpacity>

                    </View>
                </KeyboardAvoidingView>
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
        width: 15,
        height: 20,
    },
    tinyLogo: {
        width: 132,
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
        marginTop: 42,
        marginBottom: 22
    }
})