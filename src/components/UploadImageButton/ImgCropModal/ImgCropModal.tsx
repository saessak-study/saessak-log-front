import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { Point, Area } from 'react-easy-crop/types';
import styles from './imgCropModal.module.scss';
import Modal from '../../Modal/Modal';

interface Props {
  onClickToggleModal: () => void;
  imageFile: string; // crop할 이미지
  // setCrppedAreaPixels: object; // 잘린 이미지 값
  // width: number; // 이미지 비율
  // height: number;
  // cropShape: string; // 이미지 모양 설정
}

const ImgCropModal: React.FC<Props> = ({ onClickToggleModal, imageFile }) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);

  return (
    <Modal onClickToggleModal={onClickToggleModal} title='게시물'>
      <div className={styles.container}>
        <div className={styles.crop_container}>
          <Cropper
            image={imageFile}
            crop={crop}
            zoom={zoom}
            aspect={1 / 1}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </div>
        <div className={styles.crop_button_container}>
          <button type='button'>저장</button>
        </div>
      </div>
    </Modal>
  );
};

export default ImgCropModal;
