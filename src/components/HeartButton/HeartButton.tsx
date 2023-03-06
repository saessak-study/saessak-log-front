import { useEffect, useState } from 'react';
import { BsHeartFill } from 'react-icons/bs';
import { getSinglePost } from '../../actions/viewCardEach';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import styles from './heartbutton.module.scss';

interface Props {
  postID: number;
  onClickingHeart: () => void;
}

const HeartButton = ({ postID, onClickingHeart }: Props) => {
  const param = { postID };
  const [likeCounting, setLikeCounting] = useState<number>(0);
  const { isLike } = useAppSelector((state) => state.likeEach);
  const dispatch = useAppDispatch();
  const getLikeCount = async () => {
    const result = await dispatch(getSinglePost(param));
    setLikeCounting(result.payload.likeCount);
    console.log(likeCounting);
  };

  const getLike = async () => {
    const result = await dispatch(getSinglePost(param));
  };

  useEffect(() => {
    getLike();
    getLikeCount();
  }, [getLikeCount]);
  return (
    <button type='button' className={styles.heart_button} onClick={onClickingHeart}>
      <BsHeartFill className={isLike ? styles.heart_fill_icon : styles.heart_empty_icon} />
      <div className={isLike ? styles.like_count_number : styles.unlike_count_number}>
        {likeCounting}
      </div>
    </button>
  );
};

export default HeartButton;
