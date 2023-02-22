import react from 'react';
import Modal from '../Modal/Modal';
import styles from './findIdPwModal.module.scss';

interface Props {
  onClickToggleModal: () => void;
}

const FindPwModal: React.FC<Props> = ({ onClickToggleModal }) => {
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
        </div>
      </Modal>
    </div>
  );
};

export default FindPwModal;
