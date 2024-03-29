import { View, Text, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Button } from 'react-native';
import validUrl from 'valid-url'
import {db, firebase} from '../../firebase'


const PLACEHOLDER_IMG = 'https://image.shutterstock.com/image-vector/no-image-vector-symbol-missing-260nw-1310632172.jpg'

const uploadPostSchema = Yup.object().shape( {
    imageUrl: Yup.string().url().required('Url required'),
    caption: Yup.string().max(2200, 'Caption characters limit!')
})
const FormikPostUploader = ({navigation}) => {

    const [thumbnailUrl, setThumbnailUrl]= useState(PLACEHOLDER_IMG)
    const [currentLoggedInUser, setCurrentLoggedinUser] = useState(null)

    const getUsername = () => {
        const user = firebase.auth().currentUser
        const unsubscribe = db.collection('users').where('owner_uid', '==', user.uid).limit(1).onSnapshot(
            snapshot => snapshot.docs.map(doc => {
                setCurrentLoggedinUser({
                    username: doc.data().username,
                    profilePicture: doc.data().profile_picture,
                })
            })
        )
        return unsubscribe
    }

    useEffect(() => {
      getUsername() 
    }, [])

    const uploadPostToFirebase = (imageUrl, caption) => {
        const unsubscribe = db.collection('users').doc(firebase.auth().currentUser.email).collection('posts')
        .add({
            imageUrl: imageUrl,
            user: currentLoggedInUser.username,
            profile_picture: currentLoggedInUser.profilePicture,
            owner_email : firebase.auth().currentUser.email,
            owner_uid: firebase.auth().currentUser.uid,
            caption: caption,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            likes: 0,
            likes_by_users: [],
            comments: [],
        })
        .then(()=> navigation.goBack())

        return unsubscribe
    }
    

  return (
    <Formik
    initialValues={{caption: '', imageUrl: ''}}
    onSubmit={(values) => {
       uploadPostToFirebase(values.imageUrl, values.caption)
    }}
    validationSchema={uploadPostSchema}
    validateOnMount={true}
    >
        {({handleBlur, handleChange, handleSubmit, values, errors, isValid})=>
        <>
        <View style={{margin: 20, justifyContent: 'space-between', flexDirection: 'row'}}>
            <Image source={{uri: validUrl.isUri(thumbnailUrl)? thumbnailUrl: PLACEHOLDER_IMG}} 
                   style={{width: 100, height: 100}} 
            />
       
            <View style={{flex: 1, marginLeft: 12}}>
                <TextInput 
                    placeholder='Write a caption' placeholderTextColor='gray' multiline={true}
                    onChangeText={handleChange('caption')}
                    onBlur={handleBlur('caption')}
                    value={values.caption}
                    style={{color: 'white', fontSize: 20}}
                />
            </View>

       
        </View>
         
         
        <TextInput
            onChange={(e)=> setThumbnailUrl(e.nativeEvent.text)}
            placeholder='Enter image Url' placeholderTextColor='gray'
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            value={values.imageUrl}
            style={{color: 'white', fontSize: 18}}
         />

         {errors.imageUrl && (
            <Text style={{fontSize: 10, color: 'red'}}> {errors.imageUrl}</Text>
         )}

         <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
        </> 
        }
        
    </Formik>
  )
}

export default FormikPostUploader