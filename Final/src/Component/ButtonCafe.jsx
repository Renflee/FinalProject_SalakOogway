import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Cafe from "../img/cafenight.webp";
import americano from "../img/americano.png";
import espresso from "../img/espresso.png";
import soju from "../img/soju.png";
import "./style.css";
export default function ButtonCafe(props) {
  const [background, setBackground] = useState();

  function handleBackground1() {
    return setBackground(americano);
  }
  function handleBackground2() {
    return setBackground(espresso);
  }
  function handleBackground3() {
    return setBackground(soju);
  }
  return (
    <div
      className="halaman2 m-auto b fixed-top"
      style={{ backgroundImage: `url(${Cafe})` }}
    >
      <div className="fixed-bottom mb-5">
        <div className="buttonHandler row d-flex justify-content-around buttonCafe">
          <div className="col-4"></div>
          <div className="col-3 pt-5 mt-3 d-flex justify-content-center">
            <Button
              onClick={() => {
                handleBackground1();
                props.one(8);
                props.makan(7);
                props.gaji(8);
                localStorage.setItem("kegiatan", "work");
              }}
              className="m-3"
              variant="secondary"
            >
              Americano
            </Button>{" "}
            <Button
              onClick={() => {
                handleBackground2();
                props.two(12);
                props.makan(4);
                props.gaji(5);
                localStorage.setItem("kegiatan", "work");
              }}
              className="m-3"
              variant="secondary"
            >
              Espresso
            </Button>{" "}
            <Button
              onClick={() => {
                handleBackground3();
                props.three(8);
                props.makan(5);
                props.gaji(10);
                localStorage.setItem("kegiatan", "work");
              }}
              className="m-3"
              variant="secondary"
            >
              Soju
            </Button>{" "}
          </div>
          <div className="col-4 minuman">
            {/* <img src={americano} alt="americano" /> */}
            {/* <img src={espresso} alt="espresso" /> */}
            <img src={background} alt="soju" />
          </div>
        </div>
      </div>
    </div>
  );
}
