import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { loadComment } from '../../actions/comment';
import { FaUserCircle } from 'react-icons/fa';
import styles from './commentList.module.scss';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { commentAPIParams } from '../../types/comment';

interface Props {
  postID: number;
}
// 한번 조회했던 게시물의 댓글들을 다른 게시물에서도 불러오고 있음
// 각각의 postid는 다르게 잘 출력이 되는데?
// readpost에서 useEffect시 postid를 다시 가져와야 한?
const CommentList = ({ postID }: Props) => {
  const dispatch = useAppDispatch();
  const { loadCommentLoading, loadCommentList, hasMore, pageNum } = useAppSelector(
    (state) => state.comment
  );
  // const paramsTest = { postID: 1, pageNum }; // postID에 50개의 댓글이 있어 스크롤 확인시
  const params = { postID, pageNum };

  const target = useInfiniteScroll({
    hasMore,
    loadData: () => dispatch(loadComment(params)),
    isLoading: loadCommentLoading,
  });

  useEffect(() => {
    console.log('postID: ', postID);
  }, []);
  return (
    <div>
      <div>
        {loadCommentList.length === 0 && <div>댓글이 없습니다. 첫 댓글을 달아보세요.</div>}
        {loadCommentList?.map((comment, i) => (
          <div key={i} className={styles.comment_component}>
            <div className={styles.comment_user}>
              <FaUserCircle className={styles.user_profile_img} />
              <div className={styles.user_name_comment}>{comment.profileId}</div>
            </div>
            <div className={styles.commnet_text}>{comment.comment}</div>
          </div>
        ))}
      </div>
      <div className={styles.ref} ref={target} />
    </div>
  );
};

export default CommentList;
