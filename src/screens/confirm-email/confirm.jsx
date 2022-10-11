/* eslint-disable linebreak-style */
import React from 'react';
import { useForm } from 'react-hook-form';
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

function ConfirmScreen() {
  const { control, handleSubmit } = useForm;
  const navigation = useNavigation();

  const onConfirm = (data) => {
    console.warn('onConfirm', data);
    navigation.navigate('home');
  };
  const onResend = () => {
    console.warn('onResend');
    // navigation.navigate('confirm-email')
  };
  const onSignIn = () => {
    navigation.navigate('signin');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your Email</Text>
        <InputComponent
          name="code"
          placeholder="Enter your confirmation code"
          control={control}
          rules={{ required: 'Code is required field' }}
        />

        <ButtonComponent onPress={handleSubmit(onConfirm)} text="Confirm" />
        <ButtonComponent
          onPress={onResend}
          text="Resend code"
          type="SECONDARY"
        />
        <ButtonComponent
          onPress={onSignIn}
          text="Back to Sign In"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
}

export default ConfirmScreen;
