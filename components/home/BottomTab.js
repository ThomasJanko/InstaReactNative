import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'


export const bottomIcons = [
    {
        name : 'Home',
        active: require('../../assets/home-active.png'),
        inactive: require('../../assets/home.png'),
    },

    {
        name : 'Search',
        active: require('../../assets/search-active.png'),
        inactive: require('../../assets/search.png'),
    },

    {
        name : 'Reels',
        active: require('../../assets/reels-active.png'),
        inactive: require('../../assets/reels.png'),
    },

    {
        name : 'Shop',
        active: require('../../assets/shop-active.png'),
        inactive: require('../../assets/shop.png'),
    },
    

];

const BottomTab = ({icons}) => {

    const [activeTab, setActiveTab] = useState('Home');

    const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            
            <Image source={activeTab==icon.name?  icon.active : icon.inactive} style={styles.icon}/>
           
 
        </TouchableOpacity>
        
    )

  return (
    <View style={styles.wrapper}>
    <View style={styles.container}>
      {icons.map((icon, index) => (
        <Icon key={index} icon={icon} />
      ))}
        <TouchableOpacity onPress={() => setActiveTab('Profil')}>
       <Image style={activeTab=='Profil'? styles.profilPicActive : styles.profilPic} source={{ uri: 'https://cdn.discordapp.com/attachments/805783824277569569/983394223409741924/20220606_173658.jpg'}}/>
       </TouchableOpacity>
       </View>
   
    </View>
  ) 
}

const styles = StyleSheet.create({

    wrapper:{
        position: 'absolute',
        width: '100%',
        bottom: '0%',
        zIndex: 999,
        backgroundColor: '#000'
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10
    },
    icon:{
        width: 24,
        height: 24,
    },
    profilPic: {
        width: 34,
        height: 34,
        borderRadius: 50,
        
    },

    profilPicActive: {
        width: 34,
        height: 34,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: 'white',
        
        
    }
})

export default BottomTab