/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import './modal.scss';
import { BsXLg } from 'react-icons/bs';

interface Props {
  onClickToggleModal: () => void;
}

const Modal: React.FC<Props> = ({ onClickToggleModal }) => {
  // 모달 열림/닫힘 상태 관리
  const [isOpen, setIsOpen] = useState(true);

  const closeAction = (e: React.MouseEvent) => {
    e.preventDefault();

    if (onClickToggleModal) {
      onClickToggleModal();
    }
  };

  return (
    <div>
      <div className='modal-overlay'>
        <div className='modal-container'>
          <div className='modal-header'>
            <BsXLg className='react-icons-bsxlg' onClick={closeAction} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
