import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import HeartButton from '../HeartButton/HeartButton';
import CommentList from '../CommentList/CommentList';
import styles from './readPost.module.scss';
import { FaUserCircle } from 'react-icons/fa';
import { BsBookmark } from 'react-icons/bs';
import { GrSend } from 'react-icons/gr';

interface Props {
  onClickToggleModal: () => void;
  postID: number;
}

const ReadPost = ({ onClickToggleModal, postID }: Props) => {
  const [likeCount, setLikeCount] = useState<number>(0);

  const onClickheartBtn = (isLike: boolean) => {
    if (isLike) setLikeCount(likeCount + 1);
    else setLikeCount(likeCount - 1);
  };

  return (
    <div className={styles.container_wrapper}>
      <Modal onClickToggleModal={onClickToggleModal} title='게시물'>
        <div className={styles.img_container_web}>
          <div className={styles.img} />
        </div>
        <div className={styles.non_img_container}>
          <div className={styles.post_section}>
            <div className={styles.post_section_header}>
              <FaUserCircle className={styles.user_profile_img} />
              <div className={styles.user_name}>사용자</div>
              <BsBookmark className={styles.subscription_btn} />
            </div>

            <div className={styles.post_scroll_section}>
              <div className={styles.post_section_body}>
                <div className={styles.img_container_mobile}>
                  <div className={styles.img} />
                </div>
                <div className={styles.text_section} />
              </div>
              <div className={styles.comment_read_section}>
                <CommentList />
              </div>
            </div>
          </div>

          <div className={styles.comment_input_section}>
            <div className={styles.like_section}>
              <HeartButton likeCount={likeCount} onClick={onClickheartBtn} />
            </div>
            <input className={styles.comment_input} placeholder='댓글을 작성하는 공간이에요' />
            <GrSend className={styles.send_btn_icon} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ReadPost;
