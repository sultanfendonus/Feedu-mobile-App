import React,{useEffect, useState} from 'react'
import { View, Text, FlatList } from 'react-native'
import CategoryItem from './CategoryItem';
import ItemList from './ItemList';
import MainApi from '../../api/MainApi';
import SearchBar from './SearchBar';
import Space from '../Space';
import GlobalStyle from '../../../GlobalStyle';
import CategoryLIst from './CategoryLIst';

const TrendingItem = () => {
    
  const [page, setPage] = useState(1);
  const [data , setData] = useState([]);
  const [pageCount, setPageCount] = useState(1);


  useEffect(()=>{
    getData();
  },[])

  //Need to refactor and put this on context 
  const getData = async ()=>{
    const response = await MainApi.get('/item?p='+page)
    console.log(page);
    setPageCount(response.data.pageCount)
    setData(data.concat(response.data.items));
    setPage(page+1)
  }

    const handleLoadMore = async ()=>{
      
      if(pageCount >= page){
        getData()
      }      
      
    }

    const headerFile = ()=>{
      return(
        <View>
          <SearchBar />               
          <Space height="10" />
          <Text style={GlobalStyle.title}>Categories: </Text>

          <CategoryLIst /> 
          <Space height="5" />
          <Text style={GlobalStyle.title}>Trending Items: </Text>


        </View>

      )
      
    }

    return (
        
            <FlatList
                data={data}
                renderItem={({ item }) => <ItemList item = {item} />}
                keyExtractor={item => item._id}
                onEndReached={()=>handleLoadMore()}
                onEndReachedThreshold={0.5}
                ListHeaderComponent={headerFile()}
            />
        
    )
}

export default TrendingItem
