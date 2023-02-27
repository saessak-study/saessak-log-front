import { IoHeart } from 'react-icons/io5';
import { MdOutlineComment } from 'react-icons/md';
import styles from './CardList.module.scss';

interface IdummyData {
  id: number;
  imgsrc: string;
  like: number;
  comment: number;
}

interface dummydata {
  dummydata: IdummyData;
}

const CardEach = ({ dummydata }: dummydata) => {
  return (
    <ul className={styles.cardWrapper}>
      <li className={styles.imageWrapper}>
        <img src={dummydata.imgsrc} alt='post' />
      </li>
      <li className={styles.like}>
        <span>
          <IoHeart size={15} color='#FF5656' />
        </span>
        {dummydata.like}
      </li>
      <li className={styles.comment}>
        <span>
          <MdOutlineComment size={15} />
        </span>
        {dummydata.comment}
      </li>
    </ul>
  );
};

export default CardEach;
