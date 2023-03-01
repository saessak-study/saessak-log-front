import styles from './CardList.module.scss';
import CardEach from './CardEach';
import { useAppDispatch } from '../../hooks/useRedux';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { pagingType } from '../../types/paging';
import { likeCommentPriority } from '../../types/likeCommentPriority';
import { getCommentPriority, getLikePriority } from '../../actions/likeCommentPriority';

const CardList = () => {
  // ! 좋아요순 댓글순 여부 redux에 들어갔는지 확인함
  const isLikeRedux = useSelector((state: likeCommentPriority) => {
    return state.isLikeOrder.value;
  });

  // ! 한 페이지 당 불러오는 게시글 수
  const limit = 6;

  // ! 현재 페이지를 불러오는 함수
  const page: number = useSelector((state: pagingType) => {
    return Number(state.paging.value);
  });

  const params = { limit, page };
  const dispatch = useAppDispatch();

  // !모든 게시글이 들어가있는 array
  const [cardMainView, setCardMainView] = useState([]);
  const viewCardList = async () => {
    if (isLikeRedux === true) {
      const result = await dispatch(getLikePriority(params));
      setCardMainView(result.payload);
    } else {
      const result = await dispatch(getCommentPriority(params));
      setCardMainView(result.payload);
    }
  };

  useEffect(() => {
    viewCardList();
  }, [page, isLikeRedux]);

  return (
    <div className={styles.cardListWrapper}>
      {cardMainView.map((item, i) => {
        return <CardEach key={i} cardProfile={item} />;
      })}
    </div>
  );
};

export default CardList;
