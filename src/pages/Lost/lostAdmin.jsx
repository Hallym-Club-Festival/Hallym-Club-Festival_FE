import React, { useState } from "react";
import axios from "axios";
import Background2 from "../../components/Background/Background2";
import { FaUpload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LostAdmin = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("location", location);
    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.post("http://localhost:5000/api/lost-items", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      // 데이터가 성공적으로 저장된 후 페이지를 새로 고침하거나 데이터를 갱신하는 로직 추가
    } catch (error) {
      console.error("분실물 등록 오류:", error);
    }
  };

  return (
    <div className="lostAdminMain">
      <Background2 />
      <div className="lostAdminTitle">분실물 등록</div>
      <form onSubmit={handleSubmit} className="lostAdminForm">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
          required
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="위치"
          required
        />
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/jpg, image/png"
        />
        <button type="submit" className="lostAdminButton">
          등록 <FaUpload />
        </button>
      </form>
    </div>
  );
};

export default LostAdmin;
