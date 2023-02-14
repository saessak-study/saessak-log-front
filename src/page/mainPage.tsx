import React from 'react';
import { AiOutlineSearch, AiFillHeart } from 'react-icons/ai';
import { FaUserAlt, FaRegCommentDots, FaUserCircle } from 'react-icons/fa';

import '../style/homePage.scss';

const MainPage = () => {
  return (
    <div className='main_container'>
      <div className='top_nav'>
        <div className='nav_logo'>
          <img src='img/temp.png' />
          <img src='img/logo_title.png' />
        </div>
        <div className='search_bar'>
          <AiOutlineSearch className='search_icon' />
          <input className='search_input' type='text' placeholder='검색' />
          <div className='search_btn'>검색</div>
        </div>
        <div className='nav_userInfo'>
          <div className='user_circle'>
            <FaUserAlt className='main_userProfile' />
          </div>
          유저 닉네임
          <ul className='nav_modal'>
            <li>계정관리</li>
            <li>내 활동</li>
            <li>구독함</li>
            <li className='modal_logout'>로그아웃</li>
          </ul>
        </div>
      </div>
      <div className='main_toggleBtn'>
        <div className='mainToggle_on'>좋아요순</div>
        <div className='mainToggle_off'>댓글순</div>
      </div>
      <div className='card_container'>
        <div className='main_card'>
          <img src='img/poodle.jpg' className='card_img' />
          <div className='card_content'>
            <div className='main_userInfo'>
              <FaUserCircle className='main_userProfile' />
              <span>작성자 이름</span>
            </div>
            <div className='card_detail'>
              <div className='main_viewLike'>
                <AiFillHeart className='like_red' /> <span>311</span>
              </div>
              <div className='main_viewComment'>
                <FaRegCommentDots /> 100
              </div>
            </div>
          </div>
        </div>
        <div className='main_card'>
          <img src='img/poodle.jpg' className='card_img' />
          <div className='card_content'>
            <div className='main_userInfo'>
              <FaUserCircle className='main_userProfile' />
              <span>작성자 이름</span>
            </div>
            <div className='card_detail'>
              <div className='main_viewLike'>
                <AiFillHeart className='like_red' /> <span>311</span>
              </div>
              <div className='main_viewComment'>
                <FaRegCommentDots /> 100
              </div>
            </div>
          </div>
        </div>
        <div className='main_card'>
          <img src='img/poodle.jpg' className='card_img' />
          <div className='card_content'>
            <div className='main_userInfo'>
              <FaUserCircle className='main_userProfile' />
              <span>작성자 이름</span>
            </div>
            <div className='card_detail'>
              <div className='main_viewLike'>
                <AiFillHeart className='like_red' /> <span>311</span>
              </div>
              <div className='main_viewComment'>
                <FaRegCommentDots /> 100
              </div>
            </div>
          </div>
        </div>
        <div className='main_card'>
          <img src='img/poodle.jpg' className='card_img' />
          <div className='card_content'>
            <div className='main_userInfo'>
              <FaUserCircle className='main_userProfile' />
              <span>작성자 이름</span>
            </div>
            <div className='card_detail'>
              <div className='main_viewLike'>
                <AiFillHeart className='like_red' /> <span>311</span>
              </div>
              <div className='main_viewComment'>
                <FaRegCommentDots /> 100
              </div>
            </div>
          </div>
        </div>
        <div className='main_card'>
          <img src='img/poodle.jpg' className='card_img' />
          <div className='card_content'>
            <div className='main_userInfo'>
              <FaUserCircle className='main_userProfile' />
              <span>작성자 이름</span>
            </div>
            <div className='card_detail'>
              <div className='main_viewLike'>
                <AiFillHeart className='like_red' /> <span>311</span>
              </div>
              <div className='main_viewComment'>
                <FaRegCommentDots /> 100
              </div>
            </div>
          </div>
        </div>
        <div className='main_card'>
          <img src='img/poodle.jpg' className='card_img' />
          <div className='card_content'>
            <div className='main_userInfo'>
              <FaUserCircle className='main_userProfile' />
              <span>작성자 이름</span>
            </div>
            <div className='card_detail'>
              <div className='main_viewLike'>
                <AiFillHeart className='like_red' /> <span>311</span>
              </div>
              <div className='main_viewComment'>
                <FaRegCommentDots /> 100
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
