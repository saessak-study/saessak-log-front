import { IoHeart } from 'react-icons/io5';
import { MdOutlineComment } from 'react-icons/md';
import styles from './CardList.module.scss';
import { useEffect, useState } from 'react';
import { cardProfileType } from '../../types/card';
import ReadPost from '../ReadPost/ReadPost';

const CardEach = ({ cardProfile }: cardProfileType) => {
  const [showReadModal, setShowReadModal] = useState<boolean>(false);

  const onClickReadPost = () => {
    setShowReadModal((prev) => !prev);
  };
  useEffect(() => {
    console.log('cardProfile: ', cardProfile);
  }, []);

  return (
    <>
      {showReadModal && (
        <ReadPost
          onClickToggleModal={onClickReadPost}
          postID={cardProfile.postId}
          profileId={cardProfile.profileId}
          image={cardProfile.imageFile}
        />
      )}
      <ul className={styles.cardWrapper} onClick={onClickReadPost} role='presentation'>
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
    </>
  );
};

export default CardEach;
