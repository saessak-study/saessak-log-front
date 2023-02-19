import React, { useRef } from 'react';
import styles from './uploadImageButton.module.scss';

const UploadImageButton = () => {
  const imgInputRef = useRef();
  const imgUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {};
  // const imageUpload = () => {
  //   const imgInputRef = useRef<HTMLInputElement>(null);
  // };
  const handleClickImageInput = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.target);
  };

  return (
    <div className={styles.img_upload_btn_container}>
      <input
        className={styles.add_img_btn}
        type='file'
        accept='image/jpg, image/jpeg, image/png'
        onChange={imgUploadHandler}
      />
    </div>
  );
};

export default UploadImageButton;
