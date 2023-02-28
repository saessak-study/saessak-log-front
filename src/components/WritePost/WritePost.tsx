import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { uploadPost } from '../../actions/uploadPost';
import { uploadPostContents } from '../../types/uploadpost';
import Modal from '../Modal/Modal';
import styles from './writePost.module.scss';

interface Props {
  onClickToggleModal: () => void;
}

const WritePost = ({ onClickToggleModal }: Props) => {
  const [uploadData, setUploadData] = useState<uploadPostContents>({
    file: null,
    postText: '',
  });
  const [previewImage, setPreviewImage] = useState<string>('');
  const { uploadPostDone, uploadPostError, uploadPostReponse } = useAppSelector(
    (state) => state.uploadPost
  );
  const dispatch = useAppDispatch();

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    setUploadData({
      ...uploadData,
      file,
    });
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64 = reader.result;
        setPreviewImage(base64.toString());
      };
    }
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUploadData({
      ...uploadData,
      postText: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(uploadPost(uploadData));
    console.log('api 보내는 녀석: ', uploadData);
    alert('게시글 작성이 완료되었습니다.');
    console.log(uploadPostReponse);
    onClickToggleModal();
    if (uploadPostError) {
      alert('게시글 작성 실패!');
      onClickToggleModal();
    }
  };

  return (
    <div className={styles.write_modal_container_wrapper}>
      <Modal onClickToggleModal={onClickToggleModal} title='게시물 작성'>
        <form onSubmit={handleSubmit}>
          <div className={styles.write_modal_img_container_web}>
            {previewImage ? (
              <div className={styles.img_upload_view_container}>
                <img src={previewImage} className={styles.img} />
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
                {previewImage ? (
                  <div className={styles.img_upload_view_container}>
                    <img src={previewImage} className={styles.img} />
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
                  value={uploadData.postText}
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
