/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useState, useCallback } from 'react';
import Modal from '../modal';

interface Props {
  onClickToggleModal: () => void;
}

const WritePost: React.FC<Props> = ({ onClickToggleModal }) => {
  // const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div>
      <Modal onClickToggleModal={onClickToggleModal} title='게시물 작성'>
        <div className='img-container'>
          <div className=''></div>
        </div>
      </Modal>
    </div>
  );
};

export default WritePost;
