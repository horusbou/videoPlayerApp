import React from 'react';
import {
  StyleSheet
} from 'react-native';

import GeneraleStack from './Stack/GeneraleStack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
