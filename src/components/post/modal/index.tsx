/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import './modal.scss';
import { BsXLg } from 'react-icons/bs';

interface Props {
  onClickToggleModal: () => void;
  children: React.ReactNode;
  title: string;
}

const Modal: React.FC<Props> = ({ onClickToggleModal, children, title }) => {
  const closeAction = (e: React.MouseEvent) => {
    e.preventDefault();

    if (onClickToggleModal) {
      onClickToggleModal();
    }
  };

  return (
    <div className='screen-wrapper'>
      <div className='modal-overlay'>
        <div className='modal-container'>
          <div className='modal-header'>
            <label className='modal-header-title'>{title}</label>
          </div>
          <BsXLg className='react-icons-bsxlg' onClick={closeAction} />
          <div className='modal-body'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
