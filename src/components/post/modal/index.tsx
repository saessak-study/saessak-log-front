/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import './modal.scss';

interface Props {
  showModal: boolean;
}

const Modal: React.FC<Props> = ({ showModal }) => {
  // 모달 열림/닫힘 상태 관리
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      {showModal && isOpen && (
        <div className='modal-overlay'>
          <div className='modal-container'>
            <div className='modal-header'>{/* 모달창 닫기 -> x 버튼 */}</div>
            <div className='modal-body'></div>
            <div className='modal-footer'></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
