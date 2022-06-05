import {  SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 40 : 0

    },
   
})

export default HomeScreen