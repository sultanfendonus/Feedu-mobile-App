import React from 'react'
import { View, Text ,Image, Platform, StyleSheet} from 'react-native'
import { appString } from '../../../String'

const CategoryItem = ({category}) => {
    //console.log(category)
    return (
        <View style={{marginRight: 5, alignItems:"center", }}>
         <Image style={styles.image} source={{uri: 
            `${appString.baseURL}${category.thumbnail}`
            }}/> 
        <Text style={{fontWeight:"bold"}}>{category.name}</Text>
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
