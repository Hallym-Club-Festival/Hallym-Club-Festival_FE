import React from "react";
import "./Background.css";
const Background = ({ hasTitle }) => {
  return <div className="background_style">{hasTitle && <div></div>}</div>;
};

export default Background;
