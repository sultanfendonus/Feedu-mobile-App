import React from 'react'
import { View, Text ,Image} from 'react-native'

const CategoryItem = ({title}) => {
    return (
        <View style={{marginRight: 5, alignItems:"center", }}>
            <Image style={{height: 90, width: 90, borderRadius: 5}} source={require('../../../assets/profile.jpg')} />
            <Text style={{fontWeight:"bold"}}>{title}</Text>
        </View>
    )
}

export default CategoryItem
