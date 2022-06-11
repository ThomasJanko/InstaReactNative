import {  SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import { POSTS } from '../data/posts'
import BottomTab, {bottomIcons} from '../components/home/BottomTab'



const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Stories/>
      <ScrollView>
        {POSTS.map((post, index) =>(
          <Post post={post} key={index}/>
        ))}
        
      </ScrollView>
      <BottomTab icons={bottomIcons}/>
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