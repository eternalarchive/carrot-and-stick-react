import React, { useState } from 'react';
import styled from 'styled-components';
import CarrotAndStick from '../components/CarrotAndStick/CarrotAndStick';
import withAuth from '../hocs/withAuth';
import axios from 'axios';

const StyledContainer = styled.div`
  width: 1200px;
  margin: 3vh auto;
  padding: 30px 80px;
  background-color: rgba(241, 241, 241, 0.7);
  border-radius: 15px;
`;

const Home = ({ token, history }) => {
  const [userName] = useState(async () => {
    const { data } = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    console.log('ad', data);
    return data.login;
  }); // 상태 초기값 함수로 설정. async는 promise를 반환한다. promise를 확인하려면 async await를 써줘야한다. 상위 함수(컴포넌트)는 async await를 사용할 수 없으므로 하위 함수로 사용한다.

  const logout = () => {
    localStorage.clear();
    history.push('/signin'); // 로그아웃시 보여줄 페이지
  };

  return (
    <div>
      <StyledContainer>
        <CarrotAndStick userName={userName} token={token} />
      </StyledContainer>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
};

export default withAuth(Home);
