import React, { useState } from 'react';
import styles from './uploadImageButton.module.scss';
import ImgCropModal from './ImgCropModal/ImgCropModal';

interface Props {
  onClickToggleModal: () => void;
}

const UploadImageButton = ({ onClickToggleModal }: Props) => {
  const [imageFile, setImageFile] = useState<string[]>([]);
  const [viewCropModal, setViewCropModal] = useState<boolean>(false);

  const onImageChange = (e: React.ChangeEvent) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList;
    const targetFilesArray = Array.from(targetFiles);
    const selectedFiles: string[] = targetFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setImageFile(selectedFiles);
    setViewCropModal(true);
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
      {viewCropModal && (
        <ImgCropModal onClickToggleModal={onClickToggleModal} imageFile={imageFile[0]} />
      )}
    </div>
  );
};

export default UploadImageButton;
