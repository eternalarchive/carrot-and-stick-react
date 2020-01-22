import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const SigninLoginForm = ({ className }) => {
  return (
    <StyledLoginForm className={className}>
      <StyledButton>
        <a href="https://github.com/login/oauth/authorize?client_id=9d52b5a1459f678926e6&redirect_uri=http://localhost:3000/home">
          Use
        </a>
      </StyledButton>
    </StyledLoginForm>
  );
};

const StyledLoginForm = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const StyledButton = styled(Button)`
  background-color: rgb(30, 74, 94);
  border: none;
  color: rgb(241, 246, 247);
  font-size: 16px;
  padding: 6px 30px;

  &:hover {
    color: #fff;
    background-color: inherit;
    box-shadow: 1px 1px rgb(30, 74, 94), -1px -1px rgb(30, 74, 94),
      1px -1px rgb(30, 74, 94), -1px 1px rgb(30, 74, 94);
  }
`;

export default SigninLoginForm;
