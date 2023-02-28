import styles from './pagination.module.scss';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/useRedux';
import { getCardList } from '../../actions/viewCardList';

const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

const Paging = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLast: number = currentPage * 6;
  const indexOfFirst: number = indexOfLast - 6;
  const checkCurrentPost = (totalPost): number => {
    const currentPost = totalPost.slice(indexOfFirst, indexOfLast);
    return currentPost;
  };

  useEffect(() => {
    viewCardList();
  }, []);

  const limit = 1000;
  const page = 0;
  const params = { limit, page };
  const dispatch = useAppDispatch();
  const [cardMainView, setCardMainView] = useState([]);
  const viewCardList = async () => {
    const result = await dispatch(getCardList(params));
    setCardMainView(result.payload.length);
  };

  return <div>{cardMainView}</div>;
};

export default Paging;
