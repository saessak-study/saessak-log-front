import { useEffect } from 'react';
import { GrSend } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { changeLike } from '../../actions/likeEach';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import likeEachSlice from '../../reducers/likeEach';
import { likeType } from '../../types/likeEach';
import HeartButton from '../HeartButton/HeartButton';
import styles from './createComment.module.scss';

interface Props {
  postID: number;
  onClickingHeart: () => void;
}

const CreateComment = ({ postID, onClickingHeart }: Props) => {
  const dispatch = useAppDispatch();
  const { isLike } = useAppSelector((state) => state.likeEach);
  const param = { postID };
  const sessionLength = sessionStorage.length;
  const localLength = localStorage.length;
  // ! dispatch함수

  // ! 처음로딩 시 내가 좋아요를 눌렀는지 아닌지 확인해야함 (확인방법 없다는 전제 하에)
  const checkingLike = async () => {
    if (sessionLength || localLength) {
      const firstViewLike = await dispatch(changeLike(param));
      const secondViewLike = await dispatch(changeLike(param));

      if (secondViewLike.payload.responseMessage === '해당 게시글을 좋아합니다.') {
        dispatch(likeEachSlice.actions.likeEach(true));
      } else {
        dispatch(likeEachSlice.actions.likeEach(false));
      }
    }
  };

  const isCheckLike = useSelector((state: likeType) => {
    return state.likeEach.isLike;
  });

  useEffect(() => {
    checkingLike();
  }, []);

  return (
    <div className={styles.comment_input_section}>
      {isCheckLike}
      <div className={styles.like_section}>
        <HeartButton postID={postID} onClickingHeart={onClickingHeart} />
      </div>
      <input className={styles.comment_input} placeholder='댓글을 작성하는 공간이에요' />

      {isCheckLike}
      <GrSend className={styles.send_btn_icon} />
    </div>
  );
};

export default CreateComment;
