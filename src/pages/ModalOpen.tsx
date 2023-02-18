import { useState } from 'react';
import FindIdModal from '../components/FindIdPwModal/FindIdModal';
import FindPwModal from '../components/FindIdPwModal/FindPwModal';
import LoginModal from '../components/LoginModal/LoginModal';
import RegisterModal from '../components/RegisterModal/RegisterModal';

// 모달을 노출시키는 페이지 컴포넌트(임시 버튼)(from 다정)

const ModalOpen = () => {
  const [showFindIdModal, setShowFindIdModal] = useState<boolean>(false);
  const [showFindPwModal, setShowFindPwModal] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);

  const onClickFindIdModal = () => {
    setShowFindIdModal((prev) => !prev);
  };

  const onClickFindPwModal = () => {
    setShowFindPwModal((prev) => !prev);
  };

  const onClickLoginModal = () => {
    setShowLoginModal((prev) => !prev);
  };

  const onClickRegisterModal = () => {
    setShowRegisterModal((prev) => !prev);
  };

  return (
    <div>
      <button type="button" onClick={onClickFindIdModal}>
        아이디 찾기
      </button>
      <button type="button" onClick={onClickFindPwModal}>
        비밀번호 찾기
      </button>
      <button type="button" onClick={onClickLoginModal}>
        로그인하기
      </button>
      <button type="button" onClick={onClickRegisterModal}>
        회원가입하기
      </button>
      {showFindIdModal && (
        <FindIdModal onClickToggleModal={onClickFindIdModal} />
      )}
      {showFindPwModal && (
        <FindPwModal onClickToggleModal={onClickFindPwModal} />
      )}
      {showLoginModal && <LoginModal onClickToggleModal={onClickLoginModal} />}
      {showRegisterModal && (
        <RegisterModal onClickToggleModal={onClickRegisterModal} />
      )}
    </div>
  );
};

export default ModalOpen;
