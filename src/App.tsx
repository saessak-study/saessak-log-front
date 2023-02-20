/* eslint-disable import/no-named-as-default */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/common.scss';
import SearchPage from './pages/Search/SearchPage';
import Main from './pages/Main';
import MyAccountPage from './pages/MyAccount/MyAccount';
import MyActivity from './pages/MyActivity/MyActivity';
import MainPage from './pages/Home/MainPage';
import ModalOpen from './pages/ModalOpen';
import ImgCropModal from './components/UploadImageButton/ImgCropModal/ImgCropModal';

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
        {/* <Route path='/imgcrop-check' element={<ImgCropModal />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
