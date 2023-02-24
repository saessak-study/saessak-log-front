import styles from './searchResult.module.scss';
import { useSelector } from 'react-redux';
import searchSlice from '../../reducers/search';
import { searchType } from '../../types/search';

const SearchResult = () => {
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
        <div className={styles.searchBtn_on}>좋아요순</div>
        <div className={styles.searchBtn_off}>댓글순</div>
      </div>
      {/* <div className={styles.searched_none}>일치하는 검색결과가 없습니다.</div> */}
    </div>
  );
};

export default SearchResult;
