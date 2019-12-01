import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Image, Picker } from 'react-native'
import GlobalStyle from '../../GlobalStyle'
import Space from '../components/Space'
import ItemSaveBtn from '../components/dashboard/ItemSaveBtn'

const AddNewItemScreen = () => {
    const [language, setLanguage] = useState('');
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

                <Picker
                    selectedValue={language}
                    style={{height: 50, width: 200, borderWidth:1, borderColor:"black"}}
                    onValueChange={(itemValue, itemIndex) =>
                        setLanguage(itemValue)
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                    </Picker>

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
