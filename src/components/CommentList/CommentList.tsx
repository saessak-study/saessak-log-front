import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { loadComment } from '../../actions/comment';
import { FaUserCircle } from 'react-icons/fa';
import styles from './commentList.module.scss';
import { dummyData } from './dummyData';

const CommentList = () => {
  const [comments, setComments] = useState({});
  const dispatch = useAppDispatch();
  const { loadCommentLoading, loadCommentError, loadCommentList } = useAppSelector(
    (state) => state.loadComment
  );
  const postId = 1;
  const limit = 10;
  const page = 0;
  const params = { postId, limit, page };
  useEffect(() => {
    loadComments();
  }, []);
  const loadComments = async () => {
    const result = await dispatch(loadComment(params));
    setComments(result.payload);
    console.log(result.payload);
    if (loadCommentLoading) {
      setComments([]);
    }
    if (loadCommentError) {
      alert('댓글 못 불러옴');
    }
    if (result.payload.length === 0) {
      alert('댓글 다 불러옴');
    }
  };

  return (
    <div>
      {dummyData.map((comment) => (
        <div key={comment.user_id} className={styles.comment_component}>
          <div className={styles.comment_user}>
            <FaUserCircle className={styles.user_profile_img} />
            <div className={styles.user_name_comment}>{comment.user_name}</div>
          </div>
          <div className={styles.commnet_text}>{comment.user_comment}</div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
