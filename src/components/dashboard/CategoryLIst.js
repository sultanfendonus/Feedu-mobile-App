import React,{useContext, useEffect} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import CategoryItem from './CategoryItem';
import {Context as HomeContext} from '../../context/HomeContext'

const CategoryLIst = () => {
    const {state, getAllCategories} = useContext(HomeContext)
    useEffect(()=>{
      getAllCategories();
    },[])
    return (
        <View>
            <FlatList
                data={state.categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <CategoryItem category={item} />}
                keyExtractor={item => item._id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default CategoryLIst

