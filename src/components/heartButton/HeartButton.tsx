import { useState } from 'react';
import { BsHeartFill } from 'react-icons/bs';
// import { FaHeart, FaRegHeart } from 'react-icons/fa';
import styles from './heartbutton.module.scss';

interface Props {
  onClick: (isLike: boolean) => void;
  likeCount: number;
}

const HeartButton: React.FC<Props> = ({ onClick, likeCount }: Props) => {
  const [isLike, setIsLike] = useState<boolean>(false);

  const handleLike = () => {
    setIsLike((prev) => !prev);
    onClick(!isLike);
  };
  return (
    <button type='button' className={styles.heart_button} onClick={handleLike}>
      <BsHeartFill className={isLike ? styles.heart_fill_icon : styles.heart_empty_icon} />
      <div className={isLike ? styles.like_count_number : styles.unlike_count_number}>
        {likeCount}
      </div>
    </button>
  );
};

export default HeartButton;
