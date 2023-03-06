import React, { useState, useEffect } from 'react';
import { GrSend } from 'react-icons/gr';
import { useSelector } from 'react-redux';

import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { createComment } from '../../actions/comment';
import { commentSaveDto } from '../../types/comment';

import likeEachSlice from '../../reducers/likeEach';
import { likeType } from '../../types/likeEach';
import { changeLike } from '../../actions/likeEach';

import LoginModal from '../LoginModal/LoginModal';
import HeartButton from '../HeartButton/HeartButton';

import styles from './createComment.module.scss';

interface Props {
  postID: number;
  onClickingHeart: () => void;
}

const CreateComment = ({ postID, onClickingHeart }: Props) => {
  const dispatch = useAppDispatch();
  const { isLike } = useAppSelector((state) => state.likeEach);
  const param = { postID };
  const sessionLength = sessionStorage.length;
  const localLength = localStorage.length;

  const [showLogin, setShowLogin] = useState<boolean>(false);
  const { createCommentLoading, createCommentDone, createCommentError } = useAppSelector(
    (state) => state.comment
  );
  const [commentData, setCommentData] = useState<commentSaveDto>({
    comment: '',
    post: postID,
  });

  // 좋아요 기능 - 길웅
  // ! 처음로딩 시 내가 좋아요를 눌렀는지 아닌지 확인해야함 (확인방법 없다는 전제 하에)
  const checkingLike = async () => {
    if (sessionLength || localLength) {
      const firstViewLike = await dispatch(changeLike(param));
      const secondViewLike = await dispatch(changeLike(param));

      if (secondViewLike.payload.responseMessage === '해당 게시글을 좋아합니다.') {
        dispatch(likeEachSlice.actions.likeEach(true));
      } else {
        dispatch(likeEachSlice.actions.likeEach(false));
      }
    }
  };

  const isCheckLike = useSelector((state: likeType) => {
    return state.likeEach.isLike;
  });

  useEffect(() => {
    checkingLike();
  }, []);

  // 댓글 작성 기능 - 하영
  const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentData({
      ...commentData,
      comment: e.target.value,
    });
  };

  const handleOnclickinput = () => {
    console.log('postid: ', postID);
    if (!sessionStorage.getItem('token')) setShowLogin((prev) => !prev);
  };

  // 전송 버튼을 누른 후, 일시적으로 버튼 비활성화
  // 버그 -> 전송 버튼을 한 번 눌렀을 시, 바로 전송이 되어야 하는데 두 번 눌러야 전송이 되는 버그 발생
  // 새로고침을 해야 작성한 댓글을 볼 수 있음
  const handleSubmit = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await dispatch(createComment(commentData));
    if (createCommentDone) {
      alert('댓글 작성 완료!');
      setCommentData({
        ...commentData,
        comment: '',
      });
    } else if (createCommentError) {
      alert('댓글 작성 실패!');
    }
  };

  return (
    <>
      <div className={styles.comment_input_section}>
        {isCheckLike}
        <div className={styles.like_section}>
          <HeartButton postID={postID} onClickingHeart={onClickingHeart} />
        </div>
        <textarea
          id='commentText'
          className={styles.comment_input}
          onClick={handleOnclickinput}
          onChange={handleChangeComment}
          value={commentData.comment}
          placeholder='댓글을 작성하는 공간이에요'
        />
        {isCheckLike}
        <GrSend className={styles.send_btn_icon} onClick={handleSubmit} />
      </div>
      {showLogin && (
        <LoginModal
          onClickToggleModal={() => {
            setShowLogin((prev) => !prev);
          }}
        />
      )}
    </>
  );
};

export default CreateComment;
