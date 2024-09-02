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
let boxes = [
  { id: 1, isGray: false, image: "path/to/image1.png" },
  { id: 2, isGray: false, image: "path/to/image2.png" },
  { id: 3, isGray: false, image: "path/to/image3.png" },
  { id: 4, isGray: false, image: "path/to/image4.png" },
  { id: 5, isGray: false, image: "path/to/image5.png" },
  { id: 6, isGray: false, image: "path/to/image6.png" },
];

// 박스 목록 조회
app.get("/api/boxes", (req, res) => {
  console.log("GET /api/boxes");
  res.json(boxes);
});

// 박스 상태 업데이트
app.post("/api/updateBox", (req, res) => {
  console.log("POST /api/updateBox", req.body);
  const { id } = req.body;
  boxes = boxes.map((box) => (box.id === id ? { ...box, isGray: true } : box));
  console.log(`박스 ID ${id}가 회색으로 업데이트되었습니다.`);
  res.status(200).send({ message: "업데이트 성공", id });
});

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
  console.log("POST /api/lost-items", req.body);
  if (req.file) {
    console.log("Uploaded file:", req.file);
  } else {
    console.log("No file uploaded.");
  }

  const { title, location } = req.body;
  const imagePath = req.file ? req.file.filename : null; // 파일 경로 수정

  const newItem = { id: Date.now(), title, location, imagePath };
  lostItems.push(newItem);

  res.status(201).json(newItem);
});

// 분실물 목록 조회
app.get("/api/lost-items", (req, res) => {
  console.log("GET /api/lost-items");
  res.json(lostItems);
});

// 공지사항 추가
app.post("/api/announcements", (req, res) => {
  console.log("POST /api/announcements", req.body);
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
  console.log("GET /api/announcements");
  res.json(announcements);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
