import React from 'react';
import {StatusBar, Platform} from 'react-native';
import {ThemeProvider} from 'styled-components';
import KeyboardManager from 'react-native-keyboard-manager';

import {AppRoutes} from './routes/app.routes';
import theme from './global/styles/theme';

const AppWrapper = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AppRoutes />
    </ThemeProvider>
  );
};

const App = () => {
  if (Platform.OS === 'ios') {
    KeyboardManager.setEnable(true);
    KeyboardManager.setToolbarDoneBarButtonItemText('OK');
    KeyboardManager.setToolbarTintColor('#000000');
    KeyboardManager.setToolbarBarTintColor('#FFFFFF');
    KeyboardManager.isKeyboardShowing();
  }

  return (
    // <Provider>
    <AppWrapper />
    // </Provider>
  );
};

export default App;
