import React from 'react';
import styled from 'styled-components';

const StyledTextInput = styled.div`
margin-bottom: 24px;
`;

const Label = styled.label`
display: block;
margin-bottom: 8px;
font-size: 0.9rem;
color: rgb(45, 51, 58);
`;

const Input = styled.input`
border-radius: 3px;
color: #2d333a;
border: 1px solid ${(props) => (props.error ? '#ff4d4f' : '#c2c8d0')};
display: block;
width: 100%;
font-size: 1.25rem;
padding: 12px 16px;
`;

const Error = styled.p`
margin: 4px 0 0 0;
color: #ff4d4f;
font-size: 0.9rem;
`;

const TextInput = function TextInput({
  id,
  label,
  error,
  ...props
}) {
  return (
    <StyledTextInput>
      <Label htmlFor={id}>{label}</Label>
      <Input error={error} name={id} id={id} {...props} />
      {error && (<Error>{error}</Error>)}
    </StyledTextInput>
  );
};

export default TextInput;
