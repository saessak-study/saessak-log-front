import React from 'react';
import { AiOutlineSearch, AiFillHeart } from 'react-icons/ai';
import { FaUserAlt, FaRegCommentDots, FaUserCircle } from 'react-icons/fa';
import { BiImageAdd } from 'react-icons/bi';
import styles from '../style/css/homePage.module.css';

const MainPage = () => {
  return (
    <div className={styles.main_container}>
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
      <SearchResult />
      <div className={styles.main_toggleBtn}>
        <div className={styles.mainToggle_on}>좋아요순</div>
        <div className={styles.mainToggle_off}>댓글순</div>
      </div>
      <div className={styles.card_container}>
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </div>
      <div className={styles.mobile_btnContainer}>
        <div className={styles.mobile_routeBtn}>
          <FaUserAlt />
        </div>
        <div className={styles.mobile_routeBtn}>
          <BiImageAdd />
        </div>
      </div>
    </div>
  );
};

const MainCard = () => {
  return (
    <div className={styles.main_card}>
      <img src='img/poodle.jpg' className={styles.card_img} />
      <div className={styles.card_content}>
        <div className={styles.main_userInfo}>
          <FaUserCircle className={styles.main_userProfile} />
          <span>작성자 이름</span>
        </div>
        <div className={styles.card_detail}>
          <div className={styles.main_viewLike}>
            <AiFillHeart className={styles.like_red} /> <span>311</span>
          </div>
          <div className={styles.main_viewComment}>
            <FaRegCommentDots /> 100
          </div>
        </div>
      </div>
    </div>
  );
};

// ^검색결과
const SearchResult = () => {
  return (
    <div className={styles.search_result}>
      <span style={{ fontSize: '32px', color: 'black' }}>
        &quot;<span style={{ color: '#41d18a' }}>푸들</span>&quot;
      </span>
      에 대한 검색 결과
    </div>
  );
};
export default MainPage;
