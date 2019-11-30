import React from 'react'
import { View, Text } from 'react-native'

const Space = ({height=0, width=0}) => {
    return (
        <View style={{marginTop: parseInt(height), marginLeft: parseInt(width)}}>
            
        </View>
    )
}

export default Space
