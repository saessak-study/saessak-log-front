import React, { useState, useEffect } from 'react';
import Modal from '../Modal/Modal';
import HeartButton from '../HeartButton/HeartButton';
import CommentList from '../CommentList/CommentList';
import styles from './readPost.module.scss';
import { FaUserCircle } from 'react-icons/fa';
import { BsBookmark } from 'react-icons/bs';
import { GrSend } from 'react-icons/gr';
import axios from 'axios';

interface Props {
  onClickToggleModal: () => void;
  postID: number;
  image: string;
}

const ReadPost = ({ onClickToggleModal, postID, image }: Props) => {
  const [likeCount, setLikeCount] = useState<number>(0);
  const [viewPostText, setViewPostText] = useState<string>('');
  const [viewUserId, setViewUserId] = useState<string>('');

  const onClickheartBtn = (isLike: boolean) => {
    if (isLike) setLikeCount(likeCount + 1);
    else setLikeCount(likeCount - 1);
  };

  // useEffect(() => {
  //   axios
  //     .get(`/posts/${postId}`)
  //     .then((response) => {
  //       console.log(response);
  //       setImage(response.data.imageFile);
  //       setViewPostText(response.data.postText);
  //       setViewUserId(response.data.profileId);
  //       /** 좋아요 수는 전역 관리 해야함 */
  //       setLikeCount(response.data.likeCount);
  //     })
  //     .catch((error) => {
  //       console.log('Error: ', error.response.data.responseMessage);
  //     });
  // }, []);

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
              <div className={styles.user_name}>{viewUserId}</div>
              <BsBookmark className={styles.subscription_btn} />
            </div>

            <div className={styles.post_scroll_section}>
              <div className={styles.post_section_body}>
                <div className={styles.img_container_mobile}>
                  <img src={viewImage} className={styles.img} />
                </div>
                <div className={styles.text_section}>{viewPostText}</div>
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
