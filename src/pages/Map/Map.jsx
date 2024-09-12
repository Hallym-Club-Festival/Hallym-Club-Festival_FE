import React, { useState } from "react";
import Background2 from "../../components/Background/Background2";
import mapsvg from "../../assets/images/Map.jpg";
import "../Map/Map.css";
import { IoIosArrowBack } from "react-icons/io";
import CatalogItem from "./Catalog";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Map = () => {
  const [activeTab, setActiveTab] = useState("day1");
  const [search, setSearch] = useState(""); // 검색어 상태

  const handleTabClick = (day) => {
    setActiveTab(day);
  };

  const Navigate = useNavigate();

  const handleClickmain = () => {
    Navigate("/main");
  };

  // 입력값이 변경될 때마다 검색어를 업데이트
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // 필터링 함수
  const filterCatalogData = (data) => {
    return data.filter((item) =>
      item.text.toLowerCase().includes(search.toLowerCase())
    );
  };

  // 카탈로그 데이터
  const catalogData1 = [
    { number: 1, text: "어셈블" },
    { number: 2, text: "레이서스" },
    { number: 3, text: "두레박" },
    { number: 4, text: "하얀도화지" },
    { number: 5, text: "한림극회" },
    { number: 6, text: "RCY" },
    { number: 7, text: "데구르르" },
    { number: 8, text: "아이덴티티" },
    { number: 9, text: "피닉스" },
    { number: 10, text: "JDM" },
    { number: 11, text: "공굴리기" },
    { number: 12, text: "수레바퀴" },
    { number: 13, text: "시리우스" },
  ];

  const catalogData2 = [
    { number: 1, text: "CODA" },
    { number: 2, text: "한림FC" },
    { number: 3, text: "홀로그램" },
    { number: 4, text: "X-TRIC" },
    { number: 5, text: "기브" },
    { number: 6, text: "천지" },
    { number: 7, text: "로타랙트" },
    { number: 8, text: "X-RAY" },
    { number: 9, text: "IVF" },
    { number: 10, text: "푸메토" },
    { number: 11, text: "매치포인트" },
    { number: 12, text: "가톨릭학생회" },
    { number: 13, text: "FIMP" },
  ];

  const catalogData3 = [
    { number: 1, text: "춤바람" },
    { number: 2, text: "해강박" },
    { number: 3, text: "FVI" },
    { number: 4, text: "영상틀" },
    { number: 5, text: "먹메" },
    { number: 6, text: "카오스" },
    { number: 7, text: "스네이크" },
    { number: 8, text: "CCC" },
    { number: 9, text: "힙합PD" },
    { number: 10, text: "스카이" },
    { number: 11, text: "HDIY" },
    { number: 12, text: "룩스" },
    { number: 13, text: "한울회" },
    { number: 14, text: "봉현회" },
  ];

  // 현재 활성 탭에 따른 데이터 반환
  const getCatalogData = () => {
    switch (activeTab) {
      case "day1":
        return filterCatalogData(catalogData1);
      case "day2":
        return filterCatalogData(catalogData2);
      case "day3":
        return filterCatalogData(catalogData3);
      default:
        return [];
    }
  };

  return (
    <div className="mapMain">
      <Background2 />

      <div className="mapTitle">
        <div className="mapTitleson1">지도</div>{" "}
        <div className="mapTitleson2">
          <IoIosArrowBack onClick={handleClickmain} className="mapIcon" />
        </div>
      </div>
      <div className="mapImg-container">
        <img className="mapImg" src={mapsvg} alt="" />
      </div>
      <div className="mapInput-container">
        <input
          type="text"
          className="mapSearch"
          placeholder="검색어를 입력하세요"
          value={search} // 검색어 상태를 사용
          onChange={handleChange} // 입력값 변경 시 호출
        />
        <FaSearch className="mapSearchicon" />
      </div>
      <div className="Tag-container">
        <div
          className={`Tag ${activeTab === "day1" ? "active" : ""}`}
          onClick={() => handleTabClick("day1")}
        >
          1일차
        </div>
        <div
          className={`Tag ${activeTab === "day2" ? "active" : ""}`}
          onClick={() => handleTabClick("day2")}
        >
          2일차
        </div>
        <div
          className={`Tag ${activeTab === "day3" ? "active" : ""}`}
          onClick={() => handleTabClick("day3")}
        >
          3일차
        </div>
      </div>
      <div className="catalog-container">
        {getCatalogData().map((item) => (
          <CatalogItem
            key={item.number}
            number={item.number}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Map;
