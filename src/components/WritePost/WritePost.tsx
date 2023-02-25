import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setImageFile, setPostText } from '../../reducers/uploadPost';
import { uploadPost } from '../../actions/uploadPost';
import Modal from '../Modal/Modal';
import styles from './writePost.module.scss';
import { AppDispatch } from '../../store/configureStore';

interface Props {
  onClickToggleModal: () => void;
}

const WritePost = ({ onClickToggleModal }: Props) => {
  const [content, setContent] = useState<string>('');
  const [imagePreview, setImagePreview] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImagePreview(reader.result as string);
        console.log('디스패치 될 이미지 데이터', reader.result as string);
        console.log('디스패치 될 이미지 데이터 타입', typeof reader.result as string);
        dispatch(setImageFile(reader.result as string));
      };
    }
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    dispatch(setPostText(content));
    console.log('디스패치 될 글씨 데이터', content);
    console.log('디스패치 될 글씨 데이터 타입', typeof content);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (imagePreview && content) {
      const newPostObj = { imageFile: imagePreview, postText: content };
      dispatch(uploadPost(newPostObj));
      console.log('api 보내는 녀석: ', newPostObj);
      alert('게시글 작성이 완료되었습니다.');
      onClickToggleModal();
    }
  };

  return (
    <div className={styles.write_modal_container_wrapper}>
      <Modal onClickToggleModal={onClickToggleModal} title='게시물 작성'>
        <form onSubmit={handleSubmit}>
          <div className={styles.write_modal_img_container_web}>
            {imagePreview ? (
              <div className={styles.img_upload_view_container}>
                <img src={imagePreview} className={styles.img} />
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
                {imagePreview ? (
                  <div className={styles.img_upload_view_container}>
                    <img src={imagePreview} className={styles.img} />
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
                <textarea
                  id='postText'
                  onChange={handleChangeText}
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
