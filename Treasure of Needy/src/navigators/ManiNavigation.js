import React from 'react';
import { Image , Button } from 'react-native';
// import { createBottomTabNavigator } from 'react-navigation/bottom-tabs';
// import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import HospitalScreen from '../screens/Hospital/HospitalScreen'
import PharmacyPage from '../screens/Pharmacy/PharmacyScreen'
import DonatePage from '../screens/Donate/DonatePage'

import LoginPage from '../screens/Login/Login'
import RegisterPage from '../screens/Register/RegisterPage'

import MyDonationPage from '../screens/Pharmacy/MydonationScreen'

import HospitalDetailsPage from '../screens/Hospital/HospitalDeatils'
import OnBoardingPage from '../screens/OnBoarding/OnBoarding'

import * as Images from '../utility/Images'


function TabBarScreens() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Hospital" component={HospitalScreen} 
         options={{
          tabBarLabel: 'Hospital',
            tabBarIcon: ({ focused }) => (
                <Image
                source={!focused ? Images.HOSPITAL : Images.HOSPITAL_ACTIVE}
                style={{
                  height: 24,
                  width: 24
                }}
              />
            ),
          }}
          />
        <Tab.Screen name="Pharmacy" component={PharmacyPage}
         options={{
          tabBarLabel: 'Pharmacy',
          tabBarIcon: ({ focused }) => (
              <Image
              source={!focused ? Images.PHARMACY : Images.PHARMACY_ACTIVE}
              style={{
                height: 24,
                width: 24
              }}
            />
          ),
        }} />
        <Tab.Screen name="Donate" component={DonatePage} 
         options={{
          tabBarLabel: 'Donate',
          tabBarIcon: ({ focused }) => (
              <Image
              source={!focused ? Images.DONATE : Images.DONATE_ACTIVE}
              style={{
                height: 24,
                width: 24
              }}
            />
          ),
        }}/>
      </Tab.Navigator>
    );
  }


function AppNavigation() {
    return (
      <Stack.Navigator>
        {/* LoginPage */}
        <Stack.Screen name="OnBoardingPage" component={OnBoardingPage} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterPage} options={{headerShown: false}}/>
        <Stack.Screen name="Tabs" component={TabBarScreens} options={{headerShown: false}}/>
        <Stack.Screen name="AddDonationPage" component={MyDonationPage} options={{headerTitleAlign:'center', headerTitle:'Add Donation' , headerBackTitleVisible:false  }} />
        {/* <Stack.Screen name="Tabs" component={TabBarScreens} options={{headerShown: false}}/> */}
        <Stack.Screen name="Hospitaldetails" component={HospitalDetailsPage} options={{headerShown: false}} />
        
      </Stack.Navigator>
    );
  }
  
  
export default AppNavigation;

