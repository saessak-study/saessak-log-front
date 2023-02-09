import React from 'react';
import '../style/register.scss';

const CreateAccount = () => {
  return (
    <div>
      <div className="reg_container">
        <div className="reg_title">CREATE ACCOUNT</div>
        <div className="reg_inputID">
          <input type="text" className="inputBox_id" placeholder="ID" />
          <div className="verify_id">중복검사</div>
        </div>
        <div className="error_id">
          4~12자의 영문 대소문자와 숫자로만 입력해주세요
        </div>
        <div className="reg_inputComponent">
          <input
            type="password"
            className="register_input"
            placeholder="Password"
          />
          <div className="reg_errorMSG">
            8~16자의 소문자, 숫자, 특수문자를 사용하세요
          </div>
        </div>
        <div className="reg_inputComponent">
          <input
            type="password"
            className="register_input"
            placeholder="Password Confirmation"
          />
          <div className="reg_errorMSG">비밀번호가 일치하지 않습니다</div>
        </div>
        <div className="reg_inputComponent">
          <input type="text" className="register_input" placeholder="Name" />
          <div className="reg_errorMSG">올바른 정보를 입력해주세요</div>
        </div>
        <div className="reg_inputComponent">
          <input type="text" className="register_input" placeholder="Email" />
          <div className="reg_errorMSG">이메일 형식이 맞지 않습니다</div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
