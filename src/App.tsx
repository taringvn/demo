import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigator from './navigations/AppNavigator';
import {StoreProvider} from './contexts';
import NotiDialog from './components/NotiDialog';

export default function App() {
  return (
    <NavigationContainer>
      <StoreProvider>
        <AppNavigator />
        <NotiDialog />
      </StoreProvider>
    </NavigationContainer>
  );
}
