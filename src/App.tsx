import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/common.scss';
import MainPage from './components/Main/mainPage';
import SearchPage from './components/Main/SearchPage';
import Main from './pages/Main';
import MyAccountPage from './pages/MyAccount/MyAccount';
import MyActivity from './pages/MyActivity/MyActivity';
import ModalOpen from './pages/ModalOpen';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/myaccount' element={<MyAccountPage />} />
        <Route path='/myactivity' element={<MyActivity />} />
        <Route path='/hayeong-check' element={<Main />} />
        <Route path='/dajeong-check' element={<ModalOpen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
