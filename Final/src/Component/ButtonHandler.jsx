import Button from "react-bootstrap/Button";
import BackgroundMalam from "../img/Background-menu.gif";
import BackgroundPagi from "../img/background-pagi.jpg";
import BackgroundSiang from "../img/background-siang.jpg";
import BackgroundSore from "../img/background-sore.jpg";
import AboutUs from "./Aboutus";
import { useEffect, useState } from "react";
export default function ButtonHandler(props) {
  function handleBackground() {
    if (props.waktu === "Good Morning") return BackgroundPagi;
    else if (props.waktu === "Good Afternoon") return BackgroundSiang;
    else if (props.waktu === "Good Evening") return BackgroundSore;
    else if (props.waktu === "Good Night") return BackgroundMalam;
  }
  return (
    <div
      className="halaman2 m-auto b fixed-top"
      style={{ backgroundImage: `url(${handleBackground()})` }}
    >
      <div className="buttonH fixed-bottom ">
        <div className="buttonHandler d-flex justify-content-center">
          <Button
            onClick={() => {
              props.eat(18);
              localStorage.setItem("kegiatan", "makan");
              //localStorage.setItem("kegiatan2", "makan");
            }}
            className="m-3"
            variant="secondary"
          >
            Eat
          </Button>{" "}
          <Button
            onClick={() => {
              props.sleep(18);
              localStorage.setItem("kegiatan", "tidur");
              //localStorage.setItem("kegiatan2", "tidur");
            }}
            className="m-3"
            variant="secondary"
          >
            Sleep
          </Button>{" "}
          <Button
            onClick={() => {
              props.ent(18);
              localStorage.setItem("kegiatan", "work");
              //localStorage.setItem("kegiatan2", "main");
            }}
            className="m-3"
            variant="secondary"
          >
            Entertain
          </Button>{" "}
        </div>
        <AboutUs />
      </div>
    </div>
  );
}
