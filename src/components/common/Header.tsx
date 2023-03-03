import styles from './header.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import searchSlice from '../../reducers/search';
import { searchType } from '../../types/search';
import LoginModal from '../LoginModal/LoginModal';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { loadMyInfo } from '../../actions/user';

const Header = () => {
  // !상태관리
  const [isModalView, setIsModalView] = useState(false);
  const [isLoginView, setIsLoginView] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const dispatch = useDispatch();
  const typedWord = useSelector((state: searchType) => {
    return state.search.value;
  });

  // !함수
  const modalClick = () => {
    setIsModalView((prevState) => !prevState);
  };
  // 검색 관련 함수
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

  // 내 활동 화면으로 이동
  const routeToMyaccount = () => {
    navigate('/myaccount');
  };
  // 메인 화면으로 이동
  const routeToMain = () => {
    navigate('/');
  };
  // 로그인 토글 온오프
  const onClickToggleModal = () => {
    setIsLoginView((prevState) => !prevState);
  };

  // 로그아웃시 세션 로컬 스토리지 모두 비우고 홈페이지로 보냄
  const logout = () => {
    sessionStorage.clear();
    localStorage.clear();
    alert('로그아웃 되었습니다');
    navigate('/');
    window.location.reload();
  };

  // 로그인 된 상태라면 nav_userInfo 클릭 시 리스트를 띄워줌
  // 로그오프된 상태라면 nav_userInfo 클릭 시 로그인 팝업을 띄워줌
  const loginNavToggle = () => {
    const sessionLength = sessionStorage.length;
    const localLength = localStorage.length;
    if (sessionLength || localLength) {
      setIsModalView((prevState) => !prevState);
    } else {
      setIsLoginView((prevState) => !prevState);
    }
  };

  // 유저 아이디 가지고 오는 함수
  const { myInfo } = useAppSelector((state) => state.user);
  const appDispatch = useAppDispatch();
  // const userName = myInfo.name || '이름';
  useEffect(() => {
    appDispatch(loadMyInfo());
  }, [appDispatch]);

  return (
    <div className={styles.top_nav}>
      {isLoginView && <LoginModal onClickToggleModal={onClickToggleModal} />}
      <div className={styles.nav_logo} onClick={routeToMain} role='button' tabIndex={0}>
        <img src='img/temp.png' alt='logo' />
        <img src='img/logo_title.png' alt='title' />
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
        <div className={styles.user_circle} onClick={loginNavToggle} role='button' tabIndex={0}>
          <FaUserAlt className={styles.main_userProfile} />
        </div>
        <span className={styles.user_name}> {myInfo === undefined ? '로그인' : myInfo.name}</span>
        {isModalView && (
          <ul className={styles.nav_modal}>
            <div className={styles.modal_circle}>
              <FaUserAlt />
            </div>
            <li className={styles.modal_menu}>
              <Link to='/myaccount'>계정관리</Link>
            </li>
            <li className={styles.modal_menu}>
              <Link to='/myactivity'>내활동</Link>
            </li>
            <li className={styles.modal_menu}>
              <Link to='/mysubscription'>구독함</Link>
            </li>
            <li className={styles.modal_logout} onClick={logout} role='presentation'>로그아웃</li>

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
