import React from 'react';
import styles from './pageTitle.module.scss';
import { AiFillHome } from 'react-icons/ai';

const PageTitle = () => {
  return (
    <div className={styles.title_container}>
      <AiFillHome className={styles.route_home} />
      <span className={styles.page_title}>구독함</span>
      <span style={{ opacity: 0 }}>빈칸</span>
    </div>
  );
};

export default PageTitle;
