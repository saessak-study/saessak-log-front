import React, { useState } from 'react';
import styles from './css/modal.module.css';
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
    <div className={styles.screen_wrapper}>
      <div className={styles.modal_overlay}>
        <div className={styles.modal_container}>
          <div className={styles.modal_header}>
            <label className={styles.modal_header_title}>{title}</label>
          </div>
          <BsXLg className={styles.react_icons_bsxlg} onClick={closeAction} />
          <div className={styles.modal_body}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
