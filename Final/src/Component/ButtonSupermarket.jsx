import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Belanja from "./Belanja";
import Supermarket from "../img/supermarket.jpg";
import Shopping from "../img/shopping.jpg";
import Payment from "../img/cashier.png";
import SupDate from "../img/ikeamall.jpg";

export default function ButtonCampus(props) {
  const [background, setBackground] = useState(Supermarket);

  function handleBackground1() {
    return setBackground(Shopping);
  }
  function handleBackground2() {
    return setBackground(Payment);
  }
  function handleBackground3() {
    return setBackground(SupDate);
  }

  return (
    <div
      className="halaman2 m-auto b fixed-top"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="fixed-bottom mb-5">
        <div className="buttonCampus d-flex justify-content-center">
          <Belanja
            onClick={() => {
              handleBackground1();
              localStorage.setItem("kegiatan", "work");
              // props.first(8);
            }}
          />
          <Button
            onClick={() => {
              const total = localStorage.getItem("totalBelanja");
              if (props.amount > total) props.belanja(total);
              localStorage.setItem("totalBelanja", 0);
              handleBackground2();
              localStorage.setItem("kegiatan", "work");
              //props.second(8);
            }}
            className="m-3"
            variant="secondary"
          >
            Payment
          </Button>{" "}
          <Button
            onClick={() => {
              handleBackground3();
              localStorage.setItem("kegiatan", "date");
              props.ent(6);
            }}
            className="m-3"
            variant="secondary"
          >
            Supermarket-Date
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
