import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/common.scss';
// import MainPage from './components/Main/mainPage';
import SearchPage from './pages/Search/SearchPage';
import Main from './pages/Main';
import MyAccountPage from './pages/MyAccount/MyAccount';
import MyActivity from './pages/MyActivity/MyActivity';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/myaccount' element={<MyAccountPage />} />
        <Route path='/myactivity' element={<MyActivity />} />
        <Route path='/hayeong-check' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
