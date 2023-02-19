import React from 'react';
import Modal from '../Modal/Modal';
import styles from './registerModal.module.scss';
import { VscClose } from 'react-icons/vsc';

interface Props {
  onClickToggleModal: () => void;
}

const RegisterModal: React.FC<Props> = ({ onClickToggleModal }) => {
  return (
    <div>
      <Modal onClickToggleModal={onClickToggleModal} title='회원가입'>
        <div className={styles.reg_container}>
          <div className={styles.reg_title}>CREATE ACCOUNT</div>
          <VscClose className={styles.vsClose} />
          <div className={styles.reg_inputID}>
            <input type='text' className={styles.inputBox_id} placeholder='ID' />
            <div className={styles.verify_id}>중복검사</div>
          </div>

          <div className={styles.reg_errorID}>
            <div className={styles.reg_errorMSG}>
              4~12자의 영문 대소문자와 숫자로만 입력해주세요
            </div>
          </div>
          <div className={styles.reg_inputComponent}>
            <input type='password' className={styles.register_input} placeholder='Password' />
            <div className={styles.reg_errorMSG}>8~16자의 소문자, 숫자, 특수문자를 사용하세요</div>
          </div>
          <div className={styles.reg_inputComponent}>
            <input
              type='password'
              className={styles.register_input}
              placeholder='Password Confirmation'
            />
            <div className={styles.reg_errorMSG}>비밀번호가 일치하지 않습니다</div>
          </div>
          <div className={styles.reg_inputComponent}>
            <input type='text' className={styles.register_input} placeholder='Name' />
            <div className={styles.reg_errorMSG}>올바른 정보를 입력해주세요</div>
          </div>
          <div className={styles.reg_inputComponent}>
            <input type='text' className={styles.register_input} placeholder='Email' />
            <div className={styles.reg_errorMSG}>이메일 형식이 맞지 않습니다</div>
          </div>
          <div className={styles.reg_buttonBox}>
            <div className={styles.reg_normal}>회원가입</div>
            <div className={styles.reg_kakao}>카카오 회원가입</div>
          </div>
          <div className={styles.route_login}>로그인 화면으로 돌아가기</div>
        </div>
      </Modal>
    </div>
  );
};

export default RegisterModal;
