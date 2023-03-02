import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { loadComment } from '../../actions/comment';
import { FaUserCircle } from 'react-icons/fa';
import styles from './commentList.module.scss';

const CommentList = () => {
  const dispatch = useAppDispatch();
  const { loadCommentError, loadCommentList, loadCommentlimit } = useAppSelector(
    (state) => state.loadComment
  );
  const postId = 1;
  const limit: number = 5;
  const [page, setPage] = useState<number>(0); // 현재 페이지
  const [moreLoad, setMoreLoad] = useState<boolean>(true); // 추가 댓글 있는 지
  const params = { postId, limit, page };

  useEffect(() => {
    loadComments();
  }, [page]); // page가 변경될 때마다 useEffect 실행

  const loadComments = () => {
    dispatch(loadComment(params));
    console.log(loadCommentList);

    if (loadCommentError) {
      alert('댓글 못 불러옴');
    }
    if (page === 0) {
      setMoreLoad(true);
    }
    if (loadCommentlimit.length < limit) {
      setMoreLoad(false);
    }
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1); // 다음 페이지로 이동
  };

  return (
    <div>
      {loadCommentList.map((comment, i) => (
        <div key={i} className={styles.comment_component}>
          <div className={styles.comment_user}>
            <FaUserCircle className={styles.user_profile_img} />
            <div className={styles.user_name_comment}>{comment.profileId}</div>
          </div>
          <div className={styles.commnet_text}>{comment.comment}</div>
        </div>
      ))}
      {moreLoad ? (
        <button type='button' onClick={handleLoadMore}>
          더 불러오기
        </button>
      ) : (
        <p>댓글 다 불러왔다냥</p>
      )}
    </div>
  );
};

export default CommentList;
