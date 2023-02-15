import React from 'react';
import Modal from '../modal/Modal';
import styles from './css/writePost.module.css';
import { BiImageAdd } from 'react-icons/bi';

interface Props {
  onClickToggleModal: () => void;
}

const WritePost: React.FC<Props> = ({ onClickToggleModal }) => {
  // const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className={styles.write_modal_container_wrapper}>
      <Modal onClickToggleModal={onClickToggleModal} title='게시물 작성'>
        <div className={styles.write_modal_img_container_web}>
          <BiImageAdd className={styles.write_modal_add_img_icon} />
        </div>
        <div className={styles.write_modal_non_img_container}>
          <div className={styles.write_modal_post_section}>
            <div className={styles.write_modal_img_container_mobile}>
              <BiImageAdd className={styles.write_modal_add_img_icon} />
            </div>
            <div className={styles.write_modal_text_input_section}>
              <input
                className={styles.write_modal_text_input}
                placeholder='게시글을 작성하는 공간이에요'
              />
            </div>
          </div>
          <div className={styles.write_modal_submit_btn_section}>
            <button type='submit' className={styles.write_modal_send_btn}>
              게시
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default WritePost;
