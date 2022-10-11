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

function ResetPassword() {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const onSubmit = (data) => {
    console.warn(data);
    navigation.navigate('Home');
  };

  const onSignIn = () => {
    navigation.navigate('Signin');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>
        <InputComponent
          name="code"
          placeholder="Code"
          control={control}
          rules={{ required: 'Code is required field' }}
        />
        <InputComponent
          name="password"
          placeholder="Enter your New Password"
          control={control}
          onHide
          rules={{
            required: 'Password is a required field',
            minLength: {
              value: 8,
              message: 'Password should be 8 characters long',
            },
          }}
        />

        <ButtonComponent onPress={handleSubmit(onSubmit)} text="Send" />

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
