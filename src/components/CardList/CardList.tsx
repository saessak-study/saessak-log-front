import styles from './CardList.module.scss';
import CardEach from './CardEach';
import { getCardList } from '../../actions/viewCardList';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { pagingType } from '../../types/paging';

const CardList = () => {
  // ! 한 페이지 당 불러오는 게시글 수
  const limit = 6;

  // ! 현재 페이지를 불러오는 함수
  const page: number = useSelector((state: pagingType) => {
    return Number(state.paging.value);
  });

  const params = { limit, page };
  const dispatch = useAppDispatch();
  // const { loadCardListError, loadCardList } = useAppSelector((state) => state.loadCardList);
  const [cardMainView, setCardMainView] = useState([]);
  const viewCardList = async () => {
    const result = await dispatch(getCardList(params));
    setCardMainView(result.payload);
  };
  useEffect(() => {
    viewCardList();
  }, [page]);

  return (
    <div className={styles.cardListWrapper}>
      {cardMainView.map((item, i) => {
        return <CardEach key={i} cardProfile={item} />;
      })}
    </div>
  );
};

export default CardList;
