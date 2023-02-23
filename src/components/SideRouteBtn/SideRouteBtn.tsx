import React, { useState } from 'react';
import styles from './sideRouteBtn.module.scss';
import { FaUserAlt } from 'react-icons/fa';
import { BiPlusMedical } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import WritePost from '../WritePost/WritePost';

const SideRouteBtn = () => {
  let navigate = useNavigate();
  const [showWriteModal, setShowWriteModal] = useState<boolean>(false);
  const onClickWritePost = () => {
    setShowWriteModal((prev) => !prev);
  };

  return (
    <aside>
      <div className={styles.sideBtn}>
        <div
          className={styles.route_user}
          onClick={() => {
            navigate('/myaccount');
          }}
          role='button'
          tabIndex={0}
        >
          <FaUserAlt />
        </div>
        <div className={styles.route_add} onClick={onClickWritePost} role='button' tabIndex={0}>
          <BiPlusMedical />
        </div>
        {showWriteModal && <WritePost onClickToggleModal={onClickWritePost} />}
      </div>
    </aside>
  );
};

export default SideRouteBtn;
