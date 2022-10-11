/* eslint-disable linebreak-style */
import React, { useState } from 'react';

import {
  View, Image, StyleSheet, useWindowDimensions, ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../../assets/images/logo.jpg';
import InputComponent from '../../components/input-component';
import ButtonComponent from '../../components/button/button-component';
import SocialButton from '../../components/socialbuttons/social-button';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

function SignInScreen() {
  const navigation = useNavigation();
  const { height } = useWindowDimensions();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = () => {
    console.warn('TEST');
    navigation.navigate('Home');
  };
  const onForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };
  const onSignUp = () => {
    navigation.navigate('Signup');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
        <InputComponent placeholder="Username" value={user} setValue={setUser} />
        <InputComponent placeholder="Password" value={password} setValue={setPassword} onHide />
        <ButtonComponent onPress={onSignIn} text="Sign In" />
        <ButtonComponent
          onPress={onForgotPassword}
          text="Forgot Password"
          type="TERTIARY"
        />
        <SocialButton />
        <ButtonComponent
          onPress={onSignUp}
          text="Don't have an account ? Create One"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
}

export default SignInScreen;
