import createDataContext from './createDataContext';
import MainApi from '../api/MainApi';
import { navigate } from '../navigationRef';
import * as SecureStore from 'expo-secure-store';



const authReducer = (state, action) => {
  switch (action.type) {
    case 'sign_in':
      return { errorMessage: '', token: action.payload.token, email : action.payload.email };

      case 'add_error':
        return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const socialSignIn = dispatch => async (LoginObj) => {
  console.log('running the line')
  try {
    const avaterUrl = LoginObj.picture.data.url
    const response = await MainApi.post('/user/social-login', { email:LoginObj.email, password: LoginObj.id, firstName: LoginObj.first_name, lastName: LoginObj.last_name, avaterUrl: avaterUrl });
    
    console.log(response.data.token)

      dispatch({ type: 'sign_in', payload: {token : response.data.token,email : response.data.email} });
      await SecureStore.setItemAsync('token', response.data.token.toString());
      await SecureStore.setItemAsync('email',response.data.email);
      navigate('mainFlow');
    
    
  } catch (err) {
    console.log(err)
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in'
    });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { socialSignIn },
  { token: null, email: null, errorMessage: '' }
);