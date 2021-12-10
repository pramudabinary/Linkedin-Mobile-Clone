import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/tabs/HomeScreen'
import PostScreen from '../screens/tabs/PostScreen'
import ConnectScreen from '../screens/tabs/ConnectScreen'
import NotificationScreen from '../screens/tabs/NotificationScreen'
import JobsScreen from '../screens/tabs/JobsScreen'

const Tab = createBottomTabNavigator();

const TabComponent = () => {
    return (
        <Tab.Navigator>

            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Connect" component={ConnectScreen} />
            <Tab.Screen name="Post" component={PostScreen} />
            <Tab.Screen name="Notification" component={NotificationScreen} />
            <Tab.Screen name="Jobs" component={JobsScreen} />

        </Tab.Navigator>
    )
}

export default TabComponent
