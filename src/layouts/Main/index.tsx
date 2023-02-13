/* eslint-disable prettier/prettier */
import React, { useState, useCallback } from 'react';
import Modal from '../../components/post/modal';

const Main = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  return (
    <div>
      <button type='button' onClick={onClickToggleModal}>
        게시물 작성
      </button>
      <button type='button' onClick={onClickToggleModal}>
        게시물 보기
      </button>

      {showModal && <Modal onClickToggleModal={onClickToggleModal} />}
    </div>
  );
};

export default Main;
