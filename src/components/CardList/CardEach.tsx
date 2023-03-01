import { IoHeart } from 'react-icons/io5';
import { MdOutlineComment } from 'react-icons/md';
import styles from './CardList.module.scss';
import { useState } from 'react';
import { cardProfileType } from '../../types/card';
import ReadPost from '../ReadPost/ReadPost';

const CardEach = ({ cardProfile }: cardProfileType) => {
  const [showReadModal, setShowReadModal] = useState<boolean>(false);

  const onClickReadPost = () => {
    console.log(showReadModal);
    setShowReadModal((prev) => !prev);
  };

  return (
    <ul className={styles.cardWrapper}>
      {showReadModal && <ReadPost onClickToggleModal={onClickReadPost} />}
      <li className={styles.imageWrapper}>
        <img src={cardProfile.imageFile} alt='post' />
        {cardProfile.imageFile}
      </li>
      <li className={styles.like}>
        <span>
          <IoHeart size={15} color='#FF5656' />
        </span>
        {cardProfile.reactionCount}
      </li>
      <li className={styles.comment}>
        <span>
          <MdOutlineComment size={15} />
        </span>
        {cardProfile.commentCount}
      </li>
    </ul>
  );
};

export default CardEach;
