import React, { useState } from 'react';
import styled from 'styled-components';
import '../../App.css';

const StyledPopUp = styled.div`
  width: 600px;
  height: 250px;
  background-color: #313131;
  opacity: 0.95;
  position: absolute;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 3px 10px #000;
  padding: 35px;
  display: ${props => props.isOpen || 'none'};
`;

const StyledOverlay = styled.div`
  background-color: #313131;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  z-index: 5;
  display: ${props => props.isOpen || 'none'};
`;

const StyledPopUpTitle = styled.em`
  font-style: normal;
  font-size: 30px;
  display: inline-block;
  margin-top: 15px;
  color: #fff;
`;

const StyledCommitInput = styled.input`
  width: 300px;
  padding-left: 10px;
  height: 40px;
  font-size: inherit;
  border-radius: 5px;
  border: 1px solid #aaa;
  opacity: 0.95;
  margin-top: 20px;
`;

const StyledOkButton = styled.button`
  border: 0;
  height: 40px;
  font-size: inherit;
  color: #fff;
  background: transparent;
  cursor: pointer;
  outline: 0;
`;

const StyledCloseButton = styled(StyledOkButton)`
  padding: 20px;
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledWarningText = styled.p`
  color: yellow;
  font-size: 12px;
`;

const PopUp = props => {
  const [goalCommit, setGoalCommit] = useState(0);
  const [warningText, setWarningText] = useState('');

  const loadCommit = e => {
    setGoalCommit(e.target.value);
    // if (e.key === 'Enter' && e.target.value !== '') {
    //   saveCommit();
    //   props.closePopup();
    // }
  };

  const saveCommit = () => {
    const regxr = /^([0-9]){1,3}$/;
    const regxrzero = /^[^0]/;

    if (regxr.test(goalCommit) && regxrzero.test(goalCommit)) {
      props.setSaveGoalCommit(goalCommit);
      props.closePopup();
      props.changeFace(goalCommit);
    } else {
      setWarningText('1부터 999 사이의 숫자를 입력해주세요.');
    }
  };
  return (
    <>
      <StyledPopUp isOpen={props.isOpen}>
        <StyledPopUpTitle>일일 목표 커밋수를 입력해주세요!</StyledPopUpTitle>
        <p style={{ color: 'white' }}>
          입력하신 목표 커밋 수와 입력하신 GITHUB 커밋 수에 따라 무민이 당근 or
          채찍을 드려요.
        </p>
        <StyledCommitInput
          type="number"
          placeholder="1~999 사이의 숫자를 입력해주세요."
          onChange={e => loadCommit(e)}
        />
        <StyledOkButton onClick={saveCommit}>OK</StyledOkButton>
        <StyledWarningText>{warningText}</StyledWarningText>
        <StyledCloseButton onClick={props.closePopup}>X</StyledCloseButton>
      </StyledPopUp>
      <StyledOverlay isOpen={props.isOpen}></StyledOverlay>
    </>
  );
};

export default PopUp;
