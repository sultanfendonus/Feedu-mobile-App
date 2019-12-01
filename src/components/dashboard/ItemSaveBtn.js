import React,{useContext} from 'react'
import { View, Text } from 'react-native'
import { FontAwesome, MaterialIcons,Entypo } from '@expo/vector-icons';


const ItemSaveBtn = ({navigation}) => {


    return (
        <View>
           <MaterialIcons style= {{marginRight: 5,}} onPress={() => {
               
                
            }} style={{marginRight:10,}} name="done" size={32} />
        </View>
    )
}

export default ItemSaveBtn