import React, { useRef } from 'react';
import Typed from 'react-typed';
import styled from 'styled-components';
// const StyledMoominSay = styled.em`
const StyledMoominSay = styled(Typed)`
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  color: #313131;
  display: block;
  text-align: center;
  margin-bottom: 30px;
  height: 30px;
`;

const TypedContext = ({ feelState }) => {
  const type = useRef();

  const changeContext = message => {
    if (type.current && type.current.typed) type.current.typed.reset();
    return message;
  };

  return (
    <StyledMoominSay
      strings={changeContext(feelState)}
      typeSpeed={40}
      backSpeed={30}
      ref={type}
    />
  );
};

export default TypedContext;
