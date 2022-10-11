/* eslint-disable linebreak-style */
import React from 'react';
import ButtonComponent from '../button/button-component';

function SocialButton() {
  const onSignInFacebook = () => {
    console.warn('FACEBOOK');
  };
  const onSignInGoogle = () => {
    console.warn('GOOGLE');
  };
  const onSignInApple = () => {
    console.warn('APPLE');
  };
  return (
    <>
      <ButtonComponent
        onPress={onSignInFacebook}
        text="Sign In with Facebook"
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <ButtonComponent
        onPress={onSignInGoogle}
        text="Sign In with Google"
        bgColor="FAE9EA"
        fgColor="#DD4D44"
      />
      <ButtonComponent
        onPress={onSignInApple}
        text="Sign In with Apple"
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
}

export default SocialButton;
