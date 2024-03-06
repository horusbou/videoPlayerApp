import React from "react";

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "../Screens/Home";
import DetailsScreen from "../Screens/Detail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { VideoPlayer } from "../Screens/Player";

const Stack =  createNativeStackNavigator();


const GeneraleStack = () => {
    const screenOptions = {
        headerShown:false,
      };
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions} >
          <Stack.Screen  name="Home" component={HomeScreen} />
          <Stack.Screen  name="Details" component={DetailsScreen} />
          <Stack.Screen name="Videos" component={VideoPlayer} />
        </Stack.Navigator>
    );
  };

  export default GeneraleStack;
