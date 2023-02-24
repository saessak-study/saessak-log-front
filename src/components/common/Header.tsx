import styles from './header.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import searchSlice from '../../reducers/search';
import { searchType } from '../../types/search';

const Header = () => {
  // 상태관리
  const [isModalView, setIsModalView] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const dispatch = useDispatch();
  const typedWord = useSelector((state: searchType) => {
    return state.search.value;
  });

  // 함수
  const modalClick = () => {
    setIsModalView((prevState) => !prevState);
  };

  const navigate = useNavigate();
  const onChange = (e) => {
    setInputVal(e.target.value);
  };

  const onSearching = () => {
    dispatch(searchSlice.actions.typing(inputVal));
    navigate('/search');
    console.log(typedWord);
  };
  const onClick = () => {
    onSearching();
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearching();
    }
  };

  return (
    <div className={styles.top_nav}>
      <div className={styles.nav_logo}>
        <img src='img/temp.png' />
        <img src='img/logo_title.png' />
      </div>
      <div className={styles.search_bar}>
        <AiOutlineSearch className={styles.search_icon} />
        <input
          className={styles.search_input}
          type='text'
          placeholder='검색'
          onKeyPress={onKeyPress}
          onChange={onChange}
        />
        <div className={styles.search_btn} onClick={onClick} role='button' tabIndex={0}>
          검색
        </div>
      </div>
      <div className={styles.nav_userInfo}>
        <div className={styles.user_circle} onClick={modalClick} role='button' tabIndex={0}>
          <FaUserAlt className={styles.main_userProfile} />
        </div>
        <span className={styles.user_name}> 유저 닉네임</span>
        {isModalView && (
          <ul className={styles.nav_modal}>
            <div className={styles.modal_circle}>
              <FaUserAlt />
            </div>
            <li
              onClick={() => {
                navigate('/myaccount');
              }}
              role='presentation'
            >
              계정관리
            </li>
            <li>내활동</li>
            <li>구독함</li>
            <li className={styles.modal_logout}>로그아웃</li>
            <div className={styles.modal_cancel} onClick={modalClick} role='button' tabIndex={-1}>
              X
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
