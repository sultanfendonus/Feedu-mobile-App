import React,{useState, useContext} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { colors } from '../../String'
import * as Facebook from 'expo-facebook'
import {Context as AuthContext} from '../context/AuthContext'

const SocialBtn = () => {

    const [fbLoginInfo,setFbLoginInfo] = useState({});
    const {socialSignIn} = useContext(AuthContext);

    async function logIn() {
        try {
          const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
          } = await Facebook.logInWithReadPermissionsAsync('746867612461197', {
            permissions: ['email','public_profile'],
          });
          if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,first_name,last_name,email,picture.height(500)`);
            //Alert.alert('Logged in!');
            socialSignIn(await response.json())
            //setFbLoginInfo(await response.json())
            //console.log(fbLoginInfo)
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
      }
    
    return (
        <TouchableOpacity
        onPress={()=>logIn()}
        style={styles.container}>
            <Text style={{color: "white",fontWeight: "bold", fontSize: 18}}>Facebook</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 122,
        height: 55,
        backgroundColor: colors.facebookbtnColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:5
    }
})

export default SocialBtn
