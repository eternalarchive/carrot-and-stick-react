import React from 'react';
import styled from 'styled-components';

const StyledTodos = styled.ul`
  position: relative;
  border-top: solid 3px #313131;
  border-bottom: solid 3px #313131;
  margin-bottom: 10px;
  height: 250px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    background-color: transparent;
  }
`;

const StyleTodoItem = styled.li`
  height: 50px;
  padding: 10px 15px;
  margin-bottom: -1px;
  border-bottom: 1px solid #ddd;
  border-color: #313131;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTodoLabel = styled.label`
  width: 400px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const StyledTodoRemove = styled.i`
  margin-left: 5px;
  cursor: pointer;
  :hover {
    color: red;
  }
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

const TodoList = props => {
  return (
    <>
      <StyledTodos>
        {props.renderTodo().map(todo => (
          <StyleTodoItem id={todo.id} key={todo.id}>
            <StyledCheckBox
              type="checkbox"
              id={`ck-${todo.id}`}
              checked={todo.completed}
              onChange={() => props.toggleTodo(todo.id)}
            />
            <StyledTodoLabel htmlFor={`ck-${todo.id}`}>
              {todo.content}
            </StyledTodoLabel>
            <StyledTodoRemove
              className="far fa-times-circle"
              onClick={() => props.removeTodo(todo.id)}
            ></StyledTodoRemove>
          </StyleTodoItem>
        ))}
      </StyledTodos>
    </>
  );
};

export default TodoList;
