import styles from './pagination.module.scss';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/useRedux';
import { getCardList } from '../../actions/viewCardList';
import pagingSlice from '../../reducers/paging';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { pagingType } from '../../types/paging';

// 한 페이지에 게시글 6개씩 보이는 것을 상정했습니다.
// 고로 아래쪽에 적힌 6은 전부 한 페이지 당 보이는 게시글을 의미합니다
const Paging = () => {
  useEffect(() => {
    viewCardList();
  }, []);

  // !전체 게시물(만개 이하) 가지고 와서 cardMainView에 저장
  const limit = 10000;
  const page = 0;
  const params = { limit, page };
  const dispatch = useAppDispatch();
  const [cardMainView, setCardMainView] = useState([]);
  const viewCardList = async () => {
    const result = await dispatch(getCardList(params));
    console.log(result.payload);
    setCardMainView(result.payload);
  };

  // !총 페이지 수는 (전체 게시물 / 6)
  const totalPageNumber = [];
  for (let ix = 1; ix <= Math.ceil(cardMainView.length / 6); ix += 1) {
    totalPageNumber.push(ix);
  }

  // !현재 페이지 값을 redux에 저장
  const currentPage: number = useSelector((state: pagingType) => {
    return Number(state.paging.value);
  });
  const onClick = (ix: number) => {
    dispatch(pagingSlice.actions.paging(ix));
    console.log(currentPage);
  };

  // !보여지는 페이지 수
  let pageArray = [];
  if (totalPageNumber.length < 6) {
    pageArray = totalPageNumber;
  } else {
    pageArray = [];
    for (let ix = currentPage; ix < currentPage + 6; ix += 1) {
      pageArray.push(ix);
    }
  }

  // !왼쪽 화살표 클릭 시 발생하는 이벤트
  const onClickLeft = () => {
    if (currentPage > 0) {
      dispatch(pagingSlice.actions.paging(currentPage - 1));
    }
  };
  const onClickRight = () => {
    if (currentPage < totalPageNumber.length - 1) {
      dispatch(pagingSlice.actions.paging(currentPage + 1));
    }
  };

  return (
    <div>
      <div className={styles.pagingContainer}>
        <AiOutlineLeft style={{ cursor: 'pointer' }} onClick={onClickLeft} />

        {totalPageNumber.map((post, ix) => (
          <div
            className={ix === currentPage ? `${styles.pagingOn}` : `${styles.pagingEach}`}
            key={ix}
            onClick={() => onClick(ix)}
            role='button'
            tabIndex={0}
          >
            {post}
          </div>
        ))}

        <AiOutlineRight style={{ cursor: 'pointer' }} onClick={onClickRight} />
      </div>
    </div>
  );
};

export default Paging;
