import React, { useState } from 'react';
import styles from './uploadImageButton.module.scss';

const UploadImageButton = () => {
  const [imageFile, setImageFile] = useState<string[]>([]);

  const onImageChange = (e: React.ChangeEvent) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList;
    const targetFilesArray = Array.from(targetFiles);
    const selectedFiles: string[] = targetFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setImageFile(selectedFiles);
    console.log(imageFile);
  };

  return (
    <div className={styles.img_upload_btn_container}>
      <div>
        {imageFile && (
          <img alt='사진을 선택해주세요' src={imageFile[0]} style={{ margin: 'auto' }} />
        )}
      </div>
      <input className={styles.add_img_btn} type='file' accept='image/*' onChange={onImageChange} />
    </div>
  );
};

export default UploadImageButton;
