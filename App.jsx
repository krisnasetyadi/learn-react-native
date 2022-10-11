/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
// import SignInScreen from './src/screens/signin/signin';
// import SignUpScreen from './src/screens/signup/signup';
// import ConfirmEmail from './src/screens/confirm-email';
// import ForgotPassword from './src/screens/forgot-password/forgot';
// import ResetPassword from './src/screens/reset password/reset';
import Navigation from './src/navigation';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});
function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
}

export default App;
