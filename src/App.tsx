import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/common.scss';
import MainPage from './components/main/mainPage';
import SearchPage from './components/main/SearchPage';

import Main from './pages/Main';

// 개인 작업 보기 위한 임시 라우터입니다.
// 추후에 라우터 디렉토리 따로 설정해도 좋습니다.
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
