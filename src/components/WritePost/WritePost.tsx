import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uploadPostSlice from '../../reducers/uploadPost';
import { uploadPost } from '../../types/post';
// import uploadPost from '../../actions/uploadPost';
import Modal from '../Modal/Modal';
import styles from './writePost.module.scss';

interface Props {
  onClickToggleModal: () => void;
}

const WritePost = ({ onClickToggleModal }: Props) => {
  const [content, setContent] = useState<string>('');
  const [image, setImage] = useState<string | null>('');
  const dispatch = useDispatch();
  const selectedImg = useSelector((state: uploadPost) => {
    return state.image;
  });

  // const onSubmit = () => {
  //   const post: uploadPost = { content, image };
  //   dispatch(uploadPost(post));
  // };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setImage(reader.result as string);
        console.log(image);
        dispatch(uploadPostSlice.actions.setImage(reader.result as string));
        console.log('selectedImg', selectedImg);
      };
    }
  };

  const handleSubmit = () => {
    dispatch(uploadPostSlice.actions.setContent(content));
  };

  return (
    <div className={styles.write_modal_container_wrapper}>
      <Modal onClickToggleModal={onClickToggleModal} title='게시물 작성'>
        <form onSubmit={handleSubmit}>
          <div className={styles.write_modal_img_container_web}>
            {image ? (
              <div className={styles.img_upload_view_container}>
                <img src={image} className={styles.img} />
              </div>
            ) : (
              <input
                className={styles.add_img_btn}
                type='file'
                accept='image/*'
                onChange={handleChangeImage}
              />
            )}
          </div>
          <div className={styles.write_modal_non_img_container}>
            <div className={styles.write_modal_post_section}>
              <div className={styles.write_modal_img_container_mobile}>
                {image ? (
                  <div className={styles.img_upload_view_container}>
                    <img src={image} className={styles.img} />
                  </div>
                ) : (
                  <input
                    className={styles.add_img_btn}
                    type='file'
                    accept='image/*'
                    onChange={handleChangeImage}
                  />
                )}
              </div>
              <div className={styles.write_modal_text_input_section}>
                <input
                  type='text'
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
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
        </form>
      </Modal>
    </div>
  );
};

export default WritePost;
