import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../screens/Home/Home'
import { createDrawerNavigator } from '@react-navigation/drawer';
const DraweerTabs = () => {
    const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator useLegacyImplementation>
    <Drawer.Screen name="Feed" component={Home} />
  </Drawer.Navigator>
  )
}

export default DraweerTabs

const styles = StyleSheet.create({})