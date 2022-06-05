import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
      <Image 
      style={styles.logo} 
      source={require('../../assets/instalogo.png')} 
      />
      </TouchableOpacity>

      <View style={styles.iconContainer}>

        <TouchableOpacity >

          <Image source={require('../../assets/instaAdd.png')}  style={{width: 50, height: 30}}/>
              
        </TouchableOpacity>

        <TouchableOpacity>

          <Image source={require('../../assets/instaheart.png')}  style={styles.icon}/>
              
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.unreadBadge} >
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>

          <Image source={require('../../assets/instasendlogo.png')}  style={styles.icon}/>
              
        </TouchableOpacity>
        {/* <Text style={{color: 'white'}}>
            TEST
              </Text>
              <Text style={{color: 'white'}}>
            ALLO
              </Text>
              <Text style={{color: 'white'}}>
            TEST
              </Text> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,

  },

  iconContainer: {
    flexDirection: 'row',

  },

    logo:{
        width: 100,
        height: 50,
        resizeMode: 'contain'
    },
    icon:{
      
      width: 30,
      height: 30,
      marginLeft: 10,
      resizeMode: 'contain',
    },

    unreadBadge:{
      backgroundColor: 'red',
      position: 'absolute',
      left: 26,
      bottom: 18,
      width: 25,
      height: 18,
      borderRadius: 9,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
    },

    unreadBadgeText:{
      color: 'white',
      fontWeight: '600',
    }
})

export default Header