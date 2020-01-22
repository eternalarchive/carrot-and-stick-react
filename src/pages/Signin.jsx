import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import SigninBg from '../components/Signin/SigninBg';
import SigninForm from '../components/Signin/SigninForm/SigninForm';

const StyledRow = styled(Row).attrs(() => ({
  type: 'flex',
  align: 'middle',
}))`
  height: 100vh;
`;

const StyledCol = styled(Col).attrs(() => ({
  span: 24,
}))``;

const StyledLayout = styled(Row).attrs(() => ({
  type: 'flex',
}))`
  background-color: inherit;
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
`;

const Signin = () => (
  <StyledRow>
    <StyledCol>
      <StyledLayout>
        <SigninBg />
        <SigninForm />
      </StyledLayout>
    </StyledCol>
  </StyledRow>
);

export default Signin;
