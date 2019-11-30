import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import {colors} from '../../String'

const TextFieldSignIn = () => {
    return (
        <View style={styles.mainContainer}>
            <TextInput
                style={styles.inputField}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal:10,
        marginHorizontal:20,
        marginBottom: 5,
        flexDirection: "row",
        height: 50,
        shadowColor: colors.shadowColor,
        shadowOpacity: 0.80,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        backgroundColor: 'white'
    },
    inputField : {
        flex: 1,
        color: colors.textInputColor,
        fontWeight: "bold"

    }
})

export default TextFieldSignIn
