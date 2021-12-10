import React, { Component } from 'react'
import AuthenticationScreen from './screens/AuthenticationScreen'
import SignInScreen from './screens/SignInScreen'
import SignUpScreen from './screens/SignUpScreen'
import HomeScreen from './screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='AuthenticationScreen' screenOptions={{
          headerShown:
            false,
        }}>
          <Stack.Screen name="AuthenticationScreen" component={AuthenticationScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={AuthenticationScreen} />
          <Stack.Screen name="SignUp2" component={SignUpScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
