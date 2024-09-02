const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "uploads"))); // 정적 파일 제공 설정

let announcements = []; // 공지사항 데이터 저장
let lostItems = []; // 분실물 데이터 저장

// 파일 업로드 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // 업로드 폴더 설정
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // 파일명 설정
  },
});

const upload = multer({ storage: storage });

// 분실물 등록
app.post("/api/lost-items", upload.single("image"), (req, res) => {
  const { title, location } = req.body;
  const imagePath = req.file ? req.file.path.replace("uploads/", "") : null; // 파일 경로 수정

  const newItem = { id: Date.now(), title, location, imagePath };
  lostItems.push(newItem);

  res.status(201).json(newItem);
});

// 분실물 목록 조회
app.get("/api/lost-items", (req, res) => {
  res.json(lostItems);
});

// 공지사항 추가
app.post("/api/announcements", (req, res) => {
  const { title, content } = req.body;
  const newAnnouncement = {
    id: announcements.length + 1,
    title,
    content,
    date: new Date().toISOString(),
  };
  announcements.push(newAnnouncement);
  res.status(201).json(newAnnouncement);
});

// 공지사항 목록 조회
app.get("/api/announcements", (req, res) => {
  res.json(announcements);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
