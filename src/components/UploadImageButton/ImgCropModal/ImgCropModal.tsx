import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { Point, Area } from 'react-easy-crop/types';
import { useDispatch } from 'react-redux';
// import {setImage} from '~imageSlice'
import styles from './imgCropModal.module.scss';
import Modal from '../../Modal/Modal';

interface Props {
  onClickToggleModal: () => void;
  imageFile: string;
}

const ImgCropModal = ({ onClickToggleModal, imageFile }: Props) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  // const dispatch = useDispatch();
  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);

  // const onCropCompleteSave = () => {
  //   dispatch(setImage(imageFile));
  //   onClickToggleModal();
  // }

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
          {/* <button type='button' onClick={onCropCompleteSave}>저장</button> */}
        </div>
      </div>
    </Modal>
  );
};

export default ImgCropModal;
