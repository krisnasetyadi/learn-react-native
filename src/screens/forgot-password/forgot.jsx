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

function ForgotPassword() {
  const navigation = useNavigation();
  const [user, setUser] = useState('');

  const onSend = () => {
    navigation.navigate('ResetPassword');
  };
  const onSignIn = () => {
    navigation.navigate('Signin');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>
        <InputComponent placeholder="Username" value={user} setValue={setUser} />

        <ButtonComponent onPress={onSend} text="Send" />

        <ButtonComponent
          onPress={onSignIn}
          text="Back to Sign In"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
}

export default ForgotPassword;
