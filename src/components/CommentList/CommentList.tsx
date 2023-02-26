import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import styles from './commentList.module.scss';
import { dummyData } from './dummyData';

const CommentList = () => {
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
