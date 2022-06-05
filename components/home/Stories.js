import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'

import {USERS} from '../../data/users'

const Stories = () => {
  return (
    <View style={{marginBottom: 13}}>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

          {USERS.map((story, index)=> (
            <View key={index} style={{alignItems: 'center'}}>
             <Image source={{uri: story.image}}
             style={styles.story}
             />
                  
             <Text style={{color: 'white'}} >
               {story.user.length > 11 ? story.user.slice(0,10).toLowerCase() + '...' 
               : 
               story.user.toLocaleLowerCase()
               }
              
                
                </Text> 

        </View>
          ))}

       
      </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
  story:{
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    marginLeft: 8,
    borderColor: 'purple',
    // textAlign: 'center',
  }
})

export default Stories