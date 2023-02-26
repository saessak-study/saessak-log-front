import { Link } from 'react-router-dom';
import styles from './passwordChangeModal.module.scss';

const PasswordChangeModal = () => {
  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.message_wrapper}>
        비밀번호가 변경되었습니다.
        <br />새 비밀번호로 다시 로그인해주세요.
        <button type='button'>
          <Link to='/'>로그인 하러 가기</Link>
        </button>
      </div>
    </div>
  );
};

export default PasswordChangeModal;
