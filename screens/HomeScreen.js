import {  SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import { POSTS } from '../data/posts'
import BottomTab, {bottomIcons} from '../components/home/BottomTab'
import { db } from '../firebase'



const HomeScreen = ({navigation}) => {

  useEffect(() => {
    db.collectionGroup('posts').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data()))
    })
  }, [])
  
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
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