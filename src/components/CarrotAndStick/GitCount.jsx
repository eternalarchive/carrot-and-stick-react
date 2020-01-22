import React from 'react';
import styled from 'styled-components';
import '../../App.css';

const StyledCounterContaier = styled.div`
  width: 210px;
  height: 70px;
  border-top: 3px solid #313131;
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  color: #313131;
  font-weight: 800;
  position: relative;
  right: 40px;
`;

const StyledCountSection = styled.section`
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin-bottom: 50px;
  position: relative;
`;

const StyledCounterHeading = styled.h2`
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

const StyledCountText = styled.span`
  text-align: left;
  margin-top: 20px;
`;

const StyledNowTime = styled.span`
  display: block;
  position: absolute;
  top: -20px;
  color: #313131;
  font-weight: 600;
`;

const StyledRefresh = styled.span`
  position: absolute;
  left: 0;
  top: 50px;
`;

const StyledRefreshImg = styled.img`
  width: 30px;
  cursor: pointer;
`;

const StyledCountNumber = styled.span`
  font-size: 50px;
  text-align: right;
  margin-top: 20px;
  color: #313131;
  font-family: 'Source Code Pro', monospace;
`;

const GitCount = props => {
  return (
    <StyledCountSection>
      <StyledCounterHeading>YOUR COMMIT</StyledCounterHeading>
      <StyledNowTime>{props.commitTime}</StyledNowTime>
      <StyledCounterContaier>
        <StyledCountText>현재 커밋수</StyledCountText>
        <StyledRefresh>
          <StyledRefreshImg
            src="../images/refresh.png"
            alt="새로고침"
            onClick={props.getGitHubCommit}
          />
        </StyledRefresh>
        <StyledCountNumber>{props.nowNum}</StyledCountNumber>
      </StyledCounterContaier>
      <StyledCounterContaier>
        <StyledCountText>목표 커밋수</StyledCountText>
        <StyledCountNumber className="counter">
          {props.saveGoalCommit}
        </StyledCountNumber>
      </StyledCounterContaier>
    </StyledCountSection>
  );
};

export default GitCount;
