import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import CommentList from '../CommentList/CommentList';
import styles from './readPost.module.scss';
import { FaUserCircle } from 'react-icons/fa';
import { BsBookmark } from 'react-icons/bs';
import SubscriptionButton from '../SubscriptionButton/SubscriptionButton';
import CreateComment from '../CreateComment/CreateComment';
import { useAppDispatch } from '../../hooks/useRedux';
import { getSinglePost } from '../../actions/viewCardEach';
import likeEachSlice from '../../reducers/likeEach';
import { changeLike } from '../../actions/likeEach';

interface Props {
  onClickToggleModal: () => void;
  postID: number;
  image: string;
}

const ReadPost = ({ onClickToggleModal, postID, image }: Props) => {
  const [title, setTitle] = useState('');
  const [likeCount, setLikeCount] = useState(0);
  const sessionLength = sessionStorage.length;
  const localLength = localStorage.length;
  const param = { postID };
  const dispatch = useAppDispatch();
  const getTitle = async () => {
    const result = await dispatch(getSinglePost(param));
    setTitle(result.payload.postText);
  };

  // ! 좋아요 클릭 시
  const onClickingHeart = async () => {
    if (sessionLength || localLength) {
      const result = await dispatch(changeLike(param));
      if (result.payload.responseMessage === '해당 게시글을 좋아합니다.') {
        dispatch(likeEachSlice.actions.likeEach(true));
      } else {
        dispatch(likeEachSlice.actions.likeEach(false));
      }
    } else {
      alert('추천은 로그인 후에 가능합니다');
    }
  };

  useEffect(() => {
    getTitle();
  }, [getTitle]);
  return (
    <div className={styles.container_wrapper}>
      <Modal onClickToggleModal={onClickToggleModal} title='게시물'>
        <div className={styles.img_container_web}>
          <img src={image} className={styles.img} />
        </div>
        <div className={styles.non_img_container}>
          <div className={styles.post_section}>
            <div className={styles.post_section_header}>
              <FaUserCircle className={styles.user_profile_img} />
              <div className={styles.user_name}>사용자</div>
              <SubscriptionButton postId={postID} />
            </div>
            <div className={styles.post_scroll_section}>
              <div className={styles.post_section_body}>
                <div className={styles.img_container_mobile}>
                  <img src={image} className={styles.img} />
                </div>
                <div className={styles.text_section}>{title}</div>
              </div>
              <div className={styles.comment_read_section}>
                <CommentList postID={postID} />
              </div>
            </div>
          </div>
          <CreateComment postID={postID} onClickingHeart={onClickingHeart} />
        </div>
      </Modal>
    </div>
  );
};

export default ReadPost;
