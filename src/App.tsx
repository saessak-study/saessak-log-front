import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/common.scss';
import MainPage from './components/Main/mainPage';
import SearchPage from './components/Main/SearchPage';

import Main from './layouts/Main';

// 개인 작업 보기 위한 임시 라우터입니다. -> 모달창 버튼 토글러 위한 페이지(from 하영)
// 추후에 라우터 디렉토리 따로 설정해도 좋습니다.
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
