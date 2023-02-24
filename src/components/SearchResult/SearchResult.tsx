import styles from './searchResult.module.scss';
import { useSelector } from 'react-redux';
import { searchType } from '../../types/search';
import { useState } from 'react';

const SearchResult = () => {
  const [isLikeOrder, setIsLikeOrder] = useState(true);
  const orderClick = () => {
    setIsLikeOrder((prevState) => !prevState);
  };
  const typedWord = useSelector((state: searchType) => {
    return state.search.value;
  });

  return (
    <div className={styles.search_container}>
      <div className={styles.search_result}>
        <span style={{ fontSize: '32px', color: 'black' }}>
          &quot;<span style={{ color: '#41d18a' }}>{typedWord}</span>&quot;
        </span>
        에 대한 검색 결과
      </div>
      <div className={styles.searchBtn_wrap}>
        <div
          className={isLikeOrder === true ? styles.searchBtn_on : styles.searchBtn_off}
          onClick={orderClick}
          role='button'
          tabIndex={0}
        >
          좋아요순
        </div>
        <div
          className={isLikeOrder === true ? styles.searchBtn_off : styles.searchBtn_on}
          onClick={orderClick}
          role='button'
          tabIndex={0}
        >
          댓글순
        </div>
      </div>
      {/* <div className={styles.searched_none}>일치하는 검색결과가 없습니다.</div> */}
    </div>
  );
};

export default SearchResult;
