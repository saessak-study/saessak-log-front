import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import '../style/mainPage.scss';

const MainPage = () => {
  return (
    <div className='main_container'>
      <div className='top_nav'>
        <div className='nav_logo'>
          <img src='img/logo_img.png' />
          <img src='img/logo_title.png' />
        </div>
        <div className='search_bar'>
          <AiOutlineSearch className='search_icon' />
          <input className='search_input' type='text' placeholder='검색' />
          <div className='search_btn'>검색</div>
        </div>
        <div className='nav_userInfo'>
          <div className='user_circle'>
            <FaUserAlt className='user_profile' />
          </div>
          유저 닉네임
          <div className='nav_modal'>
            <ul>
              <li>계정관리</li>
              <li>내 활동</li>
              <li>구독함</li>
              <li className='modal_logout'>로그</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
