import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Fortune/Fortune.css";
import Background2 from "../../components/Background/Background2";
import Hello from "../../assets/images/Hello.png";
import Nemo from "../../assets/images/Nemo.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const AdminPage = () => {
  const [boxes, setBoxes] = useState([
    {
      id: 1,
      text: "헬로 베이크샵(크랙소금빵 + 아메리카노)",
      image: Hello,
      isGray: false,
    },
    { id: 2, text: "네모 커피(스콘 + 음료 쿠폰)", image: Nemo, isGray: false },
    { id: 3, text: "네모 커피(스콘 + 음료 쿠폰)", image: Nemo, isGray: false },
    { id: 4, text: "네모 커피(스콘 + 음료 쿠폰)", image: Nemo, isGray: false },
    { id: 5, text: "네모 커피(스콘 + 음료 쿠폰)", image: Nemo, isGray: false },
    { id: 6, text: "네모 커피(스콘 + 음료 쿠폰)", image: Nemo, isGray: false },
  ]);

  const navigate = useNavigate();

  const fetchBoxes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/boxes");
      setBoxes(response.data);
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
    }
  };

  useEffect(() => {
    fetchBoxes(); // Fetch initial data when component mounts
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.post("http://localhost:5000/api/updateBox", { id });

      // Update localStorage
      localStorage.setItem(`box-${id}-isGray`, "true");

      // Force update of boxes state
      setBoxes((prevBoxes) =>
        prevBoxes.map((box) => (box.id === id ? { ...box, isGray: true } : box))
      );
    } catch (error) {
      console.error("삭제 요청 중 오류 발생:", error);
    }
  };

  const handleResetColor = (id) => {
    // Reset localStorage
    localStorage.setItem(`box-${id}-isGray`, "false");

    // Force update of boxes state
    setBoxes((prevBoxes) =>
      prevBoxes.map((box) => (box.id === id ? { ...box, isGray: false } : box))
    );
  };

  return (
    <div className="Fortune-main">
      <Background2 />
      <div className="fortuneTitle">
        보물찾기{" "}
        <IoIosArrowBack onClick={() => navigate("/main")} className="mapIcon" />
      </div>
      <div className="fotune_wrapper">
        {boxes.map((box) => (
          <div
            key={box.id}
            className={`f_box${box.id}`}
            style={{
              backgroundColor:
                localStorage.getItem(`box-${box.id}-isGray`) === "true"
                  ? "gray"
                  : "purple",
            }}
          >
            <img className="f_img" src={box.image} alt="헬로 베이크샵 이미지" />
            {box.text}
            <button
              className={`delete${box.id}`}
              onClick={() => handleDelete(box.id)}
            >
              삭제
            </button>
            <button
              className={`resetColor${box.id}`}
              onClick={() => handleResetColor(box.id)}
            >
              색상 복원
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
