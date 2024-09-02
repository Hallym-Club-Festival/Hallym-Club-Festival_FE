// CatalogItem.js
import React from "react";
import "./Catalog.css"; // 필요한 경우 스타일 파일을 따로 생성할 수 있습니다.

const CatalogItem = ({ number, text }) => {
  return (
    <div className="catalog-content">
      <div>
        {number} &nbsp;&nbsp;{text}
      </div>
    </div>
  );
};

export default CatalogItem;
