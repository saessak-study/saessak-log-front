# saessak-log-front
<img src="https://user-images.githubusercontent.com/91588779/225896043-544deecb-b2f3-48b1-b1b9-d1c976064e73.jpg"/>

## Description
4명의 프론트엔드, 4명의 백엔드 개발자의 협업 프로젝트!

💬 React.js, Sass, Redux-Toolkit, TypeScript 를 활용하여 로그인 게시글, 좋아요 등을 구현 한 커뮤니티 웹사이트입니다.

## Contributors
|이름|맡은 파트|github|
|---|---|---|
|정길웅|메인페이지(상단바, 페이징, 검색어) 알고리즘 및 "좋아요" 기능 구현  |[길웅 github](https://github.com/DoggySummer)|
|신하영|화면구성도, 댓글기능, 게시글 상세페이지, 게시글 업로드 구현 |[하영 github](https://github.com/Hayeong8957)|
|김다정|화면구성도, 로그인 토큰관리, 회원가입 form validation |[다정 github](https://github.com/danakim530)|
|조혜빈|Redux-toolkit 세팅, 게시글 UI/UX 구성, 무한스크롤 구현 |[혜빈 github](https://github.com/hyebin829)|

## Features
### [초기 새싹로그 화면 구성 및 기획서](https://dana0530.notion.site/_-e6cfd5ed3c4a4fd988e8c8490ab9a18b)

### 로그인 & 회원가입

<p align="center">
  <img width=800px src="https://user-images.githubusercontent.com/91588779/226148450-8ba45808-6c24-4c23-bec3-06c98d62d760.png">
  <img width=800px src="https://user-images.githubusercontent.com/91588779/226148456-6ad6118b-7adc-4944-b143-6674d9eabab6.png">
  &nbsp;&nbsp;&nbsp;
</p>
<br/>

### 댓글달기

<p align="center">
  <img width=800px src="https://user-images.githubusercontent.com/91588779/226148586-aaaf71dc-46b0-4312-b0ac-aaa5d8b05487.gif">
  &nbsp;&nbsp;&nbsp;
</p>
<br/>

### 댓글 무한스크롤

<p align="center">
  <img width=800px src="https://user-images.githubusercontent.com/91588779/226148590-4936b5d6-7cef-4d3c-b457-7729104b3b90.gif">
  &nbsp;&nbsp;&nbsp;
</p>
<br/>

### 게시글 무한스크롤

<p align="center">
  <img width=800px src="https://user-images.githubusercontent.com/91588779/226148736-96f200ef-7082-48f4-82b0-2afde335682b.gif">
  &nbsp;&nbsp;&nbsp;
</p>
<br/>

---
**진행 과정** 

- 백엔드 4명, 프론트 4명으로 구성된 팀 프로젝트로 Slack, JIRA 등의 Communication Tool 을 활용하여 협업했습니다.
- Swagger API 문서를 기반으로 백엔드 분들과 함께 소통하며 작업했습니다.
- 매주 오프모임을 가지며 백엔드와 프론트엔드 사이의 진도를 조율했습니다.

**구현한 기능** 
- 디자인
  - XD를 이용한 UI/UX 설계 후 notion에 공유
  - SASS를 이용한 반응형 웹 디자인 구현
- 초기 세팅
  - 타입스크립트, eslint를 통한 버그 관리
  - redux-toolkit을 활용한 전역적인 상태관리 및 api 호출
- 회원정보
  - ID/PW찾기, 회원가입, 로그인 관련 form validation 구현
  - 로그인한 유저의 token관리
- 게시글
  - 게시글의 좋아요, 구독 알고리즘
  - 검색기능
  - 게시글 무한스크롤
  - 게시글 페이징
- 댓글
  - 댓글작성
  - 댓글 무한스크롤
