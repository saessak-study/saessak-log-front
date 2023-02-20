import styles from './header.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <div className={styles.top_nav}>
      <div className={styles.nav_logo}>
        <img src='img/temp.png' />
        <img src='img/logo_title.png' />
      </div>
      <div className={styles.search_bar}>
        <AiOutlineSearch className={styles.search_icon} />
        <input className={styles.search_input} type='text' placeholder='검색' />
        <div className={styles.search_btn}>검색</div>
      </div>
      <div className={styles.nav_userInfo}>
        <div className={styles.user_circle}>
          <FaUserAlt className={styles.main_userProfile} />
        </div>
        유저 닉네임
        <ul className={styles.nav_modal}>
          <li>계정관리</li>
          <li>내 활동</li>
          <li>구독함</li>
          <li className={styles.modal_logout}>로그아웃</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
