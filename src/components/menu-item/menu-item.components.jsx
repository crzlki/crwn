import React from "react";
import "./menu-item.styles.scss";
import  {withRouter} from 'react-router-dom'
const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <div className={`${size} menu-item`} 
  onClick={()=> history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);
