# Carrot And Stick Ver.React

```bash
// server start
node server/app.js
npm start
```

### 해커톤 주제 

> 기존 Vanila JS로 제작된 [Carrot And Stick](https://github.com/HYEOK999/CarrotAndStick)를 리액트로 리펙토링 + 로그인/로그아웃 구현

<br/>

### 1. 팀 소개 

- 팀명 : 채찍과 당근
  - 팀장 : 김준혁
  - 팀원 : 정다희

<br/>

### 2. 팀 주제

Git Commit 수에 따른 캐릭터 표정 변화 어플리케이션 입니다. 사용자의 학습 욕구를 도모하기 위해 만들었습니다.

<br/>

### 3. 팀 목표

#### > 1차 목표 

- 페이지 접속하자마자 Signin 페이지로 리다이렉트 됩니다.
- GitHub oAuth를 사용하여 로그인 토큰을 받아오고 그것을 토대로 로그인 페이지를 구현합니다.
- 로컬 스토리지에 토큰을 저장하고 토큰이 존재 할 경우 Home으로 바로 이동하게끔 구현합니다.

#### > 2차 목표 

- [Carrot And Stick](https://github.com/HYEOK999/CarrotAndStick)은 GitHub Api를 이용하여 Git에 회원가입이 된 닉네임을 토대로 하여 데이터를 불러오고 데이터의 특정 조건으로 커밋수를 검색 해 커밋수가 일정 이상일 시 캐릭터의 모습이 단계별로 렌더링되는 어플리케이션입니다.
- [Carrot And Stick](https://github.com/HYEOK999/CarrotAndStick)은 사용자의 학습 욕구를 도모하기 위해 만들어졌습니다.
- 로그인 성공 시 Home 화면으로 이동되는데 Home 화면은  [Carrot And Stick](https://github.com/HYEOK999/CarrotAndStick)을 React로 리펙토링하여 구현합니다.

#### > 3차 목표

- 로그아웃 기능을 구현합니다.(로컬스토리지 토큰 제거)
- 토큰의 유무에 따라 페이지를 라우팅 합니다. ( Signin, Home )
- 로딩 페이지를 구현합니다.
- Not Found 페이지를 구현합니다.

<br/>

### 4. 주제 선정 이유

**기능적인 측면 :** 

 GITHUB 관리를 위해 자신의 목표 커밋 수에 따라 스스로를 채찍질 하고, 스스로에게 칭찬(당근)을 할 수 있는 애플리케이션이 있다면 좋지 않을까?

**기술적인 측면 :** 

 지금까지 학습한 React 기술을 Vanila JS에 적용해보면서 React를 학습할 수 있습니다. 지난 번 Javascript 프로젝트를 하면서 생겼던 문제점(Git Hub Api 제한)을 로그인 및 로그아웃 기능, 토큰기능을 이용해 해결하고 UI를 좀 더 깔끔하게 할 수 있습니다.

<br/>

### 5. 프로젝트 요구 사항

- W3C에서 제공한 MarkUp Validation Service 에서 이상이 없을 것.
- 최대한 시멘틱 하게 작성할 것.
- Express 로 백엔드 구축 (GitHub oAuth 사용, CORS에러 방지)
- 여러 라이브러리 경험
- GitHub API 로드 및 가공
- 캐릭터 및 로고 렌더링 ( SVG 활용 )
- todo list 기능을 이용한 닉네임별로 관리되는 Git Daily Planner 개발
- JS코드를 React로 리펙토링 할 것.
- Git 컨벤션을 최대한 지킬 것.

<br/>

### 6. 구현 기술

 #### Front End 

- HTML
- CSS 
- SVG 
- JavaScript
- React

#### Back End 

- Express.js 

#### Etc 

- counterup2 
- Typed.js 
- GitHub OAuth

<br/>

### 7. 프로젝트 구현 영상

[![React-HackerTone](https://user-images.githubusercontent.com/31315644/76196141-0aa72d00-622d-11ea-91a8-33fc3f56efcf.jpeg)](https://youtu.be/MJSOXlgCLko)

( 이미지 클릭 시 유튜브로 이동됩니다. )

<br/>

### 8. 느낀점

- 시간에 쫒기면서 하는 개발이다보니까 생각보다 사소한 실수가 많았던 것 같습니다.
- 백엔드를 구축하기에는 시간이 너무 모잘랐습니다. UI와 React에 초점을 두어야 했기 때문에 Express를 이용하여 간단하게 서버를 구축했습니다.
- GitHub Api에서 제공하는 oAuth를 구현하는데 시간이 지체되었습니다. 이유는 oAuth를 사용하기 위해서 단순히 API만 끌어다 쓰려했지만 CORS Error를 유발했기 때문입니다. 따라서 처음 계획과는 다르게 기획을 변경해야하는 문제가 있었습니다.
- React로 변경 작업 중 1박자 늦게 상태가 변화되는 문제를 발견했습니다. 문제의 원인은 비동기 통신에 대한 문제였고 게속 promise상태로 값을 받아왔기 때문에 일어났습니다. 해당 문제를 해결하고자 초기상태를 함수로 만들어 해결하였습니다.
- 로그인 토큰 기능을 이용해 토큰이 있을 경우 게속 로그인이 되어있도록 설정하였습니다.
- JS -> React로 변환되면서 사소한 CSS 스타일이 작동이 안되는 원인이 있었습니다.
- 추가로, JS라이브러리(Typed.js, Coutup2.js)등이 제대로 작동되지 않는 문제점에서 시간이 지체 되었습니다.
- 해커톤을 진행하면서, JS로 작성된 코드를 리액트로 옮기는 방법을 습득하였습니다. 또한 초기 기획이 얼마나 중요하고 팀과의 소통을 통해서 컨벤션을 미리 작성해두어 프로젝트를 준비하는 것이 좋겠다는 생각을 가지게 되었습니다.

