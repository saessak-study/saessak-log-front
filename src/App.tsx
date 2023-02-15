import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MyActivity from './pages/MyActivity';
import './style/common.scss';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='myactivity' element={<MyActivity />} />
      </Routes>
    </div>
  );
};

export default App;
