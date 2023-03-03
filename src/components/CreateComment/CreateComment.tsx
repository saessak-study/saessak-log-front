import React, { useState, useEffect } from 'react';
import { GrSend } from 'react-icons/gr';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { writeComment } from '../../actions/comment';
import HeartButton from '../HeartButton/HeartButton';
import styles from './createComment.module.scss';

interface Props {
  postID: number;
}

const CreateComment = ({ postID }: Props) => {
  const dispatch = useAppDispatch();
  const { createComment, createCommentLoading } = useAppSelector((state) => state.loadComment);
  const [likeCount, setLikeCount] = useState<number>(0);

  const onClickheartBtn = (isLike: boolean) => {
    if (isLike) setLikeCount(likeCount + 1);
    else setLikeCount(likeCount - 1);
  };
  return (
    <div className={styles.comment_input_section}>
      <div className={styles.like_section}>
        <HeartButton likeCount={likeCount} onClick={onClickheartBtn} />
      </div>
      <input className={styles.comment_input} placeholder='댓글을 작성하는 공간이에요' />
      <GrSend className={styles.send_btn_icon} />
    </div>
  );
};

export default CreateComment;
