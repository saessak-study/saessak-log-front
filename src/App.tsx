import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/common.scss';
import SearchPage from './pages/Search/SearchPage';
import Main from './pages/Main';
import MyAccountPage from './pages/MyAccount/MyAccount';
import MainPage from './pages/Home/MainPage';
import ModalOpen from './pages/ModalOpen';
import MyWork from './pages/MyWork/MyWork';
import MySubscribe from './pages/MySubscribe/MySubscribe';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/myaccount' element={<MyAccountPage />} />
        <Route path='/myactivity' element={<MyWork />} />
        <Route path='/hayeong-check' element={<Main />} />
        <Route path='/dajeong-check' element={<ModalOpen />} />
        <Route path='/mySubscribe' element={<MySubscribe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
