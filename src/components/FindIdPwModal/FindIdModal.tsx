import React, { useEffect, useState } from 'react';
import Modal from '../Modal/ModalNoHeader/ModalNoHeader';
import styles from './findIdPwModal.module.scss';
import { NAME_VALID_CHECK } from '../../constants/message';
import { regName, regEmail } from '../../constants/regEx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Props {
  onClickToggleModal: () => void;
}

// Alert로 아이디 전달까지 완성 (from 다정)

const FindIdModal = ({ onClickToggleModal }: Props) => {
  const [inputs, setInputs] = useState({
    userName: '',
    userEmail: '',
  });
  const { userName, userEmail } = inputs;
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const navigate = useNavigate();

  // input 추가
  const onChangeInputs = (e: { target: { value: any; name: any } }) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  useEffect(() => {
    if (regName.test(userName) && userName) setNameValid(true);
    if (regEmail.test(userEmail) && userEmail) setEmailValid(true);
    if (!regName.test(userName) || !userName) setNameValid(false);
    if (!regEmail.test(userEmail) || !userEmail) setEmailValid(false);
  }, [userName, userEmail]);

  const FindIdBtnAction = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!nameValid) {
      setIsAlert(true);
    } else if (!emailValid) {
      setIsAlert(true);
    } else {
      setIsAlert(false);
      handleSubmit(e);
    }
  };

  const handleSubmit = async (e) => {
    let body = {
      name: userName,
      email: userEmail,
    };
    e.preventDefault();
    if (nameValid && emailValid) {
      axios
        .post('http://52.78.251.23:8080/user/findId', body)
        .then((response) => {
          alert(response.data.responseMessage.profileId);
          navigate('/');
        })
        .catch((error) => {
          console.log(error);
          console.log('Error: ', error.message);
          alert(error.response.data.responseMessage);
        });
    }
  };

  return (
    <div>
      <Modal onClickToggleModal={onClickToggleModal} title='아이디찾기'>
        <div className={styles.findIdPw_container}>
          <div className={styles.findIdPw_title}>아이디 찾기</div>
          <div className={styles.findIdPw_inputComponent}>
            <input
              name='userName'
              value={userName}
              type='text'
              className={styles.findIdPw_input}
              placeholder='Name'
              onChange={onChangeInputs}
            />
          </div>
          <div className={styles.findIdPw_inputComponent}>
            <input
              name='userEmail'
              value={userEmail}
              type='text'
              className={styles.findIdPw_input}
              placeholder='Email'
              onChange={onChangeInputs}
            />
            <div className={styles.findIdPw_errorMSG}>
              <span>
                {isAlert && !nameValid && !emailValid && NAME_VALID_CHECK}
                {isAlert && nameValid && !emailValid && NAME_VALID_CHECK}
                {!isAlert && nameValid && emailValid ? '' : null}
              </span>
            </div>
          </div>
          <div className={styles.findIdPw_buttonBox}>
            <button type='button' className={styles.findIdPw_greenButton} onClick={FindIdBtnAction}>
              아이디 찾기
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FindIdModal;
