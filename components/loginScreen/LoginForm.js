import { View, Text, TextInput, Button, StyleSheet, Pressable, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

import { Formik } from 'formik'
import * as Yup from 'yup'
import validator from 'email-validator'
import firebase from '../../firebase'


const LoginForm = ({navigation}) => {

    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        password: Yup.string().required().min(6, 'Your password has to have at least 6 characters')
    })

    const onLogin = async (email, password) => {
        try{
            await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log("firebase Login Successful", email, password)
        }
        catch (error){
            Alert.alert('This is Wrong!',
            error.message + '\n\n ... What do would you like to do ?',
            [
                {
                    text: 'Retry',
                    onPress: () => console.log('Retry'),
                    style: 'cancel'
                },
                {
                    text: 'Sign up',
                    onPress: () => navigation.push('SignUpScreen')
                }
            ]
            
            )
        }
    }
  return (
    <View style={styles.wrapper}>

        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={values => {
                onLogin(values.email, values.password)
            }}
            validationSchema={LoginFormSchema}
            validateOnMount={true}
        >
            {({handleChange, handleBlur, handleSubmit, values, isValid})=>(

            <>

            
        <View style={[styles.inputField, {borderColor: values.email.length < 1 || validator.validate(values.email) ? '#CCC' : 'red'}]}>
        <TextInput 
            placeholder='Phone number, Username or Email'
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

        <TouchableOpacity style={{alignItems: 'flex-end', marginBottom: 30}}>
            <Text style={{color: '#6BB0F5'}}>
                Forgot Password ?
            </Text>
        </TouchableOpacity>
      {/* <Button title='Login' /> */}

      <Pressable titleSize={20} style={styles.button(isValid)}  
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>
            Log In
        </Text>
      </Pressable>

      <View style={styles.signUpContainer}>
         <Text>
            Don't have an account ?
         </Text>
         <TouchableOpacity onPress={() => navigation.push('SignUpScreen')}>
            <Text style={{color: "#6BB0F5"}}>
                Sign Up
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
        borderRadius: 4
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

export default LoginForm