import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import CommentList from '../CommentList/CommentList';
import styles from './readPost.module.scss';
import { FaUserCircle } from 'react-icons/fa';
import { BsBookmark } from 'react-icons/bs';
import SubscriptionButton from '../SubscriptionButton/SubscriptionButton';
import CreateComment from '../CreateComment/CreateComment';

interface Props {
  onClickToggleModal: () => void;
  postID: number;
  image: string;
}

const ReadPost = ({ onClickToggleModal, postID, image }: Props) => {
  return (
    <div className={styles.container_wrapper}>
      <Modal onClickToggleModal={onClickToggleModal} title='게시물'>
        <div className={styles.img_container_web}>
          <img src={image} className={styles.img} />
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
                  <img src={image} className={styles.img} />
                </div>
                <div className={styles.text_section}>글글글글글들어갈자리</div>
              </div>
              <div className={styles.comment_read_section}>
                <CommentList postID={postID} />
              </div>
            </div>
          </div>
          <CreateComment postID={postID} />
        </div>
      </Modal>
    </div>
  );
};

export default ReadPost;
