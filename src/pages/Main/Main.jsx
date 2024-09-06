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
        <div className="main-img-container1">
          <img
            onClick={handleClickinfo}
            className="main-category-img"
            src={Mainimg1}
            alt=""
          />
          <img
            onClick={handleClickmap}
            className="main-category-img"
            src={Mainimg2}
            alt=""
          />
        </div>
        <div className="main-img-container2">
          <img
            onClick={handleClicktreasure}
            className="main-category-img"
            src={Mainimg3}
            alt=""
          />
          <img
            onClick={handleClicklost}
            className="main-category-img"
            src={Mainimg4}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
