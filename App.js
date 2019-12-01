import React from 'react';
import { createAppContainer,
  createSwitchNavigator } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import SignIn from './src/screen/SignIn';
import SignUp from './src/screen/SignUp';
import HomeScreen from './src/screen/HomeScreen';
import CartScreen from './src/screen/CartScreen';
import AccountScreen from './src/screen/AccountScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import AddNewItemScreen from './src/screen/AddNewItemScreen';

const switchNavigator = createSwitchNavigator({
  mainFlow: createStackNavigator({
    AddItem: AddNewItemScreen,
    Home : HomeScreen,
    
    Cart : CartScreen,
    Account : AccountScreen
  }),
  loginFlow: createStackNavigator({
    SignIn : SignIn,
    SignUp : SignUp
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
        <AuthProvider>
          <App
            ref={navigator => {
              setNavigator(navigator);
            }}
          />
        </AuthProvider>
  );
};