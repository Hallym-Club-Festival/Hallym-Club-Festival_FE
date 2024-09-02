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
          "http://localhost:5000/api/lost-items"
        );
        setLostItems(response.data);
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
    (item) => item.title.includes(search) || item.location.includes(search)
  );

  return (
    <div className="lostMain">
      <Background2 />
      <div className="lostTitle">
        분실물 <IoIosArrowBack onClick={handleClickMain} className="lostIcon" />
      </div>
      <div className="lostSearch">
        <input
          type="text"
          className="lostSearch2"
          value={search}
          onChange={onChange}
          placeholder="검색어를 입력하세요"
        />
        <FaSearch className="lostIcon" />
      </div>
      <div className="lostItemsContainer">
        {filteredLostItems.map((item) => (
          <div className="item1" key={item.id}>
            <p className="bigTitle">{item.title}</p>
            <p className="smallTitle">{item.location}</p>
            {item.imagePath && (
              <img
                src={`http://localhost:5000/${item.imagePath}`}
                alt={item.title}
                className="lostImg"
              />
            )}
            $
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lost;
