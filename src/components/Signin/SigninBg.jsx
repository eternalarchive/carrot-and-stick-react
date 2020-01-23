import React from 'react';
import { Col } from 'antd';
import styled from 'styled-components';

const StyledCol = styled(Col).attrs(() => ({
  span: 15,
}))`
  border: #fff solid 4px;
  border-right: none;
  position: alertive;
  height: 600px;
`;

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: inherit;
`;

const StyledTitleImg = styled.img`
  width: 100%;
  padding: 30px 0;
`;

const StyledBgImg = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const SigninBg = () => (
  <StyledCol>
    <StyledTitle>
      <StyledTitleImg src="/images/title.png"></StyledTitleImg>
    </StyledTitle>
    <StyledBgImg src="/moomin.gif" alt="Signin" />
  </StyledCol>
);

export default SigninBg;
