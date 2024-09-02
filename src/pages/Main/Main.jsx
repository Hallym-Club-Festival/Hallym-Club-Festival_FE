import React from "react";

import "./Main.css";
import Background from "../../components/Background/Background";
import { useNavigate } from "react-router-dom";
import Mainimg1 from "../../assets/images/Group 20.png";
import Mainimg2 from "../../assets/images/Group 21.png";
import Mainimg3 from "../../assets/images/Group 22.png";
import Mainimg4 from "../../assets/images/Group 23.png";
const Main = () => {
  const navigate = useNavigate();

  const handleClickmap = () => {
    navigate("/map");
  };
  const handleClicklost = () => {
    navigate("/lost");
  };
  const handleClicktreasure = () => {
    navigate("/fortune");
  };
  const handleClickinfo = () => {
    navigate("/info");
  };
  return (
    <div className="mainImg">
      <Background />
      <div className="categoryMom">
        <img onClick={handleClickinfo} className="img" src={Mainimg1} alt="" />
        <img onClick={handleClickmap} className="img" src={Mainimg2} alt="" />
        <img
          onClick={handleClicktreasure}
          className="img"
          src={Mainimg3}
          alt=""
        />
        <img onClick={handleClicklost} className="img" src={Mainimg4} alt="" />
      </div>
    </div>
  );
};

export default Main;
