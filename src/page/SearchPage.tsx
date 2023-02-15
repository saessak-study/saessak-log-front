import React from 'react';
import { AiOutlineSearch, AiFillHeart } from 'react-icons/ai';
import { FaUserAlt, FaRegCommentDots, FaUserCircle } from 'react-icons/fa';
import { BiImageAdd } from 'react-icons/bi';
import styles from '../style/css/homePage.module.css';

const SearchPage = () => {
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
      {/* <SearchResult /> */}
      {/* <div className='searched_none'>일치하는 검색결과가 없습니다.</div> */}
      <RecentSearch />
    </div>
  );
};

// 검색결과 타이틀
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

// 최근 검색 결과
const RecentSearch = () => {
  return (
    <div className={styles.recent_searched}>
      <div className={styles.recent_searchedTitle}>
        <span style={{ fontSize: '32px' }}>최근 검색</span>
        <span className={styles.searched_eraseAll}>모두 지우기</span>
      </div>
      <div className={styles.recent_searchedBox}>
        <div className={styles.recent_searchedComponent}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <AiOutlineSearch /> 검색기록 1
          </span>
          <span style={{ color: '#9a9a9a', cursor: 'pointer' }}>x</span>
        </div>
      </div>
    </div>
  );
};

const MainToggleBtn = () => {
  return (
    <div className={styles.main_toggleBtn}>
      <div className={styles.mainToggle_on}>좋아요순</div>
      <div className={styles.mainToggle_off}>댓글순</div>
    </div>
  );
};
export default SearchPage;
