import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import cmpus from "../img/campus.jpg";
import Algo from "../img/algo.jpg";
import Os from "../img/os.png";
import Arsi from "../img/comp.webp";
import Toilet from "../img/toilet.webp";

export default function ButtonCampus(props) {
  const [background, setBackground] = useState(cmpus);
  const [matkul, setMatkul] = useState({
    f: "Algorithm & Data Structure",
    s: "Operating System",
    t: "Computer Architecture & Organization",
    u: "Toilet"
  });
  function HandleMajor() {
    const mataKuliah = localStorage.getItem("major");
    if (mataKuliah === "1") {
      return setMatkul({
        f: "Algorithm & Data Structure",
        s: "Operating System",
        t: "Computer Architecture & Organization",
        u: "Toilet"
      });
    } else if (mataKuliah === "2") {
      return setMatkul({
        f: "Programming Fundamental",
        s: "Digital System",
        t: "Kalkulus",
        u: "Toilet"
      });
    } else if (mataKuliah === "3") {
      return setMatkul({
        f: "Technopreneurship",
        s: "Language Teory & Automata",
        t: "Object Oriented Programming",
        u: "Toilet"
      });
    }
  }
  useEffect(() => {
    HandleMajor();
  }, []);
  function handleBackground1() {
    return setBackground(Algo);
  }
  function handleBackground2() {
    return setBackground(Os);
  }
  function handleBackground3() {
    return setBackground(Arsi);
  }
  function handleBackground4() {
    return setBackground(Toilet);
  }

  return (
    <div
      className="halaman2 m-auto b fixed-top"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="buttonH fixed-bottom mb-5">
        <div className="buttonCampus d-flex flex-wrap justify-content-center">
          <Button
            onClick={() => {
              handleBackground1();
              props.first(5);
              //props.gaji(70000);
              localStorage.setItem("kegiatan", "study");
            }}
            className="m-3"
            variant="secondary"
          >
            <span>{matkul.f}</span>
          </Button>{" "}
          <Button
            onClick={() => {
              handleBackground2();
              props.second(3);
              localStorage.setItem("kegiatan", "study");
            }}
            className="m-3"
            variant="secondary"
          >
            <span>{matkul.s}</span>
          </Button>{" "}
          <Button
            onClick={() => {
              handleBackground3();
              props.third(5);
              localStorage.setItem("kegiatan", "study");
            }}
            className="m-3"
            variant="secondary"
          >
            <span>{matkul.t}</span>
          </Button>{" "}
          <Button
            onClick={() => {
              handleBackground4();
              props.first(-3);
              localStorage.setItem("kegiatan", "work");
            }}
            className="m-3"
            variant="secondary"
          >
            {matkul.u}
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
