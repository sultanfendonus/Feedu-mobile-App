import React from 'react'
import { View, Text, FlatList } from 'react-native'
import CategoryItem from './CategoryItem';
import ItemList from './ItemList';

const TrendingItem = () => {
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second',
        },
        {
          id: '58694a0f-471f-bd96-145571e29d72',
          title: 'Third',
        },
        {
            id: 'bd7acbea-c16c2-aed5-3ad53abb28ba',
            title: 'First',
          },
          {
            id: '3ac68afc-c6058d3-a4f8-fbd91aa97f63',
            title: 'Second',
          },
          {
            id: '58694a0f-3a1-471f-bd96-145571e29d72',
            title: 'Third',
          },
          {
            id: 'bd7acbea-c1b-46c2-aed5-3ad53abb28ba',
            title: 'First',
          },
          {
            id: '3ac68afc-c605-48d3-4f8-fbd91aa97f63',
            title: 'Second',
          },
          {
            id: '58694a0f-3da1-471f-bd96-14571e29d72',
            title: 'Third',
          },
      ];

    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <ItemList title={item.title} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default TrendingItem
