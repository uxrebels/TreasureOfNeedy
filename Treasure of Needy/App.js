/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Alert,PermissionsAndroid
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigators/ManiNavigation'
import Geolocation from 'react-native-geolocation-service';


import { Provider } from "react-redux";
import  store  from './src/redux/store/store'

import {GET_CURRENT_LOCATION} from './src/redux/action/locationType'

class App extends React.Component{

  constructor(props){
    super(props)
  }
  
  componentDidMount() {

  //  this.permission();
   
  }

  permission = async () =>{

    const locationPermission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
    if (locationPermission === PermissionsAndroid.RESULTS.GRANTED) {
      this.findCoordinates();
    } else {
      console.log("permission denied");
    }
  }

  findCoordinates = () => {
    Geolocation.getCurrentPosition(
      (position) => {
          console.log(position);
          Alert.alert('Treasure of Needy - location' , JSON.stringify(position))
          store.dispatch({type:GET_CURRENT_LOCATION , value : position});
          store.dispatch({type:'mycheck',value:'JAYAKIRAN'})
      },
      (error) => {
        
          console.log(error.code, error.message);
  
         
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
	};

  


   render(){
     return(
      <Provider store={store}>
      <NavigationContainer>
        <AppNavigation/>
        </NavigationContainer>

        </Provider>
     )
   }
   
}





export default App;
