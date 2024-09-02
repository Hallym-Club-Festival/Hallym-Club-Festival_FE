import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Info.css";
import Background2 from "../../components/Background/Background2";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

const Info = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/announcements"
        );
        setAnnouncements(response.data);
      } catch (error) {
        console.error("공지사항 불러오기 오류:", error);
      }
    };
    fetchAnnouncements();
  }, []);

  const handleClickmain = () => {
    navigate("/main");
  };

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredAnnouncements = announcements.filter(
    (a) => a.title.includes(search) || a.content.includes(search)
  );

  return (
    <div className="infoMain">
      <Background2 />
      <div className="search">
        <div className="infoTitle">
          공지사항{" "}
          <IoIosArrowBack onClick={handleClickmain} className="icon2" />
        </div>
        <div className="input-container">
          <input
            type="text"
            className="search2"
            value={search}
            onChange={onChange}
            placeholder="검색어를 입력하세요"
          />
          <FaSearch className="icon" />
        </div>

        <div className="AccordianMenu">
          {filteredAnnouncements.map((announcement, index) => (
            <div className="accordion-item" key={announcement.id}>
              <div
                className="accordion-title"
                onClick={() => handleToggle(index)}
              >
                {announcement.title}
                <span
                  className={`arrow ${activeIndex === index ? "up" : "down"}`}
                >
                  ▲
                </span>
              </div>
              <div
                className={`accordion-content ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                {announcement.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
