import React from "react";
import "./Login.css";
import Id from "../../assets/images/Id.png";
import Pw from "../../assets/images/Pw.png";
import FormLogo from "../../assets/images/FormLogo.png"; // 폼 내 로고 이미지
import Background from "../../components/Background/Background";
const Login = () => {
  return (
    <div>
      <Background />
      <div className="Login-container">
        <form className="Login_form">
          <img className="Form-logo" src={FormLogo} alt="폼 로고 이미지" />{" "}
          {/* 폼 로고 */}
          <div className="Login_Id">
            <img className="Id" src={Id} alt="아이디 이미지" />
            <input type="text" id="id" placeholder="아이디를 입력해주세요" />
          </div>
          <div className="Login_Pw">
            <img className="Pw" src={Pw} alt="패스워드 이미지" />
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력해주세요"
            />
          </div>
          <input className="form_button" type="submit" value="로그인" />
        </form>
        <p className="contact-info">문의 : 010-9249-6760</p> {/* 문의 정보 */}
      </div>
    </div>
  );
};

export default Login;
