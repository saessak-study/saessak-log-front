import { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './findIdPwModal.module.scss';
import LoginModal from '../LoginModal/LoginModal';

interface Props {
  onClickToggleModal: () => void;
}

const FindPwModal: React.FC<Props> = ({ onClickToggleModal }) => {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  const onClickLoginModal = () => {
    setShowLoginModal((prev) => !prev);
  };

  return (
    <div>
      <Modal onClickToggleModal={onClickToggleModal} title='비밀번호찾기'>
        <div className={styles.findIdPw_container}>
          <div className={styles.findIdPw_title}>비밀번호 찾기</div>
          <div className={styles.findIdPw_inputComponent}>
            <input type='text' className={styles.findIdPw_input} placeholder='Name' />
          </div>
          <div className={styles.findIdPw_inputComponent}>
            <input type='text' className={styles.findIdPw_input} placeholder='ID' />
          </div>
          <div className={styles.findIdPw_inputComponent}>
            <input type='text' className={styles.findIdPw_input} placeholder='Email' />
            <div className={styles.findIdPw_errorMSG}>올바른 정보를 입력해주세요.</div>
          </div>
          <div className={styles.findIdPw_buttonBox}>
            <div className={styles.findIdPw_greenButton}>비밀번호 찾기</div>
          </div>
          <a href='#!' type='button' className={styles.route_login} onClick={onClickLoginModal}>
            로그인 화면으로 돌아가기
          </a>
        </div>
      </Modal>
      {showLoginModal && <LoginModal onClickToggleModal={onClickLoginModal} />}
    </div>
  );
};

export default FindPwModal;
