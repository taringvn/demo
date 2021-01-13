import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import type {UnAuthorizedStackParamsList} from './types';

import NavigatorMap from './NavigatorMap';
import VerifyAccount from '../screens/Login/VerifyAccount';
import VerifyPassword from '../screens/Login/VerifyPassword';
import VerifyOTP from '../screens/Login/VerifyOTP';
import ForgotPassword from '../screens/ForgotPassword';
import Shops from '../screens/Shops';
import SetUpAccount from '../screens/SetUpAccount';

const Stack = createStackNavigator<UnAuthorizedStackParamsList>();

const UnAuthorizedNavigator = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      // initialRouteName={NavigatorMap.SetUpAccount}
      screenOptions={{animationEnabled: false}}>
      <Stack.Screen name={NavigatorMap.VerifyAccount} component={VerifyAccount} />
      <Stack.Screen name={NavigatorMap.VerifyPassword} component={VerifyPassword} />
      <Stack.Screen name={NavigatorMap.VerifyOTP} component={VerifyOTP} />
      <Stack.Screen name={NavigatorMap.ForgotPassword} component={ForgotPassword} />

      {/** those screens should be move to AuthorizedNavigator in the future */}
      <Stack.Screen name={NavigatorMap.Shops} component={Shops} />
      <Stack.Screen name={NavigatorMap.SetUpAccount} component={SetUpAccount} />
    </Stack.Navigator>
  );
};

export default UnAuthorizedNavigator;
