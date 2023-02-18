import React from 'react';
import Modal from '../modal/Modal';
import styles from './findIdPwModal.module.scss';
import { VscClose } from 'react-icons/vsc';

interface Props {
  onClickToggleModal: () => void;
}

const FindIdModal: React.FC<Props> = ({ onClickToggleModal }) => {
  return (
    <div>
      <Modal onClickToggleModal={onClickToggleModal} title="아이디찾기">
        <div className={styles.findIdPw_container}>
          <div className={styles.findIdPw_buttonBox}>
            <div className={styles.findIdPw_greenButton}>아이디</div>
            <div className={styles.findIdPw_whiteButton}>비밀번호</div>
          </div>
          <div className={styles.findIdPw_title}>아이디 찾기</div>
          <VscClose className={styles.vsClose} />
          <div className={styles.findIdPw_inputComponent}>
            <input
              type="text"
              className={styles.findIdPw_input}
              placeholder="ID"
            />
          </div>
          <div className={styles.findIdPw_inputComponent}>
            <input
              type="text"
              className={styles.findIdPw_input}
              placeholder="Email"
            />
            <div className={styles.findIdPw_errorMSG}>
              올바른 정보를 입력해주세요.
            </div>
          </div>
          <div className={styles.findIdPw_buttonBox}>
            <div className={styles.findIdPw_greenButton}>아이디 찾기</div>
          </div>
          <div className={styles.route_login}>로그인 화면으로 돌아가기</div>
        </div>
      </Modal>
    </div>
  );
};

export default FindIdModal;