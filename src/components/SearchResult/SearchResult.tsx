import styles from './searchResult.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchResult = () => {
  return (
    <div className={styles.search_container}>
      <div className={styles.search_result}>
        <span style={{ fontSize: '32px', color: 'black' }}>
          &quot;<span style={{ color: '#41d18a' }}>푸들</span>&quot;
        </span>
        에 대한 검색 결과
      </div>
      {/* <div className={styles.searched_none}>일치하는 검색결과가 없습니다.</div> */}
      <div className={styles.recent_searched}>
        <div className={styles.recent_searchedTitle}>
          <span style={{ fontSize: '32px' }}>최근 검색</span>
          <span className={styles.searched_eraseAll}>모두 지우기</span>
        </div>
        <div className={styles.recent_searchedBox}>
          <div className={styles.recent_searchedComponent}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <AiOutlineSearch /> 검색기록 1
            </span>
            <span style={{ color: '#9a9a9a', cursor: 'pointer' }}>x</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
