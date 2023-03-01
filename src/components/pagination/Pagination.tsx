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
  // !현재 페이지, 페이지별 인덱스(0부터 시작)
  // const indexOfLast: number = currentPage * 6;
  // const indexOfFirst: number = indexOfLast - 6;
  // const checkCurrentPost = (totalPost): number => {
  //   const currentPost = totalPost.slice(indexOfFirst, indexOfLast);
  //   return currentPost;
  // };

  useEffect(() => {
    viewCardList();
  }, []);

  // !전체 게시물 가지고 와서 cardMainView에 저장
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

  const totalPageNumber = [];
  for (let ix = 1; ix <= Math.ceil(cardMainView.length / 6); ix += 1) {
    totalPageNumber.push(ix);
  }

  // !현재 페이지 값을 redux에 저장 + state에 저장
  const onClick = (ix: number) => {
    dispatch(pagingSlice.actions.paging(ix));
  };
  const currentPage: number = useSelector((state: pagingType) => {
    return Number(state.paging.value);
  });
  const onClickLeft = () => {
    console.log(currentPage);
  };

  return (
    <div>
      {/* {cardMainView.map((post, i) => (
        <div key={i}>{post.imageFile}</div>
      ))} */}
      <div className={styles.pagingContainer}>
        <AiOutlineLeft style={{ cursor: 'pointer' }} onClick={onClickLeft} />

        {totalPageNumber.map((post, ix) => (
          <div
            className={`${styles.pagingEach}`}
            key={ix}
            onClick={() => onClick(ix)}
            role='button'
            tabIndex={0}
          >
            {post}
          </div>
        ))}

        <AiOutlineRight style={{ cursor: 'pointer' }} />
      </div>
    </div>
  );
};

export default Paging;
