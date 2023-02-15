import { useState, useCallback } from 'react';
import ReadPost from '../../components/post/readPost/ReadPost';
import WritePost from '../../components/post/writePost/WritePost';

const Main = () => {
  const [showWriteModal, setShowWriteModal] = useState<boolean>(false);
  const [showReadModal, setShowReadModal] = useState<boolean>(false);

  const onClickWritePost = useCallback(() => {
    setShowWriteModal(!showWriteModal);
  }, [showWriteModal]);

  const onClickReadPost = useCallback(() => {
    setShowReadModal(!showReadModal);
  }, [showReadModal]);

  return (
    <div>
      <button type='button' onClick={onClickWritePost}>
        게시물 작성
      </button>
      <button type='button' onClick={onClickReadPost}>
        게시물 보기
      </button>
      {showWriteModal && <WritePost onClickToggleModal={onClickWritePost} />}
      {showReadModal && <ReadPost onClickToggleModal={onClickReadPost} />}
    </div>
  );
};

export default Main;
