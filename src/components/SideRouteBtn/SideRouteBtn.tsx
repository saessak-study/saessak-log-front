import React from 'react';
import styles from './sideRouteBtn.module.scss';
import { FaUserAlt } from 'react-icons/fa';
import { BiPlusMedical } from 'react-icons/bi';

const SideRouteBtn = () => {
  return (
    <aside>
      <div className={styles.sideBtn}>
        <div className={styles.route_user}>
          <FaUserAlt />
        </div>
        <div className={styles.route_add}>
          <BiPlusMedical />
        </div>
      </div>
    </aside>
  );
};

export default SideRouteBtn;
