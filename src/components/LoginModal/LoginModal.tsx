import React from 'react';
import Modal from '../modal/Modal';
import styles from './loginModal.module.scss';
import { VscClose } from 'react-icons/vsc';

interface Props {
  onClickToggleModal: () => void;
}

const LoginModal: React.FC<Props> = ({ onClickToggleModal }) => {
  return (
    <div>
      <Modal onClickToggleModal={onClickToggleModal} title="로그인">
        <div className={styles.login_container}>
          <div className={styles.login_title}>LOGIN</div>
          <div className={styles.login_describe}>
            더 많은 기능을 사용하시려면 로그인을 해주세요.
          </div>
          <VscClose className={styles.vsClose} />
          <div className={styles.login_inputComponent}>
            <input
              type="text"
              className={styles.login_input}
              placeholder="ID"
            />
          </div>
          <div className={styles.login_inputComponent}>
            <input
              type="password"
              className={styles.login_input}
              placeholder="Password"
            />
            <div className={styles.login_errorMSG}>
              입력한 내용을 다시 확인해주세요.
            </div>
          </div>
          <div className={styles.route_FindUserInfoPage}>
            아이디/비밀번호를 잊으셨나요?
          </div>
          <div className={styles.login_buttonBox}>
            <div className={styles.login_normal}>로그인</div>
            <div className={styles.login_kakao}>카카오 로그인</div>
          </div>
          <label className={styles.autologin_radiobutton}>
            <input type="radio" value="autologin" /> 자동 로그인
          </label>
          <div className={styles.route_register}>
            아직 회원이 아니신가요? 회원가입하기
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoginModal;
