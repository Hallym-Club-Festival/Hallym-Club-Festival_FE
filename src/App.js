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
import Map from "./pages/Map/Map.jsx";
import Admin from "./pages/Info/infoAdmin.jsx";
import LostAdmin from "./pages/Lost/lostAdmin.jsx";

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
          <Route path="/map" element={<Map />} />
          <Route path="/infoadmin" element={<Admin />} />
          <Route path="/lostadmin" element={<LostAdmin />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
