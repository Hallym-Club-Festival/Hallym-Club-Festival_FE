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
          "https://api-hallym-club-festival.com/notices/" //notices
        );
        setAnnouncements(response.data.notices);
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
    (a) => a.Title.includes(search) || a.Content.includes(search)
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
        {/* <div></div> */}
        <div className="AccordianMenu">
          {filteredAnnouncements.map((announcement, index) => (
            <div className="accordion-item" key={announcement.NoticeID}>
              <div
                className="accordion-title"
                onClick={() => handleToggle(index)}
              >
                {announcement.Title}
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
                {announcement.Content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
