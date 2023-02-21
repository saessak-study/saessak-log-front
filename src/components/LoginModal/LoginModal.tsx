import { useState } from 'react';
import Modal from '../Modal/ModalWide/ModalWide';
import styles from './loginModal.module.scss';
import RegisterModal from '../RegisterModal/RegisterModal';
import FindPwModal from '../FindIdPwModal/FindPwModal';
import FindIdModal from '../FindIdPwModal/FindIdModal';

interface Props {
  onClickToggleModal: () => void;
}

const LoginModal: React.FC<Props> = ({ onClickToggleModal }) => {
  const [showFindIdModal, setShowFindIdModal] = useState<boolean>(false);
  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);
  const [showFindPwModal, setShowFindPwModal] = useState<boolean>(false);

  const onClickFindIdModal = () => {
    setShowFindIdModal((prev) => !prev);
  };
  const onClickRegisterModal = () => {
    setShowRegisterModal((prev) => !prev);
  };
  const onClickFindPwModal = () => {
    setShowFindPwModal((prev) => !prev);
  };

  return (
    <div>
      <Modal onClickToggleModal={onClickToggleModal} title='로그인'>
        <div className={styles.login_container}>
          <div className={styles.login_title}>LOGIN</div>
          <div className={styles.login_describe}>
            더 많은 기능을 사용하시려면 로그인을 해주세요.
          </div>
          <div className={styles.login_inputComponent}>
            <input type='text' className={styles.login_input} placeholder='ID' />
          </div>
          <div className={styles.login_inputComponent}>
            <input type='password' className={styles.login_input} placeholder='Password' />
            <div className={styles.login_errorMSG}>입력한 내용을 다시 확인해주세요.</div>
          </div>
          <div className={styles.route_box}>
            <a
              href='#!'
              type='button'
              onClick={onClickFindIdModal}
              className={styles.route_FindUserInfoPage}
            >
              아이디 /
            </a>

            <a
              href='#!'
              type='button'
              onClick={onClickFindPwModal}
              className={styles.route_FindUserInfoPage}
            >
              비밀번호 찾기
            </a>
          </div>
          <div className={styles.login_buttonBox}>
            <div className={styles.login_normal}>로그인</div>
            <div className={styles.login_kakao}>카카오 로그인</div>
          </div>
          <label className={styles.autologin_radiobutton}>
            <input type='checkbox' value='autologin' /> 자동 로그인
          </label>
          <a
            href='#!'
            type='button'
            className={styles.route_register}
            onClick={onClickRegisterModal}
          >
            아직 회원이 아니신가요? 회원가입하기
          </a>
        </div>
      </Modal>
      {showFindIdModal && <FindIdModal onClickToggleModal={onClickFindIdModal} />}
      {showFindPwModal && <FindPwModal onClickToggleModal={onClickFindPwModal} />}
      {showRegisterModal && <RegisterModal onClickToggleModal={onClickRegisterModal} />}
    </div>
  );
};

export default LoginModal;
