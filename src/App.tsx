import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/common.scss';
import MainPage from './components/main/mainPage';
import SearchPage from './components/main/SearchPage';

import Main from './pages/Main';
import MyAccountPage from './pages/MyAccount/MyAccount';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/myaccount' element={<MyAccountPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
