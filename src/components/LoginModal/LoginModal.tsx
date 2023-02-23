import { useState } from 'react';
import Modal from '../Modal/ModalWide/ModalWide';
import styles from './loginModal.module.scss';
// eslint-disable-next-line import/no-cycle
import RegisterModal from '../RegisterModal/RegisterModal';
// eslint-disable-next-line import/no-cycle
import FindPwModal from '../FindIdPwModal/FindPwModal';
// eslint-disable-next-line import/no-cycle
import FindIdModal from '../FindIdPwModal/FindIdModal';
import { INFO_INVALID } from '../../constants/message';

// alert_message 띄우기까지 완료(from 다정)

interface Props {
  onClickToggleModal: () => void;
}

const LoginModal: React.FC<Props> = ({ onClickToggleModal }) => {
  // show modal
  const [showFindIdModal, setShowFindIdModal] = useState<boolean>(false);
  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);
  const [showFindPwModal, setShowFindPwModal] = useState<boolean>(false);

  const onClickFindIdModal = () => {
    setShowFindIdModal((prev) => !prev);
  };
  const onClickRegisterModal = () => {
    setShowRegisterModal((prev) => !prev);
  };
  const onClickFindPwModal = () => {
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

  // input 추가
  const onChangeInputs = (e: { target: { value: any; name: any } }) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // id or pw error -> alert
  const loginBtnAction = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!idValid) {
      setIsAlert(true);
    } else if (!pwValid) {
      setIsAlert(true);
    } else {
      setIsAlert(false);
      // handleSubmit(e);
    }
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
                {isAlert && !idValid && !pwValid && INFO_INVALID}
                {isAlert && idValid && !pwValid && INFO_INVALID}
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
            <div className={styles.login_kakao}>카카오 로그인</div>
          </div>
          <label className={styles.autologin_radiobutton}>
            <input type='checkbox' value='autologin' /> 자동 로그인
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
