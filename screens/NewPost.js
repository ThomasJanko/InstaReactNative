import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import AddPost from '../components/newPost/AddPost'

const NewPost = ({navigation}) => {
  return (
   <View style={styles.container}>
    <AddPost navigation={navigation} />
   </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 40 : 0

    },
   
})


export default NewPost