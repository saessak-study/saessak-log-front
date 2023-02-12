import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import '../style/mainPage.scss';

const MainPage = () => {
  return (
    <div className='main_container'>
      <div className='top_nav'>
        <img src='img/saessak logo.png' className='nav_logo' />
        <div className='search_bar'>
          <AiOutlineSearch className='search_icon' />
          <input className='search_input' type='text' placeholder='검색' />
          <div className='search_btn'>검색</div>
        </div>
        <div className='nav_userInfo'>
          <FaUserCircle />
          유저 닉네임
          <div className='nav_modal'>
            <ul>
              <li>계정관리</li>
              <li>내 활동</li>
              <li>구독함</li>
              <li className='modal_logout'>로그아웃</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
