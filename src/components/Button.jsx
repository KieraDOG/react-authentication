import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  display: block;
  width: 100%;
  border: 1px solid #635DFF;
  background-color: #635DFF;
  color: #ffffff;
  border-radius: 3px;
  padding: 12px 16px;
  font-size: 1.25rem;

  &:disabled {
    cursor: not-allowed;
    color: #00000040;
    border-color: #f5f5f5;
    background: #f5f5f5;
  }
`;

export default Button;
