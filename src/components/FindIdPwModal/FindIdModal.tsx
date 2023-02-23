import react from 'react';
import Modal from '../Modal/ModalNoHeader/ModalNoHeader';
import styles from './findIdPwModal.module.scss';

interface Props {
  onClickToggleModal: () => void;
}

const FindIdModal: React.FC<Props> = ({ onClickToggleModal }: Props) => {
  return (
    <div>
      <Modal onClickToggleModal={onClickToggleModal} title='아이디찾기'>
        <div className={styles.findIdPw_container}>
          <div className={styles.findIdPw_title}>아이디 찾기</div>
          <div className={styles.findIdPw_inputComponent}>
            <input type='text' className={styles.findIdPw_input} placeholder='ID' />
          </div>
          <div className={styles.findIdPw_inputComponent}>
            <input type='text' className={styles.findIdPw_input} placeholder='Email' />
            <div className={styles.findIdPw_errorMSG}>올바른 정보를 입력해주세요.</div>
          </div>
          <div className={styles.findIdPw_buttonBox}>
            <div className={styles.findIdPw_greenButton}>아이디 찾기</div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FindIdModal;
