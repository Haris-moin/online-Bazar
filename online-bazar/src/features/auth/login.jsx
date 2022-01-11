import React, { useState } from 'react';
import AuthForm from '../../shared-components/authForm';

function LoginContainer() {
  const [inputFields, setInputFields] = useState([
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      value: '',
      errorMessage: '',
      isValid: true,
      onvalidation: (value) => {
        console.log('email', value);
      },
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      errorMessage: '',
      value: '',
      isValid: true,
      onvalidation: (value) => {
        console.log('pass', value);
      },
    },
  ]);
  const authButtons = [
    {
      name: 'Login',
      clickHandler: () => {
        console.log('login cliked');
      },
    },
  ];
  const authLink = {
    name: 'Sign Up',
    path: '/signup',
  };
  return (
    <div>
      <AuthForm
        authButtons={authButtons}
        inputFields={inputFields}
        title={'Login'}
        authLink={authLink}
      />
    </div>
  );
}

export default LoginContainer;
