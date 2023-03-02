import { useState } from 'react';
import ReadPost from '../../components/ReadPost/ReadPost';
import WritePost from '../../components/WritePost/WritePost';

/* 모달창 버튼 토글러 위한 페이지(from 하영) */

const Main = () => {
  const [showWriteModal, setShowWriteModal] = useState<boolean>(false);
  const [showReadModal, setShowReadModal] = useState<boolean>(false);

  const onClickWritePost = () => {
    setShowWriteModal((prev) => !prev);
  };

  const onClickReadPost = () => {
    setShowReadModal((prev) => !prev);
  };

  return (
    <div>
      <button type='button' onClick={onClickWritePost}>
        게시물 작성
      </button>
      <button type='button' onClick={onClickReadPost}>
        게시물 보기
      </button>
      {showWriteModal && <WritePost onClickToggleModal={onClickWritePost} />}
      {/* {showReadModal && <ReadPost onClickToggleModal={onClickReadPost} />} */}
    </div>
  );
};

export default Main;
