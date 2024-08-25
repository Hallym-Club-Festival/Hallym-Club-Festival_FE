import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import "./App.css";
import { initVh } from "../src/utils/setVh";
import React, { useEffect } from "react";
import QR from "./pages/QR/QR.jsx";
import Main from "./pages/Main/Main.jsx";
import Fortune from "./pages/Fortune/Fortune.jsx";
import Info from "./pages/Info/Info.jsx";
import Lost from "./pages/Lost/Lost.jsx";

function App() {
  useEffect(() => {
    const cleanup = initVh(); //initVh() cleanup에 대입
    return cleanup;
  }, []);
  return (
    <>
      <QR />

      <div className="phone_size">
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/info" element={<Info />} />
          <Route path="/lost" element={<Lost />} />
          <Route path="/fortune" element={<Fortune />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
