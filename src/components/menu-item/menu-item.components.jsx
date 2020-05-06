import React from "react";
import "./menu-item.styles.scss";
const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`, // dynamically css style
      }}
    />
   
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitile">Shop now</span>
    </div>
  </div>
);

export default MenuItem;
