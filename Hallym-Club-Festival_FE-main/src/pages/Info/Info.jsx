import {React, useState} from "react";
import "./Info.css";
import Background2 from "../../components/Background/Background2";
import { FaSearch } from "react-icons/fa";

const Info = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const [search, setSearch] = useState("")
  
  const onChange = (e) => {
    setSearch(e.target.value)
    
  }
  return (
    <div className="infoMain">
      <Background2 />
      <div className="search">
        <input type="text" className="search2" value={search} onChange={onChange} placeholder="검색어를 입력하세요"  />
        <FaSearch className="icon" />
        
        <div className="AccordianMenu">
        <div className="accordion-item">
        <div className="accordion-title" onClick={() => handleToggle(0)}>
          공지1
          <span className={`arrow ${activeIndex === 0 ? 'up' : 'down'}`}>▲</span>
        </div>
        <div className={`accordion-content ${activeIndex === 0 ? 'show' : ''}`}>
          내용1
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => handleToggle(1)}>
          공지2
          <span className={`arrow ${activeIndex === 1 ? 'up' : 'down'}`}>▲</span>
        </div>
        <div className={`accordion-content ${activeIndex === 1 ? 'show' : ''}`}>
          내용2
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => handleToggle(2)}>
          공지3
          <span className={`arrow ${activeIndex === 2 ? 'up' : 'down'}`}>▲</span>
        </div>
        <div className={`accordion-content ${activeIndex === 2 ? 'show' : ''}`}>
          내용3
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => handleToggle(3)}>
          공지4
          <span className={`arrow ${activeIndex === 3 ? 'up' : 'down'}`}>▲</span>
        </div>
        <div className={`accordion-content ${activeIndex === 3 ? 'show' : ''}`}>
          내용4
        </div>
      </div>
          
        </div>
      </div>
    
    </div>
  );
};

export default Info;
