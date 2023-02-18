import React from 'react';
import { BiImageAdd } from 'react-icons/bi';
import styles from './uploadImageButton.module.scss';

const UploadImageButton = () => {
  return <BiImageAdd className={styles.write_modal_add_img_icon} />;
};

export default UploadImageButton;
