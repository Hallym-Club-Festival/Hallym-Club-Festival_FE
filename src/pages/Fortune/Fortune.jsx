import React, { useState, useEffect } from "react";
import "../Fortune/Fortune.css";

import Background2 from "../../components/Background/Background2";
import Hello from "../../assets/images/Hello.png";
import Nemo from "../../assets/images/Nemo.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Fortune1 from "../../assets/images/Fortune1.png";
import Fortune2 from "../../assets/images/Fortune2.png";
import Fortune3 from "../../assets/images/Fortune3.png";
import Fortune4 from "../../assets/images/Fortune4.png";
import Fortune5 from "../../assets/images/Fortune5.png";
import Fortune6 from "../../assets/images/Fortune6.png";
import for1 from "../../assets/images/for1.png";
import for2 from "../../assets/images/for2.png";
import for3 from "../../assets/images/for3.png";

const Fotune = () => {
  const [boxes, setBoxes] = useState([
    {
      id: 1,
      text: "헬로 베이크샵(크랙소금빵 + 아메리카노)",
      image: Hello,
      backgroundColor: "rgba(255, 192, 203, 0.7)", // pink with 70% opacity
    },
    {
      id: 2,
      text: "그래요거(요거트 아이스크림 콘, 요일메뉴 쿠폰)",
      image: for1,
      backgroundColor: "rgba(255, 165, 0, 0.7)", // orange with 70% opacity
    },
    {
      id: 3,
      text: "에스플러스 카페(에이드 쿠폰)",
      image: for2,
      backgroundColor: "rgba(255, 255, 0, 0.7)", // yellow with 70% opacity
    },
    {
      id: 4,
      text: "미성카츠(미성카츠 식사권)",
      image: for3,
      backgroundColor: "rgba(0, 128, 0, 0.7)", // green with 70% opacity
    },
    {
      id: 5,
      text: "썬쿠키(미니쿠키2개 + 휘낭시에)",
      image: Nemo,
      backgroundColor: "rgba(135, 206, 235, 0.7)", // skyblue with 70% opacity
    },
    {
      id: 6,
      text: "헬로베이크샵(크랙소금빵 + 아메리카노)",
      image: Nemo,
      backgroundColor: "rgba(128, 0, 128, 0.7)", // purple with 70% opacity
    },
  ]);

  useEffect(() => {
    // Check localStorage and update box states
    setBoxes((prevBoxes) =>
      prevBoxes.map((box) => ({
        ...box,
        backgroundColor:
          localStorage.getItem(`box-${box.id}-isGray`) === "true"
            ? "gray"
            : box.backgroundColor,
      }))
    );
  }, []);

  const navigate = useNavigate();

  const handleClickmain = () => {
    navigate("/main");
  };

  return (
    <div className="Fortune-main">
      <Background2 />
      <div className="fortuneTitle">
        보물찾기{" "}
        <IoIosArrowBack onClick={handleClickmain} className="mapIcon" />
      </div>
      <div className="treasure-container">
        <img className="treasuer-img" src={Fortune1} alt="" />
        <img className="treasuer-img" src={Fortune2} alt="" />
        <img className="treasuer-img" src={Fortune3} alt="" />
        <img className="treasuer-img" src={Fortune4} alt="" />
        <img className="treasuer-img" src={Fortune5} alt="" />
        <img className="treasuer-img" src={Fortune6} alt="" />
      </div>
      <div className="fotune_wrapper">
        {boxes.map((box) => (
          <div
            key={box.id}
            className={`f_box${box.id}`}
            style={{ backgroundColor: box.backgroundColor }}
          >
            <img className="f_img" src={box.image} alt="헬로 베이크샵 이미지" />
            {box.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fotune;
