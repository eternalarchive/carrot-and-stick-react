import React from 'react';
import styled from 'styled-components';

const StyledPlannerNav = styled.ul`
  display: flex;
  position: absolute;
  top: 20px;
  right: 0;
`;

const StyledNavLi = styled.li`
  padding: 4px 5px;
  margin: 0 2px;
  cursor: pointer;
  &.active {
    font-weight: 800;
    border-bottom: 2px solid #313131;
  }
`;

const Nav = props => {
  const navItems = ['all', 'active', 'completed'];
  return (
    <StyledPlannerNav>
      {navItems.map(navItem => {
        return (
          <StyledNavLi
            key={navItem}
            id={navItem}
            onClick={() => props.changeNav(navItem)}
            className={props.navState === navItem ? 'active' : null}
          >
            {navItem}
          </StyledNavLi>
        );
      })}
    </StyledPlannerNav>
  );
};

export default Nav;
