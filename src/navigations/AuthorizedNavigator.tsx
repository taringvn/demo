import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import NavigatorMap from './NavigatorMap';
import HomeScreen from '../screens/Home';

const Stack = createStackNavigator();

const AuthorizedNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={NavigatorMap.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AuthorizedNavigator;
