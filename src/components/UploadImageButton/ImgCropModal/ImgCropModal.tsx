import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { Point, Area } from 'react-easy-crop/types';
import './imgCropModal.css';
import Modal from '../../Modal/Modal';

interface Props {
  onClickToggleModal: () => void;
  imageFile: string;
}

const ImgCropModal: React.FC<Props> = ({ onClickToggleModal, imageFile }) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);

  return (
    <Modal onClickToggleModal={onClickToggleModal} title='게시물'>
      <Cropper
        image={imageFile}
        crop={crop}
        zoom={zoom}
        aspect={1 / 1}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
    </Modal>
  );
};

export default ImgCropModal;
