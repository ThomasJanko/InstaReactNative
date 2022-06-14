import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import LoginForm from '../components/loginScreen/LoginForm'


const INSTA_LOGO = require('../assets/instagram.png')

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={INSTA_LOGO} style={{height: 100, width: 100}} />
      </View>
      <LoginForm navigation={navigation}/>
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

export default LoginScreen