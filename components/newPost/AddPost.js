import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import FormikPostUploader from './FormikPostUploader'



const AddPost = () => (
    <View style={styles.container} >
        <Header/>
        <FormikPostUploader/>
    </View>
)

const Header = () => (

    <View style={styles.headerContainer}>
        <TouchableOpacity>
             <Image source={require('../../assets/back.png')} style={{width: 30, height: 30}} />
        </TouchableOpacity>
       
      <Text style={styles.headerText}>New Post</Text>
      <Text></Text>
    </View>
  
)

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: 10,

    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText:{
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
        marginRight: 24,

       
    },
})

export default AddPost