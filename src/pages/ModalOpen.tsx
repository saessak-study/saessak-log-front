import { useState } from 'react';
import LoginModal from '../components/LoginModal/LoginModal';

// 로그인 모달을 노출시키는 페이지 컴포넌트(임시 버튼)(from 다정)
const ModalOpen = () => {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  const onClickLoginModal = () => {
    setShowLoginModal((prev) => !prev);
  };

  return (
    <div>
      <button type='button' onClick={onClickLoginModal}>
        로그인하기
      </button>
      {showLoginModal && <LoginModal onClickToggleModal={onClickLoginModal} />}
    </div>
  );
};

export default ModalOpen;
