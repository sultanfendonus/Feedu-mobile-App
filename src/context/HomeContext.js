import createDataContext from './createDataContext';
import MainApi from '../api/MainApi';
import { navigate } from '../navigationRef';



const HomeReducer = (state, action) => {
  switch (action.type) {
    case 'all_category':
      return { ...state, categories: action.payload };


    default:
      return state;
  }
};

const getAllCategories = dispatch => async () => {
  try {
    const response = await MainApi.get('/category/list');
    dispatch({ type: 'all_category', payload: response.data });

    
    
  } catch (err) {
    console.log(err)
  }
};



export const { Provider, Context } = createDataContext(
    HomeReducer,
  { getAllCategories },
  { categories: [] }
);