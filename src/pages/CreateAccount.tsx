import React from 'react';
import '../style/register.scss';
import { VscClose } from 'react-icons/vsc';

const CreateAccount = () => {
  return (
    <div>
      <div className="reg_container">
        <div className="reg_title">CREATE ACCOUNT</div>
        <VscClose className="vsClose" />
        <div className="reg_inputID">
          <input type="text" className="inputBox_id" placeholder="ID" />
          <div className="verify_id">중복검사</div>
        </div>
        <div className="reg_errorID">
          <div className="reg_errorMSG">
            4~12자의 영문 대소문자와 숫자로만 입력해주세요
          </div>
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
        <div className="reg_buttonBox">
          <div className="reg_normal">회원가입</div>
          또는
          <div className="reg_kakao">카카오 회원가입</div>
        </div>
        <div className="route_login">로그인 화면으로 돌아가기</div>
      </div>
    </div>
  );
};

export default CreateAccount;
