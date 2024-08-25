import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import "./App.css";
import { initVh } from "../src/utils/setVh";
import React, { useEffect } from "react";
import QR from "./pages/QR/QR.jsx";
import Login from "./pages/Login/Login.jsx";
import Host from "./pages/Host/Host.jsx";
import Start from "./pages/User/Start/Start.jsx";
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
          <Route path="/Login" element={<Login />} />
          <Route path="/Host" element={<Host />} />
          <Route path="/Start" element={<Start />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
