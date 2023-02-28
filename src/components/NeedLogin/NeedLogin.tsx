import Header from '../common/Header';
import styles from './needLogin.module.scss';

const NeedLogin = () => {
  return <div className={styles.needLogin_message}>로그인이 필요합니다.</div>;
};

export default NeedLogin;
