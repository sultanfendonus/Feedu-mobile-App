import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import GlobalStyle from '../../../GlobalStyle'
import {AntDesign, Entypo} from '@expo/vector-icons'


const ItemList = () => {
    return (
        <View style={styles.container}>
            <View>
            <Image style={styles.image} source={require('../../../assets/profile.jpg')} />

            </View>
            

            <View style={{padding: 10, marginRight: 5, flex:1}}>
                <Text style={GlobalStyle.title}>Facebook Social Apps</Text>
                <Text numberOfLines={3} style={{marginBottom: 5}}>Facebook is a jook pook  Social Platform which is not only a big Platform but also an awesome platform bjbj.</Text>
                <View style={{flexDirection: "row"}}>
                    <AntDesign style={{color: 'gold', marginRight: 3}} name ='star' size = {20} />
                    <Text style={{marginRight: 7}}>4.2</Text>
                    <Entypo style={{marginRight: 3}} name ='dot-single' size = {20} />
                    <Text>Total Review: 165</Text>


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
        height: 120,
        width: 120,
        borderRadius: 5,
    }
})
export default ItemList
