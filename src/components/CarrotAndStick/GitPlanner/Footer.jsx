import React from 'react';
import styled from 'styled-components';

const StyledFooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledCheckBox = styled.input`
  margin-right: 5px;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  outline: none;
  box-shadow: none;
  background-image: url('/images/uncheck.png');
  :checked {
    background-image: url('/images/checked.png');
  }
`;

const StyledClearCompletedBtn = styled.button`
  display: inline-block;
  opacity: 0.9;
  border: solid 1px rgba(112, 112, 112, 0.31);
  border-radius: 5px;
  height: 25px;
  margin-right: 5px;
`;

const Footer = props => {
  return (
    <StyledFooterContainer>
      <div style={{ display: 'inline-block' }}>
        <StyledCheckBox
          type="checkbox"
          id="ck-complete-all"
          onChange={props.toggleCompletedAll}
        />
        <label htmlFor="ck-complete-all">Mark all as complete</label>
      </div>
      <div style={{ display: 'inline-block' }}>
        <StyledClearCompletedBtn onClick={props.removeTodoAll}>
          Clear completed (
          <span>{props.todos.filter(todo => todo.completed).length}</span>)
        </StyledClearCompletedBtn>
        <strong>{props.todos.filter(todo => !todo.completed).length}</strong>{' '}
        items left
      </div>
    </StyledFooterContainer>
  );
};

export default Footer;
