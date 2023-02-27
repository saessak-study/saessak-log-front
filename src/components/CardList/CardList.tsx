import styles from './CardList.module.scss';
import CardEach from './CardEach';

const dummyData = [
  {
    id: 1,
    imgsrc: 'https://cdn.pixabay.com/photo/2017/09/18/15/47/cat-2762156_960_720.jpg',
    like: 1,
    comment: 2,
  },
  {
    id: 2,
    imgsrc: 'https://cdn.pixabay.com/photo/2017/09/18/15/47/cat-2762156_960_720.jpg',
    like: 2,
    comment: 25,
  },
  {
    id: 3,
    imgsrc: 'https://cdn.pixabay.com/photo/2017/09/18/15/47/cat-2762156_960_720.jpg',
    like: 1,
    comment: 2,
  },
  {
    id: 4,
    imgsrc: 'https://cdn.pixabay.com/photo/2017/09/18/15/47/cat-2762156_960_720.jpg',
    like: 1,
    comment: 2,
  },
  {
    id: 5,
    imgsrc: 'https://cdn.pixabay.com/photo/2017/09/18/15/47/cat-2762156_960_720.jpg',
    like: 1,
    comment: 2,
  },
  {
    id: 6,
    imgsrc: 'https://cdn.pixabay.com/photo/2017/09/18/15/47/cat-2762156_960_720.jpg',
    like: 1,
    comment: 2,
  },
];
const CardList = () => {
  return (
    <div className={styles.cardListWrapper}>
      {dummyData.map((item) => {
        return <CardEach key={item.id} dummydata={item} />;
      })}
    </div>
  );
};

export default CardList;
