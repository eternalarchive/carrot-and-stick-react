import React from 'react';
import withAuth from '../hocs/withAuth';

const Home = ({ token, history }) => {
  console.log(token);

  const logout = () => {
    localStorage.clear();
    history.push('/signin'); // 로그아웃시 보여줄 페이지
  };

  return (
    <div>
      Home
      <br />
      <button onClick={logout}>로그아웃</button>
    </div>
  );
};

export default withAuth(Home);
