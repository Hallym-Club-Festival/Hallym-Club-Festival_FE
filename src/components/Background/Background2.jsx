import React from "react";
import "./Background2.css";
const Background2 = ({ hasTitle }) => {
  return <div className="background_style2">{hasTitle && <div></div>}</div>;
};

export default Background2;
