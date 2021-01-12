import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import type {AppStackParamsList} from './types';
import NavigatorMap from './NavigatorMap';
import UnAuthorizedStack from './UnAuthorizedNavigator';
import AuthorizedStack from './AuthorizedNavigator';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator<AppStackParamsList>();

function AppNavigator() {
  const isAuthorized = true;

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack.Navigator headerMode="none">
        {isAuthorized ? (
          <Stack.Screen
            name={NavigatorMap.UnAuthorizedStack}
            component={UnAuthorizedStack}
            options={{animationEnabled: false}}
          />
        ) : (
          <Stack.Screen
            name={NavigatorMap.AuthorizedStack}
            component={AuthorizedStack}
            options={{animationEnabled: false}}
          />
        )}
      </Stack.Navigator>
    </>
  );
}

export default AppNavigator;
