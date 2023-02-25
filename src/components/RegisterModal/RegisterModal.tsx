import React, { useState, useEffect } from 'react';
import Modal from '../Modal/ModalWide/ModalWide';
import styles from './registerModal.module.scss';
// eslint-disable-next-line import/no-cycle
import RegisterInput from './RegisterInput';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  EMAIL_VALID_CHECK,
  PW_CONFIRMATION_CHECK,
  NAME_VALID_CHECK,
  PW_VALID_CHECK,
  ID_VALID_CHECK,
} from '../../constants/message';
import { regEmail, regPassword, regId, regName } from '../../constants/regEx';

interface Props {
  onClickToggleModal: () => void;
}

// eslint-disable-next-line react/prop-types
const RegisterModal = ({ onClickToggleModal }: Props) => {
  // register
  const [inputs, setInputs] = useState({
    userId: '',
    userPw: '',
    userPwChk: '',
    userEmail: '',
    userName: '',
  });

  const { userId, userPw, userPwChk, userEmail, userName } = inputs;
  const navigate = useNavigate();

  const [idMSG, setIdMSG] = useState(true);
  const [pwMSG, setPwMSG] = useState(true);
  const [pwValidMSG, setPwValidMSG] = useState(true);
  const [nameMSG, setNameMSG] = useState(true);
  const [emailMSG, setEmailMSG] = useState(true);

  const onChangeInputs = (e: { target: { value: any; name: any } }) => {
    const { value, name } = e.target;
    setIdMSG(true);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  /**
   * &아이디 중복검사 체크하는 함수
   * TODO 중복검사 클릭 시 API 요청확인
   * */
  const onCheckId = () => {
    if (userId) {
      if (regId.test(userId)) {
        setIdMSG(false);
        onCheckIdContinue(); //아이디 중복체크 api
      } else {
        setIdMSG(true);
        alert('아이디 정보를 확인하세요');
      }
    }
  };

  // 아이디 중복 체크 api
  const onCheckIdContinue = async () => {
    await axios
      .post('/id-duplicate-check', { id: userId })
      .then((response) => {
        console.log(response);
        alert('사용 가능한 아이디입니다.');
        setIdMSG(false);
      })
      .catch((error) => {
        console.log(error);
        console.log('Error: ', error.response.data.responseMessage);
        alert(error.response.data.responseMessage);
        setIdMSG(true);
      });
  };

  /**
   * &마지막으로 점검하는 함수
   * TODO 마지막 '회원가입이 완료되었습니다' 부분 API확인!!!
   * */
  const onLastCheck = () => {
    if (idMSG === true) {
      alert('아이디 중복확인을 클릭해주세요');
    } else if (pwMSG === true) {
      alert('비밀번호를 입력해 주세요');
    } else if (pwValidMSG === true) {
      alert('비밀번호가 일치하지 않습니다');
    } else if (nameMSG === true) {
      alert('이름에 공란이 있습니다.');
    } else if (emailMSG === true) {
      alert('이메일 형식이 올바르지 않습니다.');
    } else {
      onRegisterHandler(); //회원가입 완료 api
    }
  };

  //회원가입 완료 api
  const onRegisterHandler = async () => {
    let body = {
      id: userId,
      mail: userEmail,
      name: userName,
      pw: userPw,
    };
    await axios
      .put('/sign-up', body)
      .then((response) => {
        console.log(response);
        alert('회원 가입이 완료되었습니다!');
        // mutate();
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        console.log('Error: ', error.response.data.responseMessage);
        alert(error.response.data.responseMessage);
      });
  };

  /**
   * & input의 유효성검사에 따른 메세지 상태변경
   */
  useEffect(() => {
    if (userPw && regPassword.test(userPw)) {
      setPwMSG(false);
    } else if (!regPassword.test(userPw)) {
      setPwMSG(true);
    }
    if (userPw && userPwChk && userPw === userPwChk) {
      setPwValidMSG(false);
    } else if (!userPwChk || userPw !== userPwChk || !regPassword.test(userPwChk)) {
      setPwValidMSG(true);
    }
    if (userName && regName.test(userName)) {
      setNameMSG(false);
    } else if (!regName.test(userName)) {
      setNameMSG(true);
    }
    if (userEmail && regEmail.test(userEmail)) {
      setEmailMSG(false);
    } else if (!regEmail.test(userEmail)) {
      setEmailMSG(true);
    }
  }, [userPw, userPwChk, userName, userEmail]);

  return (
    <div>
      <Modal onClickToggleModal={onClickToggleModal} title='회원가입'>
        <div className={styles.reg_container}>
          <div className={styles.reg_title}>CREATE ACCOUNT</div>
          <div className={styles.reg_inputID}>
            <input
              name='userId'
              type='text'
              className={styles.inputBox_id}
              placeholder='ID'
              onChange={onChangeInputs}
              value={userId}
            />
            <button type='button' className={styles.verify_id} onClick={onCheckId}>
              중복검사
            </button>
          </div>

          <div className={styles.reg_errorID}>
            <div className={styles.reg_errorMSG} id='id_ValidMSG'>
              {idMSG && ID_VALID_CHECK}
            </div>
          </div>

          <RegisterInput
            name='userPw'
            message={PW_VALID_CHECK}
            inputType='password'
            placeholder='Password'
            onChange={onChangeInputs}
            value={userPw}
            showUpMSG={pwMSG}
          />

          <RegisterInput
            name='userPwChk'
            message={PW_CONFIRMATION_CHECK}
            inputType='password'
            placeholder='Password Confirmation'
            onChange={onChangeInputs}
            value={userPwChk}
            showUpMSG={pwValidMSG}
          />
          <RegisterInput
            name='userName'
            message={NAME_VALID_CHECK}
            inputType='text'
            onChange={onChangeInputs}
            placeholder='Name'
            value={userName}
            showUpMSG={nameMSG}
          />
          <RegisterInput
            name='userEmail'
            message={EMAIL_VALID_CHECK}
            inputType='text'
            placeholder='Email'
            onChange={onChangeInputs}
            value={userEmail}
            showUpMSG={emailMSG}
          />

          <div className={styles.reg_buttonBox}>
            <button type='button' className={styles.reg_normal} onClick={onLastCheck}>
              회원가입
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RegisterModal;
