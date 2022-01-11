import React, { useState } from 'react';
import AuthForm from '../../shared-components/authForm';

function SignUpContainer() {
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
      name: 'name',
      label: 'Name',
      type: 'text',
      value: '',
      errorMessage: '',
      isValid: true,
      onvalidation: (value) => {
        console.log('name', value);
      },
    },
    {
      name: 'contact',
      label: 'Contact',
      type: 'tel',
      value: '',
      errorMessage: '',
      isValid: true,
      onvalidation: (value) => {
        console.log('contact', value);
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
      name: 'Sign Up',
      clickHandler: () => {
        console.log('sign up cliked');
      },
    },
  ];
  const authLink = {
    name: 'Login',
    path: '/',
  };
  return (
    <div>
      <AuthForm
        authButtons={authButtons}
        inputFields={inputFields}
        title={'Sign Up'}
        authLink={authLink}
      />
    </div>
  );
}

export default SignUpContainer;
