import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/common.scss';
import SearchPage from './pages/Search/SearchPage';
import MyAccountPage from './pages/MyAccount/MyAccount';
import MainPage from './pages/Home/MainPage';
import ModalOpen from './pages/ModalOpen';
import MySubscriptionPage from './pages/MySubscribe/MySubscription';
import MyActivityPage from './pages/MyActivity/MyActivity';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/myaccount' element={<MyAccountPage />} />
        <Route path='/myactivity' element={<MyActivityPage />} />
        <Route path='/mysubscription' element={<MySubscriptionPage />} />
        <Route path='/dajeong-check' element={<ModalOpen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
