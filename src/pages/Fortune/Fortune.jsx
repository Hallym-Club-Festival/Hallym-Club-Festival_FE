import React, { useState } from "react";
import "../Fortune/Fortune.css";

import Background2 from "../../components/Background/Background2";
import Hello from "../../assets/images/Hello.png";
import Nemo from "../../assets/images/Nemo.png";
import { Navigate, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import treasure from "../../assets/images/treasure.png";

const Fotune = () => {
  const Spacer = () => {
    return <div style={{ height: "20%", width: "60px" }} />;
  };

  const Navigate = useNavigate();

  const handleClickmain = () => {
    Navigate("/main");
  };
  // f_box6 배경색 상태 관리
  const [isGray, setIsGray] = useState(false);

  // 배경색 변경 함수
  const handleDelete = () => {
    setIsGray(true);
  };
  return (
    <div className="Fortune-main">
      <Background2 />
      <div className="fortuneTitle">
        보물찾기{" "}
        <IoIosArrowBack onClick={handleClickmain} className="mapIcon" />
      </div>
      <div className="treasure-container">
        {" "}
        <img className="treasuer-img" src={treasure} alt="" />
        <img className="treasuer-img" src={treasure} alt="" />
        <img className="treasuer-img" src={treasure} alt="" />
        <img className="treasuer-img" src={treasure} alt="" />
        <img className="treasuer-img" src={treasure} alt="" />
        <img className="treasuer-img" src={treasure} alt="" />
      </div>
      <div className="fotune_wrapper">
        <div className="f_box">
          <img className="f_img" src={Hello} alt="헬로 베이크샵 이미지" />
          헬로 베이크샵(크랙소금빵 + 아메리카노)
        </div>
        <div className="f_box2">
          <img className="f_img" src={Hello} alt="헬로 베이크샵 이미지" />
          네모 커피(스콘 + 음료 쿠폰)
        </div>
        <div className="f_box3">
          <img className="f_img" src={Hello} alt="헬로 베이크샵 이미지" />
          네모 커피(스콘 + 음료 쿠폰)
        </div>
        <div className="f_box4">
          <img className="f_img" src={Hello} alt="헬로 베이크샵 이미지" />
          네모 커피(스콘 + 음료 쿠폰)
        </div>
        <div className="f_box5">
          <img className="f_img" src={Hello} alt="헬로 베이크샵 이미지" />
          네모 커피(스콘 + 음료 쿠폰)
        </div>
        <div
          className="f_box6"
          style={{ backgroundColor: isGray ? "gray" : "purple" }}
        >
          <img className="f_img" src={Nemo} alt="헬로 베이크샵 이미지" />
          네모 커피(스콘 + 음료 쿠폰)
        </div>
      </div>
    </div>
  );
};

export default Fotune;
