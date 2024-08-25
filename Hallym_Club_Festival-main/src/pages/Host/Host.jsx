import React from "react";
import "./Host.css";
import Treasure from "../../assets/images/treasure.png";
import Lost from "../../assets/images/Lost.png";
import Info from "../../assets/images/Info.png";
import Background from "../../components/Background/Background";
import Arrow from "../../assets/images/Arrow.png";
const Host = () => {
  return (
    <>
      <Background />
      <div className="Host_containor">
        <div className="Host_header">
          <h1>관리자 모드</h1>
          <p>한림대학교 동아리 페스티벌 관리자 페이지입니다.</p>
          <p>아래의 리스트를 통해 게시물 관리를 해보세요.</p>
        </div>

        <div className="Host_menu">
          <div className="treasure">
            <div className="left">
              <img
                className="treasure_img"
                src={Treasure}
                alt="보물찾기 이미지"
              />
              보물찾기
            </div>
            <div className="right">
              <span>{0}</span>
              <span>/</span>
              <span className="Host_right">
                {8}
                <img className="Arrow" src={Arrow} alt="오른쪽 꺽쇄" />
              </span>
            </div>
          </div>
          <div className="lost">
            <div className="left">
              <img className="Lost_img" src={Lost} alt="분실물 이미지" />
              분실물
            </div>
            <div className="right">
              <span className="Host_right">
                10 <img className="Arrow" src={Arrow} alt="오른쪽 꺽쇄" />
              </span>
            </div>
          </div>
          <div className="Info">
            <div className="left">
              <img className="Info_img" src={Info} alt="안내 이미지" />
              안내
            </div>
            <div className="right">
              <span className="Host_right">
                10 <img className="Arrow" src={Arrow} alt="오른쪽 꺽쇄" />
              </span>
            </div>
          </div>
        </div>
        <input className="LogOut_button" type="submit" value="로그아웃" />
      </div>
    </>
  );
};

export default Host;
