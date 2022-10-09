import {  SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import { POSTS } from '../data/posts'
import BottomTab, {bottomIcons} from '../components/home/BottomTab'
import { db } from '../firebase'




const HomeScreen = ({navigation}) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collectionGroup('posts')
    // .orderBy('created_at', 'desc')
    .onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map(post => ({
        id: post.id, ...post.data()})))
    })
  }, [])
  
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories/>
      <ScrollView>
        {posts.map((post, index) =>(
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