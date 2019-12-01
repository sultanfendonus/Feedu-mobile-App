import React from 'react'
import { View, Text , StyleSheet, Image, TouchableOpacity} from 'react-native'
import { appString } from '../../../String'
import {Entypo, MaterialIcons} from '@expo/vector-icons'
import Space from '../Space'

const DashBoardHeader = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Image style={styles.headerImage} source={require('../../../assets/profile.jpg')} />
                <Text style={styles.appName}>{ appString.appName }</Text>
            </View>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Entypo style={{}} name ='camera' size = {35} />
                <Space width= "5" />
                <TouchableOpacity onPress={()=>{navigation.navigate('AddItem')}}>
                    <MaterialIcons style={{}} name ='add-circle-outline' size = {45} />
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    headerImage: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    appName: {
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: 5
    }
})
export default DashBoardHeader
