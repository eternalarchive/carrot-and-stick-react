import React from 'react';
import styled from 'styled-components';
import CarrotAndStick from '../components/CarrotAndStick/CarrotAndStick';
import withAuth from '../hocs/withAuth';

const StyledContainer = styled.div`
  width: 1200px;
  margin: 3vh auto;
  padding: 30px 80px;
  background-color: rgba(241, 241, 241, 0.7);
  border-radius: 15px;
`;

const Home = ({ token, history }) => {
  console.log(token);

  const logout = () => {
    localStorage.clear();
    history.push('/signin'); // 로그아웃시 보여줄 페이지
  };

  return (
    <div>
      <StyledContainer>
        <CarrotAndStick />
      </StyledContainer>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
};

export default withAuth(Home);
