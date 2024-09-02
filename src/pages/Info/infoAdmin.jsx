import React, { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/announcements", {
        title,
        content,
      });
      alert("공지사항이 추가되었습니다.");
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("공지사항 추가 오류:", error);
    }
  };

  return (
    <div>
      <h1>공지사항 작성</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default Admin;
