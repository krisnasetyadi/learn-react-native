/* eslint-disable linebreak-style */
import React, { useState } from 'react';

import {
  View, Text, StyleSheet, ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import InputComponent from '../../components/input-component';
import ButtonComponent from '../../components/button/button-component';

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

function ResetPassword() {
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    navigation.navigate('Home');
  };

  const onSignIn = () => {
    navigation.navigate('Signin');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>
        <InputComponent placeholder="Code" value={code} setValue={setCode} />
        <InputComponent placeholder="Enter your New Password" value={password} setValue={setPassword} />

        <ButtonComponent onPress={onSubmit} text="Send" />

        <ButtonComponent
          onPress={onSignIn}
          text="Back to Sign In"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
}

export default ResetPassword;
