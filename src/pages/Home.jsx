import React from 'react';
import styled from 'styled-components';
import CarrotAndStick from '../components/CarrotAndStick/CarrotAndStick';

const StyledContainer = styled.div`
  width: 1200px;
  margin: 3vh auto;
  padding: 30px 80px;
  background-color: rgba(241, 241, 241, 0.7);
  border-radius: 15px;
`;

const Home = props => {
  return (
    <div>
      Home <br />
      <a href="https://github.com/login/oauth/authorize?client_id=9d52b5a1459f678926e6&redirect_uri=http://localhost:3000/home">
        테스트 버튼
      </a>
      <StyledContainer>
        <CarrotAndStick />
      </StyledContainer>
    </div>
  );
};

export default Home;
