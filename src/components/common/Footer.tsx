import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={styles.infoContainer}>
        <ul>
          <li>새싹</li>
          <li>로그</li>
          <li>초보</li>
          <li>개발</li>
          <li>스터디</li>
          <li>프로젝트</li>
        </ul>
        <select name='goto' id='goto'>
          <option value=''>새싹스터디원</option>
          <option value=''>하영</option>
          <option value=''>길웅</option>
          <option value=''>다정</option>
          <option value=''>성보</option>
          <option value=''>혜빈</option>
          <option value=''>혜리</option>
          <option value=''>아연</option>
          <option value=''>호빈</option>
          <option value=''>건희</option>
          <option value=''>준호</option>
          <option value=''>성환</option>
        </select>
      </div>
    </footer>
  );
};

export default Footer;
