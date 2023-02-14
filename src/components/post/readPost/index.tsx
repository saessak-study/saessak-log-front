/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable spaced-comment */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useState, useCallback } from 'react';
import Modal from '../modal';
import './readPost.scss';
import { BsHeartFill, BsBookmark } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { GrSend } from 'react-icons/gr';

interface Props {
  onClickToggleModal: () => void;
}

const ReadPost: React.FC<Props> = ({ onClickToggleModal }) => {
  // const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className='container-wrapper'>
      <Modal onClickToggleModal={onClickToggleModal} title='게시물'>
        <div className='img-container'>
          <div className='img' />
        </div>
        <div className='non-img-container'>
          <div className='post-section'>
            <div className='post-section-header'>
              <FaUserCircle className='user-profile-img' />
              <div className='user-name'>사용자</div>
              <BsBookmark className='subscription-btn' />
            </div>
            <div className='post-section-body'>
              <div className='text-section' />
            </div>
          </div>
          <div className='comment-read-section'>
            {/* 코멘트 컴포넌트 분리 필요*/}
            <div className='comment-component'>
              <div className='comment-user'>
                <FaUserCircle className='user-profile-img' />
                <div className='user-name-comment'>사용자</div>
              </div>
              <div className='commnet-text'>전 이런 내용의 댓글을 달고 싶어요</div>
            </div>
            <div className='comment-component'>
              <div className='comment-user'>
                <FaUserCircle className='user-profile-img' />
                <div className='user-name-comment'>사용자</div>
              </div>
              <div className='commnet-text'>전 이런 내용의 댓글을 달고 싶어요</div>
            </div>

            <div className='read-all-comments-btn'>댓글 모두 보기</div>
          </div>
          {/* 댓글 입력창 컴포넌트 분리 필요*/}
          <div className='comment-input-section'>
            <div className='like-section'>
              <BsHeartFill className='like-btn-icon' />
              <label className='like-count-number'>25</label>
            </div>
            <input className='comment-input' placeholder='댓글을 작성하는 공간이에요' />
            <GrSend className='send-btn-icon' />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ReadPost;
