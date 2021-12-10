import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextField } from 'react-native-material-textfield';
import ButtonComponent from "../components/ButtonComponent";
import auth from '@react-native-firebase/auth';
import GoogleSign from '../components/GoogleSign';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


GoogleSignin.configure({
    webClientId: '440267365420-o8eh4fl790mg0l4p5shqqlsco5lasedb.apps.googleusercontent.com',
});


export default class SignUpScreen extends Component {

    constructor(props) {
        super();
        this.state = {
            displayName: '',
            address: '',
            email: '',
            password: ''
        };
    }



    registerUser = () => {
        auth().
            createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((createdUser) => {
                createdUser.user.updateProfile({
                    displayName: this.state.displayName,
                    address: this.state.address
                })
                console.log('user account created!!')
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

        return auth().signInWithCredential(googleCredential);


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
                            label='Address'
                            keyboardType='default'
                            value={this.state.address}
                            onChangeText={text => this.setState(
                                { address: text }
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
                        <GoogleSign onPress={this.onGoogleAuth} text='Sign up With Google' />
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