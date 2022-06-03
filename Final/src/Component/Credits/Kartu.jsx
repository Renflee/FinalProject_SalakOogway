import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
import "./styleAbout.css";
function Card(props) {
  return (
    <div className="kartu">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.tel} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
