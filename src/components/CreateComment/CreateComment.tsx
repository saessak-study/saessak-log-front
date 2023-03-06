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
  const [commentText, setCommentText] = useState<string>('');

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
    setCommentText(e.target.value);
    setCommentData({
      ...commentData,
      comment: e.target.value,
    });
  };

  const handleOnclickinput = () => {
    console.log('postid: ', postID);
    if (!sessionStorage.getItem('token')) setShowLogin((prev) => !prev);
  };

  // 버그 -> 새로고침을 해야 작성한 댓글을 볼 수 있음
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createComment(commentData));
  };

  // 두번씩 댓글 작성되는 오류 해결 -> useEffect
  useEffect(() => {
    if (createCommentDone) {
      alert('댓글 작성 완료!');
      setCommentText('');
    } else if (createCommentError) {
      alert('댓글 작성 실패!');
    }
  }, [createCommentDone, createCommentError, setCommentText]);

  return (
    <>
      <div className={styles.comment_input_section}>
        {isCheckLike}
        <div className={styles.like_section}>
          <HeartButton postID={postID} onClickingHeart={onClickingHeart} />
        </div>
        <form onSubmit={handleSubmit} className={styles.comment_submit_form}>
          <textarea
            id='commentText'
            className={styles.comment_input}
            onClick={handleOnclickinput}
            onChange={handleChangeComment}
            value={commentText}
            placeholder='댓글을 작성하는 공간이에요'
          />
          {isCheckLike}
          <button
            type='submit'
            className={styles.send_btn_tag}
            disabled={!commentText || createCommentLoading}
          >
            <GrSend className={styles.send_btn_icon} />
          </button>
        </form>
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
