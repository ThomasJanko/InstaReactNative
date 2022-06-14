import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import LoginForm from '../components/loginScreen/LoginForm'
import SignUpForm from '../components/signUpScreen/SignUpForm'

const INSTA_LOGO = require('../assets/instagram.png')

const SignUpScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={INSTA_LOGO} style={{height: 100, width: 100}} />
          </View>
          <SignUpForm navigation={navigation}/>
        </View>
      )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
    },

    logoContainer:{
        alignItems: 'center',
        marginTop: 60,
    }

})

export default SignUpScreen