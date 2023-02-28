import styles from './CardList.module.scss';
import CardEach from './CardEach';
import { getCardList } from '../../actions/viewCardList';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { useEffect, useState } from 'react';

const CardList = () => {
  const limit = 6;
  const page = 0;
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
  }, []);

  return (
    <div className={styles.cardListWrapper}>
      {cardMainView.map((item, i) => {
        return <CardEach key={i} cardProfile={item} />;
      })}
    </div>
  );
};

export default CardList;
