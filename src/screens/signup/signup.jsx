/* eslint-disable linebreak-style */
import React from 'react';
import {
  View, Text, StyleSheet, ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import InputComponent from '../../components/input-component';
import ButtonComponent from '../../components/button/button-component';
import SocialButton from '../../components/socialbuttons/social-button';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

function SignUpScreen() {
  const {
    control, handleSubmit, formState: { errors }, watch,
  } = useForm();
  const navigation = useNavigation();
  const pass = watch('password');
  const onSignUp = (data) => {
    console.log('signup', data);
    navigation.navigate('Signup');
  };

  const onForgotPassword = () => {
    console.warn('FORGOT');
    navigation.navigate('ForgotPassword');
  };

  const onPresssTerm = () => {
    console.warn('TERM');
    // navigation.navigate('signup')
  };
  const onPresssPrivacy = () => {
    console.warn('PRIVATE');
    // navigation.navigate('signup')
  };
  const onSignIn = () => {
    console.warn('SIGN IN');
    navigation.navigate('signin');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create an Accont</Text>
        <InputComponent
          name="username"
          placeholder="Username"
          control={control}
          rules={{
            required: 'Username is required field',
            minLength: {
              value: 3,
              message: 'Username should be at least 3 characters long',
            },
            maxLength: {
              value: 3,
              message: 'Username should be max 24 characters long',
            },
          }}
          errors={errors}
        />
        <InputComponent
          name="email"
          placeholder="Email"
          control={control}
          rules={{
            pattern: {
              value: EMAIL_REGEX,
              message: 'Email is invalid',
            },
          }}
        />
        <InputComponent
          name="password"
          placeholder="Password"
          control={control}
          rules={{
            required: 'Password is a required field',
            minLength: {
              value: 8,
              message: 'Password should be 8 characters long',
            },
          }}
          onHide
        />
        <InputComponent
          name="password_confirmation"
          placeholder="Password Confirmation"
          control={control}
          rules={{
            validate: (value) => value === pass || 'Password do not match',

          }}
          onHide
        />
        <ButtonComponent onPress={handleSubmit(onSignUp)} text="Register" />
        <Text style={styles.text}>
          By registering, you confirm that you accept our
          <Text style={styles.link} onPress={onPresssTerm}>Terms of Use</Text>
          {' '}
          and
          {' '}
          <Text style={styles.link} onPress={onPresssPrivacy}>Privacy Policy</Text>
        </Text>
        <ButtonComponent
          onPress={onForgotPassword}
          text="Forgot Password"
          type="TERTIARY"
        />
        <SocialButton />
        <ButtonComponent
          onPress={onSignIn}
          text="Have an account ? Sign In"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
}

export default SignUpScreen;
