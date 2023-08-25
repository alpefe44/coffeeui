import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/Screens/HomeScreen';


const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
    </NavigationContainer>
  )
}

export default Router