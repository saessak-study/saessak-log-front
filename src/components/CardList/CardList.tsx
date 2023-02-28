import styles from './CardList.module.scss';
import CardEach from './CardEach';
import { getCardList } from '../../actions/viewCardList';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { useEffect, useState } from 'react';

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
  const limit = 6;
  const page = 1;
  const params = { limit, page };
  const dispatch = useAppDispatch();
  const { loadCardListError, loadCardList } = useAppSelector((state) => state.loadCardList);
  const [aaa, bbb] = useState();
  const viewCardList = async () => {
    const result = await dispatch(getCardList(params));
    console.log(result.payload.postMainDtoList);
    bbb(result.payload.postMainDtoList);
  };
  useEffect(() => {
    // console.log(loadCardList);
    // console.log(loadCardList);
    console.log(viewCardList());
  }, []);
  return (
    <div className={styles.cardListWrapper}>
      {aaa.map((card) => (
        <>
          <div>{card.postMainDTOList.commentCount}</div>
          <div>{card.postMainDTOList.imageFile}</div>
          <div>{card.postMainDTOList.reactionCount}</div>
        </>
      ))}
      {/* {dummyData.map((item) => {
        return <CardEach key={item.id} dummydata={item} />;
      })} */}
    </div>
  );
};

export default CardList;
