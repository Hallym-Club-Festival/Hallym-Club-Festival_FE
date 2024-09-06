import React, { useState, useEffect } from "react";
import axios from "axios"; // Axios를 임포트
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
import Fortune7 from "../../assets/images/Fortune7.png"; // 추가

import for1 from "../../assets/images/for1.png";
import for2 from "../../assets/images/for2.png";
import for3 from "../../assets/images/for3.png";
import for4 from "../../assets/images/for4.png";

const Fotune = () => {
  const [boxes, setBoxes] = useState([
    {
      id: 1,
      text: "네모커피(스콘,음료 쿠폰)",
      image: Hello,
      backgroundColor: "rgba(255, 192, 203, 0.7)", // #ffaead
    },
    {
      id: 2,
      text: "그래요거(요거트 아이스크림 콘, 요일메뉴 쿠폰)",
      image: for1,
      backgroundColor: "rgba(255, 215, 166, 0.7)", // #ffd7a6
    },
    {
      id: 3,
      text: "에스플러스 카페(에이드 쿠폰)",
      image: for2,
      backgroundColor: "rgba(253, 255, 182, 0.7)", // #fdffb6
    },
    {
      id: 4,
      text: "미성카츠(미성카츠 식사권)",
      image: for3,
      backgroundColor: "rgba(203, 255, 191, 0.7)", // #cbffbf
    },
    {
      id: 5,
      text: "썬쿠키(미니쿠키2개 + 휘낭시에)",
      image: for4,
      backgroundColor: "rgba(158, 197, 255, 0.7)", // #9ec5ff
    },
    {
      id: 6,
      text: "헬로베이크샵(크랙소금빵 + 아메리카노)",
      image: Nemo,
      backgroundColor: "rgba(189, 178, 255, 0.7)", // #bdb2ff
    },
  ]);

  const [treasureImages, setTreasureImages] = useState([
    Fortune1,
    Fortune2,
    Fortune3,
    Fortune4,
    Fortune5,
    Fortune6,
  ]); // 상단 이미지 배열

  const navigate = useNavigate();

  const handleClickmain = () => {
    navigate("/main");
  };

  useEffect(() => {
    // 서버에서 관리자 페이지의 요청을 수신하고 `boxes`와 `treasureImages`의 상태를 업데이트
    axios
      .get("https://api-hallym-club-festival.com:3000/treasures/")
      .then((response) => {
        const { treasures } = response.data;

        // boxes 상태 업데이트
        const updatedBoxes = boxes.map((box) => {
          const matchingTreasure = treasures.find(
            (treasure) => treasure.TreasureID === box.id
          );
          return {
            ...box,
            backgroundColor:
              matchingTreasure && matchingTreasure.TreasureCount === 0
                ? "gray"
                : box.backgroundColor,
          };
        });

        setBoxes(updatedBoxes);

        // treasureImages 상태 업데이트
        const updatedImages = treasureImages.map((image, index) => {
          const matchingTreasure = treasures.find(
            (treasure) => treasure.TreasureID === index + 1 // 배열 인덱스가 1부터 시작하므로 +1
          );
          return matchingTreasure && matchingTreasure.TreasureCount === 0
            ? Fortune7
            : image;
        });

        setTreasureImages(updatedImages); // 상단 이미지 업데이트
      })
      .catch((error) => {
        console.error(
          "박스 상태를 업데이트하는 동안 오류가 발생했습니다:",
          error
        );
      });
  }, [boxes, treasureImages]); // 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <div className="Fortune-main">
      <Background2 />
      <div className="fortuneTitle">
        보물찾기
        <IoIosArrowBack onClick={handleClickmain} className="fortuneIcon" />
      </div>
      <div className="treasure-container">
        {treasureImages.map((image, index) => (
          <img
            key={index}
            className="treasuer-img f_img" // f_img 클래스 추가
            src={image}
            alt={`Fortune ${index + 1} 이미지`}
          />
        ))}
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
