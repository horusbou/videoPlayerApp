/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';


import {
  ScrollView,
  Text,
  View,
  Button,
  StyleSheet
} from 'react-native';

import Search from './Components/SearchBar';
import Section from './Components/Section';
import VideoContainer from './Components/VidesContainer';
import GeneraleStack from './Stack/GeneraleStack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/Home';
import DetailsScreen from './Screens/Detail';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <>
        <NavigationContainer >
                <GeneraleStack/>
        </NavigationContainer>
    </>
  );
}
export default App;

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
  });

/**
 *
 *     // <ScrollView style={{flex:1}}>
      {/* <VideoContainer/>

    {/* </ScrollView>
 */
