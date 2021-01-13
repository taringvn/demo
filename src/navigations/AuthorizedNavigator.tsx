import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';

import NavigatorMap from './NavigatorMap';

const Stack = createStackNavigator();

const AuthorizedNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={NavigatorMap.Shops} component={View} />
    </Stack.Navigator>
  );
};

export default AuthorizedNavigator;
