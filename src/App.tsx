import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/common.scss';

import ModalOpen from './pages/ModalOpen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ModalOpen" element={<ModalOpen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
