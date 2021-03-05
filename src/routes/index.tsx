import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../pages/Main';
import PlayerScreen from '../pages/Player';
import WebviewScreen from '../pages/Webview';
import {colors} from '../styles';

const {Navigator, Screen} = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <>
      <StatusBar
        backgroundColor={colors.secondary.lighter}
        barStyle="dark-content"
      />
      <NavigationContainer>
        <Navigator initialRouteName="Main" screenOptions={{headerShown: false}}>
          <Screen name="Main" component={MainScreen} />
          <Screen name="Player" component={PlayerScreen} />
          <Screen name="Webview" component={WebviewScreen} />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
