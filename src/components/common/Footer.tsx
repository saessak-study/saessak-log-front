import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={styles.infoContainer}>
        <ul>
          <li>2023년</li>
          <li>02월</li>
          <li>새싹로그</li>
          <li>초보</li>
          <li>개발</li>
          <li>스터디</li>
        </ul>
        <select>
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
      <div className={styles.copyright}>
        <div>© 2023 saessak-log from saessakStudy</div>
      </div>
    </footer>
  );
};

export default Footer;
