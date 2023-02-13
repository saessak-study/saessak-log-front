/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Modal from '../../components/post/modal';

const Main = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div>
      <button type='button' onClick={() => setShowModal(true)}>
        게시물 작성
      </button>
      <button type='button' onClick={() => setShowModal(true)}>
        게시물 보기
      </button>

      {showModal && <Modal showModal={showModal} />}
    </div>
  );
};

export default Main;
