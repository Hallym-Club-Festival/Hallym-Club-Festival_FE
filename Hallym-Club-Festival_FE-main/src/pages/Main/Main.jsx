import React from "react";

import "./Main.css";
import Background from "../../components/Background/Background";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();

  const handleClickmap = () => {
    navigate("/Map");
  };
  const handleClicklost = () => {
    navigate("/lost");
  };
  const handleClicktreasure = () => {
    navigate("/treasure");
  };
  const handleClickinfo = () => {
    navigate("/Info");
  };
  return (
    <div className="mainImg">
      <Background />
      <div className="categoryMom">
        <div className="category">공지사항</div>
        <div className="category">지도</div>
        <div className="category">보물 찾기</div>
        <div className="category">분실물</div>
      </div>
    </div>
  );
};

export default Main;
