import { View, Text, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup';
import { Formik } from 'formik';


const PLACEHOLDER_IMG = 'https://image.shutterstock.com/image-vector/no-image-vector-symbol-missing-260nw-1310632172.jpg'

const uploadPostSchema = Yup.object().shape( {
    imageUrl: Yup.string().url().required('Url required'),
    caption: Yup.string().max(2200, 'Caption characters limit!')
})
const FormikPostUploader = () => {

    const [thumbnailUrl, setThumbnailUrl]= useState(PLACEHOLDER_IMG)

  return (
    <Formik
    initialValues={{caption: '', imageUrl: ''}}
    onSubmit={(values) =>console.log(values)}
    validationSchema={uploadPostSchema}
    >
        {({handleBlur, handleChange, handleSubmit, values, errors, isValid})=>
        <>
        <View style={{margin: 20, justifyContent: 'space-between', flexDirection: 'row'}}>
            <Image source={{uri: PLACEHOLDER_IMG}} style={{width: 100, height: 100}} />
       
            <View style={{flex: 1, marginLeft: 12}}>
                <TextInput placeholder='Write a caption' placeholderTextColor='gray' multiline={true}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
                style={{color: 'white', fontSize: 20}}
                />
            </View>

       
        </View>
         
         
          <TextInput placeholder='Enter image Url' placeholderTextColor='gray'
        onChangeText={handleChange('imageUrl')}
        onBlur={handleBlur('imageUrl')}
        value={values.imageUrl}
        style={{color: 'white', fontSize: 18}}
         />
        </> 
        }
        
    </Formik>
  )
}

export default FormikPostUploader