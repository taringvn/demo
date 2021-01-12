import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';

import NavigatorMap from './NavigatorMap';
import LoginScreen from '../screens/Login';
import type {UnAuthorizedStackParamsList} from './types';

const Stack = createStackNavigator<UnAuthorizedStackParamsList>();

const UnAuthorizedNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={NavigatorMap.Login} component={LoginScreen} />
      <Stack.Screen name={NavigatorMap.Register} component={View} />
      <Stack.Screen name={NavigatorMap.ForgotPassword} component={View} />
    </Stack.Navigator>
  );
};

export default UnAuthorizedNavigator;
