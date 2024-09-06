import React, { useState, useEffect } from "react";
import "./Lost.css";
import Background2 from "../../components/Background/Background2";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Lost = () => {
  const [lostItems, setLostItems] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLostItems = async () => {
      try {
        const response = await axios.get(
          "https://api-hallym-club-festival.com/lostItems/"
        );
        console.log(response.data);
        setLostItems(response.data.lostItems);
      } catch (error) {
        console.error("분실물 불러오기 오류:", error);
      }
    };
    fetchLostItems();
  }, []);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClickMain = () => {
    navigate("/main");
  };

  const filteredLostItems = lostItems.filter(
    (item) => item.ItemName.includes(search) || item.FoundIn.includes(search)
  );

  return (
    <div className="lostMain">
      <Background2 />
      <div className="lostTitle">
        <IoIosArrowBack onClick={handleClickMain} className="lostIcon" />
        <p>분실물</p>
        <div style={{ width: "10px" }}></div>
      </div>
      <div className="lostSearch">
        <input
          type="text"
          className="lostSearch2"
          value={search}
          onChange={onChange}
          placeholder="검색어를 입력하세요"
        />
        <FaSearch className="lostIcon2" />
      </div>
      <div className="lostItemsContainer">
        {filteredLostItems && filteredLostItems.length > 0 ? (
          filteredLostItems.map((item) => (
            <div className="item1" key={item.ItemID}>
              {item.Image.ImageURL && (
                <img
                  src={item.Image.ImageURL}
                  alt={item.ItemName}
                  className="lostImg"
                />
              )}
              <div className="titleWrraper">
                <p className="bigTitle">{item.ItemName}</p>
                <p className="smallTitle">{item.FoundIn}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="noneItem">분실물이 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default Lost;
