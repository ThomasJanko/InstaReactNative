import { View, Text } from 'react-native'
import HomeScreen from './HomeScreen'
import NewPost from './NewPost'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false
}

const SignedInStack = () => (

    <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={screenOptions} >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="NewPost" component={NewPost} />
        </Stack.Navigator>
    </NavigationContainer>
)

    
  

export default SignedInStack