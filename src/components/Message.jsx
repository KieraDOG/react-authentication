import styled, { css } from 'styled-components';

const Message = styled.div`
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 24px;

  ${(props) => ({
    error: css`
      background: rgb(253, 237, 237);
    `,
    success: css`
      background: rgb(237, 247, 237);
    `,
  }[props.type])}
`;

export default Message;
