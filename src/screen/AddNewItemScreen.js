import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Image, Picker } from 'react-native'
import GlobalStyle from '../../GlobalStyle'
import Space from '../components/Space'
import ItemSaveBtn from '../components/dashboard/ItemSaveBtn'
import { Dropdown } from 'react-native-material-dropdown';

const AddNewItemScreen = () => {
    const [language, setLanguage] = useState('');

    let data = [{
        value: 'Banana',
        id: 1
      }, {
        value: 'Mango',
        id: 2
      }, {
        value: 'Pear',
        id: 3
      }];

      const getItem = (value)=>{
           console.log(value)
      }

    return (
        <View style={styles.container}>
            <Text style={GlobalStyle.title}>Item Title: </Text>

            <TextInput
                style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1 }}
                />

            <Space height="15" />

            <Text style={GlobalStyle.title}>Item Description: </Text>

            <TextInput
                style={{ height: 80, borderColor: 'gray', borderBottomWidth: 1 }}
                placeholder="Min 50 Characters Max 400 Characters"
                multiline={true}
                />

                <Space height="15" />

                <Text style={GlobalStyle.title}>Item Image: </Text>
                <View>
                    <Image style={styles.image} source={require('../../assets/image-placeholder.png')} />
                    <Text style={GlobalStyle.title}>+Add Photo</Text>
                </View>

                <Space height="15" />

                <Text style={GlobalStyle.title}>Choose Category: </Text>
                <Space height="15" />

               <Dropdown
                    label='Select A Category'
                    data={data}
                    onChangeText = {(value,index,data)=>console.log(data[index].id)}
                    
                />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    image: {
        width: 120,
        height: 120
    }
})

AddNewItemScreen.navigationOptions = ({navigation})=> {
    return{
        title: 'Add new Item',
        headerRight: <ItemSaveBtn navigation={navigation} />
    }
}
export default AddNewItemScreen
