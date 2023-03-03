import { IoHeart } from 'react-icons/io5';
import { MdOutlineComment } from 'react-icons/md';
import { ImyPost } from '../../types/post';
import styles from './postCard.module.scss';

interface post {
  post: ImyPost;
}

const PostCard = ({ post }: post) => {
  return (
    <ul className={styles.cardWrapper}>
      <li className={styles.imageWrapper}>
        <img src={post.imageFile} alt='post' />
      </li>
      <li className={styles.like}>
        <span>
          <IoHeart size={15} color='#FF5656' />
        </span>
        {post.reactionCount}
      </li>
      <li className={styles.comment}>
        <span>
          <MdOutlineComment size={15} />
        </span>
        {post.commentCount}
      </li>
    </ul>
  );
};

export default PostCard;
