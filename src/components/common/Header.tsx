import styles from './header.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
  const [userModal, setUserModal] = useState(false);
  const modalClick = () => {
    setUserModal(() => !userModal);
  };
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
        <div className={styles.user_circle} onClick={modalClick} role='button' tabIndex={0}>
          <FaUserAlt className={styles.main_userProfile} />
        </div>
        <span className={styles.user_name}> 유저 닉네임</span>
        {userModal === true ? null : (
          <ul className={styles.nav_modal}>
            <div className={styles.modal_circle}>
              <FaUserAlt />
            </div>
            <li>계정관리</li>
            <li>내활동</li>
            <li>구독함</li>
            <li className={styles.modal_logout}>로그아웃</li>
            <div className={styles.modal_cancel} onClick={modalClick} role='button' tabIndex={-1}>
              X
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
