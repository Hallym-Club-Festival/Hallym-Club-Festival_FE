import React from "react";
import "./QR.css";
import qrImg from "../../assets/images/qr.jpg";

const QR = () => {
  return (
    <div className="qr">
      <div className="qr-imgcontainer">
        <img src={qrImg} alt="" width="700px" height="700px" />
      </div>
    </div>
  );
};

export default QR;
