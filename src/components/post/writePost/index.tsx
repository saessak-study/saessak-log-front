/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useState, useCallback } from 'react';
import Modal from '../modal';
import './writePost.scss';
// BiImageAdd
import { BiImageAdd } from 'react-icons/bi';

interface Props {
  onClickToggleModal: () => void;
}

const WritePost: React.FC<Props> = ({ onClickToggleModal }) => {
  // const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className='write-modal-container-wrapper'>
      <Modal onClickToggleModal={onClickToggleModal} title='게시물 작성'>
        <div className='write-modal-img-container-web'>
          <BiImageAdd className='write-modal-add-img-icon' />
        </div>
        <div className='write-modal-non-img-container'>
          <div className='write-modal-post-section'>
            <div className='write-modal-img-container-mobile'>
              <BiImageAdd className='write-modal-add-img-icon' />
            </div>
            <div className='write-modal-text-input-section'>
              <input
                className='write-modal-text-input'
                placeholder='게시글을 작성하는 공간이에요'
              />
            </div>
          </div>
          <div className='write-modal-submit-btn-section'>
            <button className='write-modal-send-btn'>게시</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default WritePost;
