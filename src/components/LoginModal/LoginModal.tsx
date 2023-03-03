import { useEffect, useState } from 'react';
import Modal from '../Modal/ModalWide/ModalWide';
import styles from './loginModal.module.scss';
// eslint-disable-next-line import/no-cycle
import RegisterModal from '../RegisterModal/RegisterModal';
// eslint-disable-next-line import/no-cycle
import FindPwModal from '../FindIdPwModal/FindPwModal';
// eslint-disable-next-line import/no-cycle
import FindIdModal from '../FindIdPwModal/FindIdModal';
import { INFO_INVALID } from '../../constants/message';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { regPassword, regId } from '../../constants/regEx';

interface Props {
  onClickToggleModal: () => void;
}

const LoginModal = ({ onClickToggleModal }: Props) => {
  // show modal
  const [showFindIdModal, setShowFindIdModal] = useState<boolean>(false);
  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);
  const [showFindPwModal, setShowFindPwModal] = useState<boolean>(false);

  const onClickFindIdModal = () => {
    onReset();
    setShowFindIdModal((prev) => !prev);
  };
  const onClickRegisterModal = () => {
    onReset();
    setShowRegisterModal((prev) => !prev);
  };
  const onClickFindPwModal = () => {
    onReset();
    setShowFindPwModal((prev) => !prev);
  };

  // login
  const [inputs, setInputs] = useState({
    userId: '',
    userPw: '',
  });
  const { userId, userPw } = inputs;
  const [idValid, setIdValid] = useState(false);
  const [pwValid, setpwValid] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  // input 추가
  const onChangeInputs = (e: { target: { value: any; name: any } }) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      userId: '',
      userPw: '',
    });
  };

  useEffect(() => {
    if (regId.test(userId) && userId) setIdValid(true);
    if (regPassword.test(userPw) && userPw) setpwValid(true);
    if (!regId.test(userId) || !userId) setIdValid(false);
    if (!regPassword.test(userPw) || !userPw) setpwValid(false);
  }, [userId, userPw]);

  // id or pw error -> alert
  const loginBtnAction = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!idValid) {
      setIsAlert(true);
    } else if (!pwValid) {
      setIsAlert(true);
    } else {
      setIsAlert(false);
      onReset();
      handleSubmit(e);
    }
  };

  const handleSubmit = async (e) => {
    let body = {
      profileId: userId,
      password: userPw,
    };
    e.preventDefault();
    if (idValid && pwValid) {
      axios
        .post('http://52.78.251.23:8080/user/login', body)
        .then((response) => {
          alert('로그인되었습니다.');
          sessionStorage.setItem('token', response.data.token);
          if (isChecked) {
            localStorage.setItem('token', response.data.token);
          }
          navigate('/');
        })
        .catch((error) => {
          console.log(error);
          console.log('Error: ', error.message);
          // alert(error.response.data.responseMessage);
          alert('일치하는 정보가 없습니다. 입력한 내용을 다시 확인해주세요.');
        });
    }
  };

  const handleChecked = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <Modal onClickToggleModal={onClickToggleModal} title='로그인'>
        <div className={styles.login_container}>
          <div className={styles.login_title}>LOGIN</div>
          <div className={styles.login_describe}>
            더 많은 기능을 사용하시려면 로그인을 해주세요.
          </div>
          <div className={styles.login_inputComponent}>
            <input
              name='userId'
              maxLength={12}
              value={userId}
              type='text'
              className={styles.login_input}
              placeholder='ID'
              onChange={onChangeInputs}
            />
          </div>
          <div className={styles.login_inputComponent}>
            <input
              name='userPw'
              maxLength={16}
              value={userPw}
              type='password'
              className={styles.login_input}
              placeholder='Password'
              onChange={onChangeInputs}
            />
            <div className={styles.login_errorMSG}>
              <span>
                {isAlert && (!idValid || !pwValid) ? INFO_INVALID : null}
                {!isAlert && idValid && pwValid ? '' : null}
              </span>
            </div>
          </div>
          <div className={styles.route_box}>
            <a
              href='#!'
              type='button'
              onClick={onClickFindIdModal}
              className={styles.route_FindUserInfoPage}
            >
              아이디 /
            </a>
            <a
              href='#!'
              type='button'
              onClick={onClickFindPwModal}
              className={styles.route_FindUserInfoPage}
            >
              비밀번호 찾기
            </a>
          </div>
          <div className={styles.login_buttonBox}>
            <button type='button' className={styles.login_normal} onClick={loginBtnAction}>
              로그인
            </button>
          </div>
          <label className={styles.autologin_radiobutton}>
            <input type='checkbox' value='autologin' checked={isChecked} onChange={handleChecked} />{' '}
            자동 로그인
          </label>
          <a
            href='#!'
            type='button'
            className={styles.route_register}
            onClick={onClickRegisterModal}
          >
            아직 회원이 아니신가요? 회원가입하기
          </a>
        </div>
      </Modal>
      {showFindIdModal && <FindIdModal onClickToggleModal={onClickFindIdModal} />}
      {showFindPwModal && <FindPwModal onClickToggleModal={onClickFindPwModal} />}
      {showRegisterModal && <RegisterModal onClickToggleModal={onClickRegisterModal} />}
    </div>
  );
};

export default LoginModal;
