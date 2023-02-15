import React, { useState, useCallback } from 'react';
import Modal from '../modal/Modal';
import styles from './css/readPost.module.css';
import { BsHeartFill, BsBookmark } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { GrSend } from 'react-icons/gr';

interface Props {
  onClickToggleModal: () => void;
}

const ReadPost: React.FC<Props> = ({ onClickToggleModal }) => {
  // const [showModal, setShowModal] = useState<boolean>(false);
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
            <div className={styles.post_section_body}>
              <div className={styles.img_container_mobile}>
                <div className={styles.img} />
              </div>
              <div className={styles.text_section} />
            </div>
          </div>
          <div className={styles.comment_read_section}>
            <div className={styles.comment_component}>
              <div className={styles.comment_user}>
                <FaUserCircle className={styles.user_profile_img} />
                <div className={styles.user_name_comment}>사용자</div>
              </div>
              <div className={styles.commnet_text}>전 이런 내용의 댓글을 달고 싶어요</div>
            </div>
            <div className={styles.comment_component}>
              <div className={styles.comment_user}>
                <FaUserCircle className={styles.user_profile_img} />
                <div className={styles.user_name_comment}>사용자</div>
              </div>
              <div className={styles.commnet_text}>전 이런 내용의 댓글을 달고 싶어요</div>
            </div>

            <div className={styles.read_all_comments_btn}>댓글 모두 보기</div>
          </div>
          <div className={styles.comment_input_section}>
            <div className={styles.like_section}>
              <BsHeartFill className={styles.like_btn_icon} />
              <div className={styles.like_count_number}>25</div>
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
