import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import axios from 'axios';
import PopUp from './PopUp';
import GitCount from './GitCount';
import GitPlanner from './GitPlanner';
import ImgRender from './ImgRender';
import '../../App.css';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const StyledTitle = styled.h1`
  margin: auto 0;
  padding: 0;
  color: #313131;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

const StyledResetButton = styled.button`
  border: none;
  background-color: inherit;
  font-size: 30px;
  margin: 0 10px;
  position: relative;

  &::after {
    content: 'Commit Reset';
    font-size: 10px;
    position: absolute;
    left: 0px;
    bottom: -20px;
  }

  &:hover {
    color: rgb(36, 120, 215);
  }
`;

const StyledLogoutButton = styled.button`
  border: none;
  background-color: inherit;
  font-size: 30px;
  margin: 0 10px;
  position: relative;

  &::after {
    content: 'Logout';
    font-size: 10px;
    position: absolute;
    left: 5px;
    bottom: -10px;
  }

  &:hover {
    color: rgb(36, 120, 215);
  }
`;

const StyledCommitAndTodo = styled.div`
  float: left;
  margin-top: 30px;
`;

const CarrotAndStick = React.memo(({ userName, token, logout }) => {
  const [commitTime, setCommitTime] = useState('');
  const [countNowNumber, setCountNowNumber] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [saveGoalCommit, setSaveGoalCommit] = useState(0);
  const [compareStatus, setCompareStatus] = useState('normal');
  const [sayMoomin, setSayMoomin] = useState(['Hello Friend']);

  const getEvent = useCallback(
    data => {
      let todayCommitCount = 0;
      let date = '';
      const second =
        new Date().getSeconds() < 10
          ? `0${new Date().getSeconds()}`
          : new Date().getSeconds();
      const minute =
        new Date().getMinutes() < 10
          ? `0${new Date().getMinutes()}`
          : new Date().getMinutes();
      const hour =
        new Date().getHours() < 10
          ? `0${new Date().getHours()}`
          : new Date().getHours();
      setCommitTime(`${hour}:${minute}:${second} 기준`);

      data.forEach(eventList => {
        date = new Date(eventList.created_at).toDateString();
        if (date !== new Date().toDateString()) return;
        if (
          eventList.type === 'PushEvent' ||
          eventList.type === 'PullRequestEvent' ||
          eventList.type === 'IssuesEvent'
        ) {
          todayCommitCount += 1;
        }
      });
      setCountNowNumber(todayCommitCount);
      return countNowNumber;
    },
    [countNowNumber],
  );

  const getGitHubCommit = useCallback(async () => {
    console.log('GITHUB API를 불러오는 중...');
    console.log('username은 ', await userName, ' 입니다.');
    const user = await userName;
    const res = await axios.get(`https://api.github.com/users/${user}/events`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    // setGitEvent([...res.data]);
    getEvent([...res.data]);
    // changeFace();
  }, [userName, token, getEvent]);

  useEffect(() => {
    if (userName !== null) getGitHubCommit();
  }, [getGitHubCommit, userName]);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const changeFace = goalCommit => {
    // 표정 관련
    if (countNowNumber < goalCommit / 2) {
      setCompareStatus('angry');
      setSayMoomin(['Oh my god..', 'What are you doing?']);
    } else if (
      countNowNumber >= goalCommit / 2 &&
      countNowNumber < goalCommit
    ) {
      // 무표정
      setCompareStatus('normal');
      setSayMoomin(['Cheer up!', 'Please keep up the good work.']);
    } else if (countNowNumber >= goalCommit) {
      // 즐거움
      setCompareStatus('happy');
      setSayMoomin(['Good job!', 'You are the best!']);
    }
  };

  return (
    <>
      <StyledHeader>
        <div className="header-svg-wrapper">
          <StyledTitle>Carrot and Stick</StyledTitle>
          <svg
            version="1.1"
            id="logo"
            x="0px"
            y="0px"
            viewBox="0 0 236 68"
            xmlSpace="preserve"
          >
            <g>
              <path
                d="M24.1,37.2c-1.2,4-5,6.7-9.3,6.7c-5.4,0-9.7-4.2-9.7-9.6c0-5.3,4.2-9.6,9.7-9.6c4.2,0,8,2.6,9.3,6.7l-3,0.9
              c-0.8-2.8-3.3-4.7-6.2-4.7c-3.7,0-6.4,2.9-6.4,6.7c0,3.6,2.6,6.7,6.4,6.7c3,0,5.4-1.9,6.2-4.8L24.1,37.2z"
              />
              <path d="M34.6,24.8l7.6,19.1h-3.2l-1.3-3.2h-9.4L27,43.9h-3.2l7.6-19.1H34.6z M29.5,37.7h7.2L33,28.5L29.5,37.7z" />
              <path
                d="M56.8,43.9L52,35.8h-4.2v8.1h-3.2V24.8h9.1c3.1,0,5.6,2.2,5.6,5.5c0,2.5-1.4,4.4-3.9,5.2l4.9,8.4H56.8z M47.8,32.9h5.6
              c1.4,0,2.8-1,2.8-2.6c0-1.5-1.3-2.6-2.8-2.6h-5.6V32.9z"
              />
              <path
                d="M75.3,43.9l-4.7-8.1h-4.2v8.1h-3.2V24.8h9.1c3.1,0,5.6,2.2,5.6,5.5c0,2.5-1.4,4.4-3.9,5.2l4.9,8.4H75.3z M66.3,32.9h5.6
              c1.4,0,2.8-1,2.8-2.6c0-1.5-1.3-2.6-2.8-2.6h-5.6V32.9z"
              />
              <path
                d="M89.2,24.8c5.8,0,9.7,4.4,9.7,9.6c0,5.6-4.5,9.6-9.7,9.6c-5.7,0-9.7-4.3-9.7-9.6C79.5,28.8,83.9,24.8,89.2,24.8z M89.2,41
              c3.8,0,6.4-3,6.4-6.6c0-3.8-2.8-6.6-6.4-6.6c-3.8,0-6.4,3-6.4,6.6C82.8,37.9,85.4,41,89.2,41z"
              />
              <path d="M115.3,24.8v3h-6.7v16.1h-3.2V27.7h-6.7v-3H115.3z" />
              <path
                d="M141.6,43.9h-4.1l-1.9-2.1c-1.6,1.4-3.3,2.1-5.2,2.1c-3.3,0-6.6-2.5-6.6-6.1c0-2.3,1.6-4.1,3.6-5.2
              c-0.6-0.9-0.9-1.8-0.9-2.7c0-2.8,2.5-5,5.4-5c1.6,0,2.9,0.5,4,1.6l1.3,1.4l-2.3,2l-1.2-1.4c-0.5-0.5-1-0.7-1.7-0.7
              c-1.1,0-2.2,0.9-2.2,2.1c0,0.5,0.1,0.9,0.5,1.2l5.5,6.2c1.1-1.5,1.8-3.5,1.9-5.5h3c0,2.7-1.1,5.4-2.9,7.7L141.6,43.9z M129.3,34.7
              c-1.2,0.5-2.4,1.6-2.4,3c0,1.8,1.6,3.2,3.5,3.2c1.1,0,2.1-0.5,3.1-1.5L129.3,34.7z"
              />
              <path
                d="M152.2,38.3c2,1.9,4.2,2.6,6.1,2.6c2.4,0,4.2-1.2,4.2-2.8c0-4.1-12.1-0.9-12.1-7.8c0-3.7,3.1-5.6,6.8-5.6
              c2.3,0,4.9,0.7,7,2.3l-1.8,2.2c-1.4-1-3.5-1.6-5.2-1.6c-2,0-3.6,0.8-3.6,2.5c0,4.2,12,0.7,12,8c0,3.3-3.2,5.7-7.3,5.7
              c-2.5,0-5.4-1-8.1-3.3L152.2,38.3z"
              />
              <path d="M183.9,24.8v3h-6.7v16.1H174V27.7h-6.7v-3H183.9z" />
              <path d="M186.3,24.8h3.2v19.1h-3.2V24.8z" />
              <path
                d="M211.4,37.2c-1.2,4-5,6.7-9.3,6.7c-5.4,0-9.7-4.2-9.7-9.6c0-5.3,4.2-9.6,9.7-9.6c4.2,0,8,2.6,9.3,6.7l-3,0.9
              c-0.8-2.8-3.3-4.7-6.2-4.7c-3.7,0-6.4,2.9-6.4,6.7c0,3.6,2.6,6.7,6.4,6.7c3,0,5.4-1.9,6.2-4.8L211.4,37.2z"
              />
              <path d="M227.9,24.8l-5.7,6l7.6,13.1h-3.5L220.1,33l-2.8,2.9v7.9h-3.2V24.8h3.2v7.2l6.8-7.2H227.9z" />
            </g>
          </svg>
        </div>
        <section>
          <StyledResetButton onClick={openPopup}>
            <Icon type="setting" theme="filled" />
          </StyledResetButton>
          <StyledLogoutButton>
            <Icon type="logout" onClick={() => logout()} />
          </StyledLogoutButton>
        </section>
      </StyledHeader>

      <PopUp
        isOpen={isOpen}
        closePopup={closePopup}
        setIsOpen={setIsOpen}
        saveGoalCommit={saveGoalCommit}
        setSaveGoalCommit={setSaveGoalCommit}
        changeFace={changeFace}
      />
      <StyledCommitAndTodo>
        <GitCount
          commitTime={commitTime}
          nowNum={countNowNumber}
          saveGoalCommit={saveGoalCommit}
          getGitHubCommit={userName => getGitHubCommit(userName)}
        />
        <GitPlanner />
      </StyledCommitAndTodo>
      <ImgRender
        nowNum={countNowNumber}
        saveGoalCommit={saveGoalCommit}
        compareStatus={compareStatus}
        sayMoomin={sayMoomin}
      />
    </>
  );
});

export default CarrotAndStick;
