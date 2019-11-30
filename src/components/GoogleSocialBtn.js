import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../../String'

const GoogleSocialBtn = () => {
    
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={{color: "white",fontWeight: "bold", fontSize: 18}}>Google</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 122,
        height: 55,
        backgroundColor: colors.googleBtnColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:5
    }
})

export default GoogleSocialBtn
