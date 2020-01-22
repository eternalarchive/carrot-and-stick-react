import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

const SigninSupportUl = ({ className }) => {
  return (
    <StyledDiv>
      <a
        href="https://github.com/"
        title="Git Hub"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Icon type="github" style={{ fontSize: '40px', color: '#000' }} />
      </a>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  text-align: center;
  margin: 20px 0;
`;

export default SigninSupportUl;
