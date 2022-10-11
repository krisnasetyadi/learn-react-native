/* eslint-disable linebreak-style */
import React from 'react';

import {
  View, Image, StyleSheet, useWindowDimensions, ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
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
  const { control, handleSubmit, formState: { errors } } = useForm();

  console.log('errors ', errors);
  const onSignIn = (data) => {
    console.warn('TEST', data);
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
        <InputComponent
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: 'username is required' }}
        />
        <InputComponent
          name="password"
          placeholder="Password"
          control={control}
          onHide
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be 3 characters long',
            },
          }}
        />

        <ButtonComponent onPress={handleSubmit(onSignIn)} text="Sign In" />
        <ButtonComponent
          onPress={onForgotPassword}
          text="Forgot Password"
          type="TERTIARY"
        />
        <SocialButton />
        <ButtonComponent
          onPress={handleSubmit(onSignUp)}
          text="Don't have an account ? Create One"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
}

export default SignInScreen;
