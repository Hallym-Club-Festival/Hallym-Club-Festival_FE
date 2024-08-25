<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import "./App.css";
import { initVh } from "../src/utils/setVh";
import React, { useEffect } from "react";
import QR from "./pages/QR/QR.jsx";
import Start from "./pages/Start/Start.jsx";
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
          <Route path="/start" element={<Start />} />
          <Route path="/info" element={<Info />} />
          <Route path="/lost" element={<Lost />} />
          <Route path="/fortune" element={<Fortune />} />
        </Routes>
      </div>
    </>
>>>>>>> 04c3e54dd65f6576732f18d735cb45918cbc529c
  );
}

export default App;
