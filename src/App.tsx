import React from 'react';
import Counter from './Counter';
import CreateAccount from './pages/CreateAccount';
import './style/common.scss';

function App() {
  return (
    <div>
      {/* <h1 style={{ fontWeight: 400 }}>새싹로그 시작</h1>
      <h1 style={{ fontWeight: 400 }}>폰트적용33</h1>
      <Counter /> */}
      <CreateAccount />
    </div>
  );
}

export default App;
