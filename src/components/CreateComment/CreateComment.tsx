/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import { GrSend } from 'react-icons/gr';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { createComment } from '../../actions/comment';
import { commentSaveDto } from '../../types/comment';
import LoginModal from '../LoginModal/LoginModal';

import styles from './createComment.module.scss';

interface Props {
  postID: number;
  children: React.ReactNode;
}

const CreateComment = ({ postID, children }: Props) => {
  const dispatch = useAppDispatch();
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const { createCommentDone, createCommentError } = useAppSelector((state) => state.comment);
  const [commentData, setCommentData] = useState<commentSaveDto>({
    comment: '',
    post: postID,
  });

  const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentData({
      ...commentData,
      comment: e.target.value,
    });
  };

  const handleOnclickinput = (e: React.MouseEvent) => {
    if (!sessionStorage.getItem('token')) setShowLogin((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createComment(commentData));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.comment_input_section}>
        <div className={styles.like_section}>{children}</div>
        <textarea
          id='commentText'
          className={styles.comment_input}
          onClick={handleOnclickinput}
          onChange={handleChangeComment}
          value={commentData.comment}
          placeholder='댓글을 작성하는 공간이에요'
        />
        <GrSend className={styles.send_btn_icon} />
      </form>
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
