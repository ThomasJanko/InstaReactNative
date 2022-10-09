import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import {firebase, db } from '../../firebase'
import { BackgroundImage } from 'react-native-elements/dist/config'
// import { Divider } from 'react-native-elements'

const Post = ({post}) => {
    const handleLike = post =>{
        const currentLikeStatus = !post.likes_by_users.includes(
            firebase.auth().currentUser.email
        )
        db.collection('users').doc(post.owner_email).collection('posts').doc(post.id)
        .update({
            likes_by_users: currentLikeStatus? 
            firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.email) 
            :
            firebase.firestore.FieldValue.arrayRemove(firebase.auth().currentUser.email)
        })
        .then(()=>{
            console.log('Document Updated! ')
        })
        .catch((error) => console.error(error))
    }
    
  return (
    <View style={{marginBottom: 30}}>
        {/* <Divider width={1} orientation='vertical'/> */}
     <PostHeader post={post}/>
     <PostImage post={post} />
     <View style={{marginHorizontal: 15, marginTop: 10}}>
            <PostFooter post={post} handleLike={handleLike}/>
            <Likes post={post} /> 
            <Caption post={post}/> 
            <CommentsSection post={post}/> 
            <Comments post={post}/>
     </View>
  
    </View>
  )
}

const PostHeader = ({post}) => (
    <View 
    style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center',
    }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={{uri: post.profile_picture}} style={styles.story} />
            <Text style={{color: 'white', marginLeft: 5, fontWeight: '700'}}>
                {post.user}
            </Text>
        </View>
       <Text style={{color: 'white', fontWeight: '900', marginRight: 20}}>
    ...
       </Text>
    </View>
)

const styles = StyleSheet.create({
    story:{
      width: 35,
      height: 35,
      borderRadius: 50,
      borderWidth: 1.8,
      marginLeft: 6,
      borderColor: 'purple',
      // textAlign: 'center',
    },

    footericon: {
        width: 26,
        height: 26,
        // marginLeft: 5,
    },
    leftFooterIconsContainer:{
        width: '32%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
  })


  const PostImage = ({post}) => (
      <View style={{width: '100%', height: 400}}>
        <Image
            source={{uri: post.imageUrl}}
            style={{height: '100%', resizeMode: 'cover'}} 
        />
    </View>
  )


  const PostFooter = ({handleLike, post}) => (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.leftFooterIconsContainer}>
            <TouchableOpacity onPress={()=> handleLike(post)}>
                <Image  style={styles.footericon} source={require('../../assets/instaheart.png')} />
            </TouchableOpacity> 
            {/* <Image  style={styles.footericon} source={require('../../assets/instaheart.png')} /> */}
            <Image style={{width: 22, height: 22 }} source={require('../../assets/instacomment.jpg')} />
            <Image  style={styles.footericon} source={require('../../assets/instasendlogo.png')} />
          </View>

          <View>
            
          <Image style={{width: 20, height: 20 }} source={require('../../assets/instaboomark.png')} />

          </View>
      </View>
  )

  const Likes = ({post}) => (
      <View style={{flexDirection: 'row', marginTop: 4}}>
          <Text style={{color: 'white', fontWeight: '600'}}>
                {post.likes_by_users.length } likes
          </Text>
      </View>
  )

  const Caption = ({post}) =>(
      <View style={{marginTop: 5}}>
          <Text style={{color: 'white'}}>
          <Text style={{fontWeight: '800'}}>{post.user} </Text>
              <Text> {' '} {post.caption} </Text>
          </Text>
          
      </View>
  )

  const CommentsSection =({post}) => (
      <View style={{marginTop: 5}}>
          {post.comments.length>1 && (
          <Text style={{color: 'gray'}}>
             View {post.comments.length > 1? 'all' : ''} {post.comments.length}
           {' '} {post.comments.length> 1 ? 'comments': 'comment'}
          </Text>
          )}

      </View>
  )

  const Comments = ({post}) => (
      <View>
          {post.comments.map((comment, index)=> (
              <View key={index} style={{flexDirection: 'row', marginTop: 2}}>
                    <Text style={{color: 'white'}}>
                    <Text style={{fontWeight: '800'}}>{comment.user}</Text>
                     {' '} {comment.comment}
                    </Text> 
              </View>
             
          ))} 
          
      </View>
  )

export default Post