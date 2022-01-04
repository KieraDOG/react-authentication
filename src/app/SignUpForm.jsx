import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Logo from '../components/Logo';
import Message from '../components/Message';
import TextInput from '../components/TextInput';

const Helper = styled.p`
  text-align: center;
  color: rgb(45, 51, 58);
  margin-bottom: 36px;
`;

const StyledSignUpForm = styled.form`
`;

const FORM_FIELDS = [{
  key: 'email',
  label: 'Email',
  type: 'text',
  getErrorMessage: (data) => {
    if (!data.email) {
      return 'Please input your email';
    }

    return '';
  },
}, {
  key: 'password',
  label: 'Password',
  type: 'password',
  getErrorMessage: (data) => {
    if (!data.password) {
      return 'Please input your password';
    }

    return '';
  },
}, {
  key: 'confirmPassword',
  label: 'Confirm password',
  type: 'password',
  getErrorMessage: (data) => {
    if (!data.confirmPassword) {
      return 'Please confirm your password';
    }

    if (data.password !== data.confirmPassword) {
      return 'Your confirm password does not match to password';
    }

    return '';
  },
}];

const validate = (data) => Object
  .keys(FORM_FIELDS)
  .every((key) => {
    const field = FORM_FIELDS[key];

    return !field.getErrorMessage(data);
  });

const SignUpForm = function SignUpForm() {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState();

  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <div>
      <Logo>LOGO</Logo>
      <Helper>Sign up to react-authentication</Helper>
      <StyledSignUpForm
        onSubmit={(event) => {
          event.preventDefault();

          if (!validate(data)) {
            return;
          }

          setLoading(true);

          axios.post('http://localhost:8000/auth/sign-up', {
            email: data.email,
            password: data.password,
          })
            .then(setResponse)
            .catch((error) => setResponse(error.response))
            .finally(() => setLoading(false));
        }}
      >
        {response && ({
          200: (
            <Message type="success">You are successfully signed in!</Message>
          ),
          409: (
            <Message type="error">Email exists, please try another one</Message>
          ),
        }[response.status])}
        {FORM_FIELDS.map((field) => (
          <TextInput
            key={field.key}
            label={field.label}
            type={field.type}
            error={touched[field.key] && field.getErrorMessage(data)}
            value={data[field.key]}
            onChange={(event) => setData((prevData) => ({
              ...prevData,
              [field.key]: event.target.value,
            }))}
            onBlur={() => setTouched((prevTouched) => ({
              ...prevTouched,
              [field.key]: true,
            }))}
          />
        ))}
        <Button type="submit" disabled={!validate(data) || loading}>SIGN UP</Button>
      </StyledSignUpForm>
    </div>
  );
};

export default SignUpForm;
