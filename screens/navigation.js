import { View, Text } from 'react-native'
import HomeScreen from './HomeScreen'
import NewPost from './NewPost'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import SignUpScreen from './SignUpScreen'
import LoginScreen from './LoginScreen'


const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false
}

export const SignedInStack = () => (

    <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={screenOptions} >

            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="NewPost" component={NewPost} />
        </Stack.Navigator>
    </NavigationContainer>
)

export const SignedOutStack = ()=>(
    <NavigationContainer>
    <Stack.Navigator initialRouteName='LoginScreen' screenOptions={screenOptions} >

        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
</NavigationContainer>
)
    
  

