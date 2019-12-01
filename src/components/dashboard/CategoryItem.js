import React from 'react'
import { View, Text ,Image, Platform, StyleSheet} from 'react-native'

const CategoryItem = ({title}) => {
    return (
        <View style={{marginRight: 5, alignItems:"center", }}>
            <Image style={styles.image} source={require('../../../assets/profile.jpg')} />
            <Text style={{fontWeight:"bold"}}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: Platform.OS === 'ios'?60:90, 
        width: Platform.OS === 'ios'?60:90, 
        borderRadius: 5

    }
})

export default CategoryItem
