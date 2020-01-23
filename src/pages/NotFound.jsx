import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StyledBackground from '../components/BackgroundBubble';

const StyledNotFound = styled.div`
  width: 1200px;
  margin: 3vh auto;
  padding: 30px 80px;
  background-color: rgba(241, 241, 241, 0.7);
  border-radius: 15px;
`;

const StyledNotFoundTitle = styled.h1`
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  margin: 30px auto;
  opacity: 0.8;
`;

const StyledNotFoundDes = styled.p`
  font-size: 24px;
  text-align: center;
  line-height: 36px;
  margin-bottom: 30px;
`;

const StyledImg = styled.img`
  width: 500px;
  height: auto;
  display: block;
  margin: 0 auto;
`;

const NotFound = props => {
  return (
    <StyledNotFound>
      <StyledBackground />
      <StyledNotFoundTitle>Not Found</StyledNotFoundTitle>
      <StyledNotFoundDes>
        페이지를 찾을 수 없습니다.
        <br />
        <Link to="/signin">로그인 페이지</Link>로 이동해주세요.
      </StyledNotFoundDes>
      <Link to="/signin">
        <StyledImg src="/images/moomin404.png" alt="로그인 페이지로 이동하기" />
      </Link>
    </StyledNotFound>
  );
};

export default NotFound;
