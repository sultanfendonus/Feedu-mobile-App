import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import GlobalStyle from '../../../GlobalStyle'
import {AntDesign, Entypo} from '@expo/vector-icons'
import { appString } from '../../../String'


const ItemList = ({item}) => {
    return (
        <View style={styles.container}>
            <View>
            <Image style={styles.image} source={{uri: 
            `${appString.baseURL}${item.image}`
                }}/>

            </View>
            

            <View style={{padding: 10, marginRight: 5, flex:1}}>
                <Text style={GlobalStyle.title}>{item.title}</Text>
                <Text numberOfLines={2} style={{marginBottom: 5}}>{item.description}</Text>
                <View style={{flexDirection: "row"}}>
                    <AntDesign style={{color: 'gold', marginRight: 3}} name ='star' size = {20} />
                    <Text style={{marginRight: 7}}>{item.total_rate_point/item.num_of_rate}</Text>
                    <Entypo style={{marginRight: 3}} name ='dot-single' size = {20} />
                    <Text>Total Review: {item.num_of_rate}</Text>


                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "row",
        marginBottom: 5
        
    },
    image:{
        height: 110,
        width: 110,
        borderRadius: 5,
    }
})
export default ItemList
