import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from './GitPlanner/Nav';
import TodoList from './GitPlanner/TodoList';
import Footer from './GitPlanner/Footer';
import '../../App.css';

const StyledPlaneerContainer = styled.section`
  width: 500px;
  margin-top: 50px;
  position: relative;
`;

const StyledPlannerTitle = styled.h2`
  font-size: 30px;
  font-weight: 900;
  line-height: 1.2;
  text-align: left;
  color: #313131;
  margin: 0;
  padding: 10px 0;
`;

const StyledInputTodo = styled.input`
  width: 100%;
  height: 50px;
  opacity: 0.8;
  border-radius: 6px;
  border: solid 1px rgba(235, 163, 63, 0.5);
  margin: 0 auto;
  margin-bottom: 10px;
  padding-left: 20px;
  font-size: inherit;
`;

const GitPlanner = props => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: 'HTML',
      completed: true,
    },
    {
      id: 2,
      content: 'CSS',
      completed: false,
    },
    {
      id: 3,
      content: 'JavaScript',
      completed: false,
    },
  ]);
  const [navState, setNavState] = useState('all');

  const renderTodo = () => {
    if (navState === 'completed') {
      return todos.filter(todo => todo.completed);
    }
    if (navState === 'active') {
      return todos.filter(todo => !todo.completed);
    }
    return todos;
  };

  const generateId = () => {
    return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  };

  const addTodo = e => {
    const todo = {
      id: generateId(),
      content: e.target.value,
      completed: false,
    };

    if (e.key === 'Enter') {
      setTodos(todos => [todo, ...todos]);
      e.target.value = '';
    }
  };

  const removeTodo = id => {
    console.log(id);
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = id => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const toggleCompletedAll = () => {
    setTodos(todos => todos.map(todo => ({ ...todo, completed: true })));
  };

  const removeTodoAll = () => {
    setTodos(todos => todos.filter(todo => !todo.completed));
  };

  const changeNav = id => {
    setNavState(id);
  };

  return (
    <StyledPlaneerContainer>
      <StyledPlannerTitle>Git Daily Planner</StyledPlannerTitle>
      <StyledInputTodo
        onKeyPress={addTodo}
        placeholder="What needs to be done?"
      />
      <Nav navState={navState} changeNav={changeNav} />
      <TodoList
        todos={todos}
        renderTodo={renderTodo}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
      <Footer
        todos={todos}
        toggleCompletedAll={toggleCompletedAll}
        removeTodoAll={removeTodoAll}
      />
    </StyledPlaneerContainer>
  );
};

export default GitPlanner;
