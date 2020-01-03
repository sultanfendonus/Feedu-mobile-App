import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView  } from 'react-native'
import GlobalStyle from '../../GlobalStyle'
import DashBoardHeader from '../components/dashboard/DashBoardHeader'
import SearchBar from '../components/dashboard/SearchBar'
import CategoryLIst from '../components/dashboard/CategoryLIst'
import Space from '../components/Space'
import TrendingItem from '../components/dashboard/TrendingItem'

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={GlobalStyle.droidSafeArea}>
            <View style={{paddingLeft: 5, paddingRight: 5, flex: 1}}>
                <DashBoardHeader navigation={navigation} />

                
                <TrendingItem />

                

                    
                    

                
            </View>
            
        </SafeAreaView >
    )
}

HomeScreen.navigationOptions = {
    header: null
}

const styles = StyleSheet.create({
    
})

export default HomeScreen
