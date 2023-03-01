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
      {/* {showReadModal && (
        <ReadPost onClickToggleModal={onClickReadPost} postID={cardProfile.profileId} />
      )} */}
      <li className={styles.imageWrapper}>
        <img src={cardProfile.imageFile} alt='post' />
      </li>
      <div className={styles.image_below}>
        <li className={styles.image_userName}>작성자 : {cardProfile.profileId}</li>
        <div className={styles.like_comment}>
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
        </div>
      </div>
    </ul>
  );
};

export default CardEach;
