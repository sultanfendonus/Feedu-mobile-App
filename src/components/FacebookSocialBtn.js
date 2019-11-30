import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../../String'

const SocialBtn = () => {
    
    return (
        <TouchableOpacity style={styles.container}>
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
