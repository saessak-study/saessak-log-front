import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { changePassword, loadMyInfo } from '../../actions/user';

import Header from '../../components/common/Header';
import PageTitle from '../../components/PageTitle/PageTitle';
import PasswordChangeModal from '../../components/PasswordChangeModal/PasswordChangeModal';
import LoginModal from '../../components/LoginModal/LoginModal';

import { PW_CONFIRMATION_CHECK, PW_VALID_CHECK } from '../../constants/message';
import { regPassword } from '../../constants/regEx';
import { myAccount } from '../../constants/title';

import styles from './myAccount.module.scss';
import { IoMdPerson } from 'react-icons/io';

const MyAccountPage = () => {
  const [isModalView, setIsModalView] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);

  const { myInfo } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadMyInfo());
  }, [dispatch]);

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError(e.target.value !== passwordCheck);
    setPasswordValid(regPassword.test(e.target.value));
  };

  const onChangePasswordCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  };

  const onClickSave = (e: FormEvent) => {
    e.preventDefault();
    dispatch(changePassword({ password, passwordCheck }));
    sessionStorage.removeItem('token');
    setIsModalView(true);
  };

  if (!myInfo) return <LoginModal onClickToggleModal={() => {}} />;

  return (
    <>
      <Header />
      <PageTitle title={myAccount} />
      <div className={styles.account_wrapper}>
        <span className={styles.icon}>
          <IoMdPerson size='90' />
        </span>
        <div className={styles.input_wrapper}>
          <label htmlFor='id'>ID</label>
          <input type='text' id='id' disabled defaultValue={myInfo.profileId} />
        </div>
        <div className={styles.input_wrapper}>
          <label htmlFor='eamil'>Email</label>
          <input type='text' id='email' disabled defaultValue={myInfo.email} />
        </div>
        <div className={styles.input_wrapper}>
          <label htmlFor='name'>이름</label>
          <input type='text' id='name' disabled defaultValue={myInfo.name} />
        </div>
      </div>

      <form action='submit' onSubmit={onClickSave} className={styles.password_form}>
        <div className={styles.changePassword_title}>비밀번호 변경</div>
        <label htmlFor='password' />
        <input
          type='password'
          id='password'
          placeholder='password'
          value={password}
          onChange={onChangePassword}
          required
        />
        <label htmlFor='password-check' />
        <input
          type='password'
          id='password-check'
          placeholder='password check'
          value={passwordCheck}
          onChange={onChangePasswordCheck}
          required
        />
        {passwordError && <div className={styles.message}>{PW_CONFIRMATION_CHECK}</div>}
        {!passwordValid && <div className={styles.message}>{PW_VALID_CHECK}</div>}
        <div className={styles.button_wrapper}>
          <Link to='/' className={styles.cancel_button}>
            <button type='button' className={styles.cancel_button}>
              취소
            </button>
          </Link>
          <button type='submit' className={styles.save_button} disabled={passwordError}>
            저장
          </button>
        </div>
      </form>
      {isModalView && <PasswordChangeModal />}
    </>
  );
};

export default MyAccountPage;
