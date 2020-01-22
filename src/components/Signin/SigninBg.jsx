import React from 'react';
import { Col } from 'antd';
import styled from 'styled-components';

const StyledCol = styled(Col).attrs(() => ({
  span: 15,
}))`
  height: 600px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

const SigninBg = () => (
  <StyledCol>
    <StyledImg src="/moomin.gif" alt="Signin" />
  </StyledCol>
);

export default SigninBg;
