import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../../String'

const SignInBtn = ({navigation}) => {
    return (
        <TouchableOpacity onPress={()=>{navigation.navigate('Home')}} style={styles.btnStyle}>
            <Text style= {styles.btnText}>Sign In</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnStyle: {
        width: 300,
        height: 47,
        backgroundColor: colors.signInBtnColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    btnText: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 22
    }
}) 

export default SignInBtn
