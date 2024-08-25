import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Background from "../../components/Background/Background";
const Home = () => {
  const navigate = useNavigate();

  const handleTouch = () => {
    navigate("/main");
  };
  return (
    <div className="mainImg" onClick={handleTouch}>
      <Background />
      <div className="text">
        <p>화면을 터치해주세요.</p>
      </div>
    </div>
  );
};

export default Home;
