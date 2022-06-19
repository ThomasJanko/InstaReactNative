import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SignedInStack, SignedOutStack } from './screens/navigation'
import {firebase} from './firebase'

const AuthNavigation = () => {

    const [currentUser, setCurrentUser]= useState(null)

    const userHandler = user => user? setCurrentUser(user) : setCurrentUser(null)

    useEffect(() => {
     return firebase.auth().onAuthStateChanged(user => userHandler(user))

    }, [])
    
  
  return (
    <>
    {currentUser? <SignedInStack/> : <SignedOutStack/>}
    </>
  )
}

export default AuthNavigation