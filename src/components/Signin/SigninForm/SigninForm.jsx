import React from 'react';
import { Col } from 'antd';
import styled from 'styled-components';
import SigninLoginForm from './SigninLoginForm';
import SigninSupportUl from './SigninSupportUl';

const StyledCol = styled(Col).attrs(() => ({
  span: 9,
}))`
  border: 4px solid #fff;
  padding: 30px;
  font-weight: 600;
`;

const StyledLoginTitle = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: inherit;
`;

const StyledSubTitle = styled.h2`
  margin-top: 20px;
`;

const StyledContent = styled.p`
  margin-top: 20px;
`;

const StyledMainSpan = styled.span`
  padding-top: 20px;
`;

const StyledSubSpan = styled.span`
  font-size: 12px;
  padding: 10px 0;
`;

const SigninForm = () => (
  <StyledCol>
    <StyledLoginTitle>Carrot And Stick</StyledLoginTitle>
    <StyledSubTitle>What is the Carrot And Stick ?</StyledSubTitle>
    <StyledContent>
      <StyledMainSpan>
        - Carrot And Stick은 GitHub Api를 이용하여 Git에 회원가입이 된 닉네임을
        토대로 하여 Commit 데이터를 불러오고 목표 Commit 수를 설정하여 캐릭터의
        모습이 단계별로 렌더링되는 어플리케이션 입니다.
        <br />
      </StyledMainSpan>
      <StyledSubSpan>
        The Carrot and Stick use GitHub API to load Commit data based on the
        nickname of registered with Gift as a member and It is an application
        where the character's appearance is rendered step by step by setting the
        number of Commit.
      </StyledSubSpan>
      <br />
      <StyledMainSpan>
        - Git Planner 메모 앱을 이용하여 어떤 Commit을 할지 관리 하실 수
        있습니다.
      </StyledMainSpan>
      <br />
      <StyledSubSpan>
        It is possible to manage what commit you do by using the Git Planner
        memo app.
      </StyledSubSpan>
    </StyledContent>
    <SigninLoginForm></SigninLoginForm>
    <SigninSupportUl></SigninSupportUl>
  </StyledCol>
);

export default SigninForm;
