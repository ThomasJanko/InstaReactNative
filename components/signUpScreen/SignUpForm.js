import { View, Text, TextInput, Button, StyleSheet, Pressable, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import {firebase, db} from '../../firebase'
import { Formik } from 'formik'
import * as Yup from 'yup'
import validator from 'email-validator'

const SignUpForm = ({navigation}) => {

    const SignUpFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(2, 'A username is required'),
        password: Yup.string().required().min(6, 'Your password has to have at least 6 characters')
    })

    const getRandomProfilePicture = async () => {
        const response = await fetch('https://randomuser.me/api')
        const data = await response.json()
        return data.results[0].picture.large
    }

    const onSignUp = async (email, password, username)=> {
        try{
            const authUser = await firebase.auth().createUserWithEmailAndPassword(email, password)
            console.log('New User created: ', email, password, username)
            db.collection('users').doc(authUser.user.email).set({
                owner_uid: authUser.user.uid,
                username: username,
                email: authUser.user.email,
                profile_picture: await getRandomProfilePicture()
            })
        }
        catch(error){
            Alert.alert('My Lord ...', error.message)
        }
    }
  return (
    <View style={styles.wrapper}>

        <Formik
            initialValues={{email: '', username: '', password: ''}}
            onSubmit={values => {
                onSignUp(values.email, values.password, values.username)
            }}
            validationSchema={SignUpFormSchema}
            validateOnMount={true}
        >
            {({handleChange, handleBlur, handleSubmit, values, isValid})=>(

            <>

            
        <View style={[styles.inputField, {borderColor: values.email.length < 1 || validator.validate(values.email) ? '#CCC' : 'red'}]}>
        <TextInput 
            placeholder='Email'
            placeholderTextColor='#444'
            autoCapitalize='none'
            keyboardType='email-address'
            textContentType='emailAddress'
            autoFocus={false}

            onChangeText={handleChange('email')}
            onBlur= {handleBlur('email')}
            value={values.email}
        />
      </View>

      <View style={[styles.inputField, {borderColor: 1 > values.username.length || values.username.length>2 ? '#CCC' : 'red'}]}>
        <TextInput 
             placeholder='Username'
             placeholderTextColor='#444'
             autoCapitalize='none'
             textContentType='username'
             autoFocus={false}
 
             onChangeText={handleChange('username')}
             onBlur= {handleBlur('username')}
             value={values.username}
            
        />
      </View>

    <View style={[styles.inputField, {borderColor: 1 > values.password.length  || values.password.length>=6 ? '#CCC' : 'red'}]}>
        <TextInput 
            placeholder='Password'
            placeholderTextColor='#444'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            textContentType='password'

            onChangeText={handleChange('password')}
            onBlur= {handleBlur('password')}
            value={values.password}
            
        />
      </View>


      <Pressable titleSize={20} style={styles.button(isValid)}  
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>
            Sign Up
        </Text>
      </Pressable>

      <View style={styles.signUpContainer}>
         <Text>
            Already have an account ?
         </Text>
         <TouchableOpacity onPress={() => navigation.push("LoginScreen")}>
            <Text style={{color: "#6BB0F5"}}>
                Log In
            </Text>
         </TouchableOpacity>
      </View>
      </>
      )}
      </Formik>
    </View>
  )
}

const styles= StyleSheet.create({

    wrapper:{
        marginTop: 80,
    },

    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1
    
    },

    button:(isValid) => ({
        backgroundColor: isValid? '#0096F6' : '#9ACAF7' ,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
        marginTop: 40,
    }),

    buttonText:{
        fontWeight: '600',
        color: '#fff',
        fontSize: 20,
    },
    signUpContainer:{
        
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 40,
    }
})


export default SignUpForm