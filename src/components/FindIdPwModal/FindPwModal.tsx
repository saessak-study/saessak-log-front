/* eslint-disable prefer-template */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import Modal from '../Modal/ModalNoHeader/ModalNoHeader';
import styles from './findIdPwModal.module.scss';
import { NAME_VALID_CHECK } from '../../constants/message';
import { regName, regId, regEmail } from '../../constants/regEx';
import axios from 'axios';

interface Props {
  onClickToggleModal: () => void;
}

const FindPwModal = ({ onClickToggleModal }: Props) => {
  const [inputs, setInputs] = useState({
    userName: '',
    userId: '',
    userEmail: '',
  });
  const { userName, userId, userEmail } = inputs;
  const [nameValid, setNameValid] = useState(false);
  const [idValid, setIdValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [isAlert, setIsAlert] = useState(false);

  // input 추가
  const onChangeInputs = (e: { target: { value: any; name: any } }) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  /**
   * & input의 유효성검사에 따른 메세지 상태변경
   */
  useEffect(() => {
    if (regName.test(userName) && userName) setNameValid(true);
    if (regId.test(userId) && userId) setIdValid(true);
    if (regEmail.test(userEmail) && userEmail) setEmailValid(true);
    if (!regName.test(userName) || !userName) setNameValid(false);
    if (!regId.test(userId) || !userId) setIdValid(false);
    if (!regEmail.test(userEmail) || !userEmail) setEmailValid(false);
  }, [userId, userName, userEmail]);

  const FindPwBtnAction = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!nameValid) {
      setIsAlert(true);
    } else if (!idValid) {
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
      profileId: userId,
      email: userEmail,
    };
    e.preventDefault();
    if (nameValid && emailValid && idValid) {
      axios
        .post('http://52.78.251.23:8080/user/resetPassword', body)
        .then((response) => {
          alert(`'${userName}'님의 비밀번호가 '${response.data.resetPassword}'로 변경되었습니다.`);
        })
        .catch((error) => {
          console.log(error);
          console.log('Error: ', error.message);
          // alert(error.response.data.responseMessage);
          alert('일치하는 정보가 없습니다. 입력한 내용을 다시 확인해주세요.');
        });
    }
  };

  return (
    <div>
      <Modal onClickToggleModal={onClickToggleModal} title='비밀번호찾기'>
        <div className={styles.findIdPw_container}>
          <div className={styles.findIdPw_title}>비밀번호 찾기</div>
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
              name='userId'
              value={userId}
              type='text'
              className={styles.findIdPw_input}
              placeholder='ID'
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
                {isAlert && (!nameValid || !emailValid || !idValid) ? NAME_VALID_CHECK : null}
                {!isAlert && nameValid && emailValid ? '' : null}
              </span>
            </div>
          </div>
          <div className={styles.findIdPw_buttonBox}>
            <button type='button' className={styles.findIdPw_greenButton} onClick={FindPwBtnAction}>
              비밀번호 찾기
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FindPwModal;
