import { FaUserAlt } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';
import { IoHeart } from 'react-icons/io5';
import { MdOutlineComment } from 'react-icons/md';
import { ImyPost, ImySubPost } from '../../types/post';
import styles from './postCard.module.scss';

interface post {
  post: ImyPost | ImySubPost;
}

const PostCard = ({ post }: post) => {
  return (
    <ul className={styles.cardWrapper}>
      <li className={styles.imageWrapper}>
        <img src={post.imageFile} alt='post' />
      </li>
      <div className={styles.contentWrapper}>
        <li>
          <div className={styles.like}>
            <span>
              <IoHeart size={15} color='#FF5656' />
            </span>
            {post.reactionCount}
          </div>
          <div className={styles.comment}>
            <span>
              <MdOutlineComment size={15} />
            </span>
            {post.commentCount}
          </div>
        </li>
        {post.profileId && (
          <li className={styles.profile}>
            <span className={styles.icon}>
              <FaUserAlt size={35} />
            </span>
            <span className={styles.profileid}>{post.profileId}</span>
          </li>
        )}
      </div>
    </ul>
  );
};

export default PostCard;
