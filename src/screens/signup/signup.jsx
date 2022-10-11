/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
  const navigation = useNavigation();
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const onSignUp = () => {
    navigation.navigate('signup');
  };

  const onForgotPassword = () => {
    console.warn('FORGOT');
    navigation.navigate('forgot-password');
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
        <InputComponent placeholder="Username" value={user} setValue={setUser} />
        <InputComponent placeholder="Email" value={email} setValue={setEmail} />
        <InputComponent
          placeholder="Password"
          value={password}
          setValue={setPassword}
          onHide
        />
        <InputComponent
          placeholder="Password Confirmation"
          value={passwordConfirm}
          setValue={setPasswordConfirm}
          onHide
        />
        <ButtonComponent onPress={onSignUp} text="Register" />
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
