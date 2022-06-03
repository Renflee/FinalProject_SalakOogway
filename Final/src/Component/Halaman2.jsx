import { useState, useEffect } from "react";
import ButtonHandler from "./ButtonHandler";
import Bar from "./Bar";
import Jam from "./Jam";
import GoTo from "./GoTo";
import Weather from "./Weather";
import ButtonCafe from "./ButtonCafe";
import ButtonCampus from "./ButtonCampus";
import ButtonSupermarket from "./ButtonSupermarket";
import News from "./News";
import Alert from "./Alert";
import Wallet from "./Wallet";
import Dokimerah from "../img/doki-merah.png";
import Needy from "../img/needy-idle.gif";
import Charac2 from "../img/Karakter2.jpg";
import Dokitidur from "../img/doki-tidur.png";
import Dokimakan from "../img/doki-eat.png";
import Dokistudy from "../img/doki-baca.png";
import Dokidate from "../img/dokidating.png";
import Needymakan from "../img/needy-makan.png";
import Needytidur from "../img/needy-tidur.png";
import Needymain from "../img/needy-playing.png";
import Needyrokok from "../img/needy-rokok.gif";
import Needystudy from "../img/needy-baca.png";
import Needydate from "../img/needydating.png";

export default function Halaman2(props) {
  const position = localStorage.getItem("position");
  const characDoki = "https://c.tenor.com/HpEQla5zN9IAAAAi/sayori-ddlc.gif";
  const [time, setTime] = useState(0);
  const [timeNow, setTimeNow] = useState({ h: 0, m: 0 });
  const [eat, setEat] = useState(50);
  const [study, setStudy] = useState(0);
  const [sleep, setSleep] = useState(50);
  const [entertain, setEntertain] = useState(50);
  const [money, setMoney] = useState(2000);
  function handleEat(data) {
    setEat((prev) => prev + data);
    setSleep((prev) => prev - 2);
    setEntertain((prev) => prev - 2);
    //setStudy((prev) => prev - 5);
  }
  function handleSleep(data) {
    setEat((prev) => prev - 2);
    setSleep((prev) => prev + data);
    setEntertain((prev) => prev - 2);
    //setStudy((prev) => prev - 5);
  }
  function handleEntertain(data) {
    setEat((prev) => prev - 2);
    setSleep((prev) => prev - 2);
    setEntertain((prev) => prev + data);
    //setStudy((prev) => prev - 5);
  }
  function handleStudy(data) {
    setEat((prev) => prev - 2);
    setSleep((prev) => prev - 2);
    setEntertain((prev) => prev - 2);
    setStudy((prev) => prev + data);
  }
  function decreaseMoney(data) {
    return setMoney((prev) => prev - data);
  }
  function increaseMoney(data) {
    return setMoney((prev) => prev + data);
  }

  function handlerTime() {
    const jam = ("0" + Math.floor((time / 120000) % 24)).slice(-2);
    const menit = ("0" + Math.floor((time / 2000) % 60)).slice(-2);
    return setTimeNow({ h: jam, m: menit });
  }
  function handleUcapan() {
    let greeting = "";
    if (timeNow.h >= 4) greeting = "Good Morning";
    if (timeNow.h >= 11) greeting = "Good Afternoon";
    if (timeNow.h >= 15) greeting = "Good Evening";
    if (timeNow.h >= 20 || timeNow.h <= 3) greeting = "Good Night";
    return greeting;
  }

  function handleButtonPosition() {
    const pos = localStorage.getItem("position");
    if (pos === "home")
      return (
        <ButtonHandler
          waktu={handleUcapan()}
          eat={handleEat}
          sleep={handleSleep}
          ent={handleEntertain}
          study={handleStudy}
        />
      );
    else if (pos === "campus")
      return (
        <ButtonCampus
          first={handleStudy}
          second={handleStudy}
          third={handleStudy}
        />
      );
    else if (pos === "supermarket")
      return (
        <ButtonSupermarket
          ent={handleEntertain}
          amount={money}
          belanja={decreaseMoney}
        />
      );
    else if (pos === "cafe")
      return (
        <ButtonCafe
          one={handleEntertain}
          two={handleEntertain}
          three={handleEntertain}
          makan={handleEat}
          gaji={increaseMoney}
        />
      );
  }

  function handleKegiatan() {
    const char = localStorage.getItem("character");
    if (char === "Second slide") {
      const keg = localStorage.getItem("kegiatan");
      if (keg === "makan")
        return <img className="m-auto" src={Dokimakan} alt="" />;
      else if (keg === "tidur")
        return <img className="m-auto" src={Dokitidur} alt="" />;
      else if (keg === "work")
        return <img className="m-auto" src={Dokimerah} alt="" />;
      else if (keg === "study")
        return <img className="m-auto" src={Dokistudy} alt="" />;
      else if (keg === "date")
        return <img className="m-auto" src={Dokidate} alt="" />;
      else return <img className="m-auto" src={characDoki} alt="" />;
    } else {
      const keg = localStorage.getItem("kegiatan");
      if (keg === "makan")
        return <img className="m-auto" src={Needymakan} alt="" />;
      else if (keg === "tidur")
        return <img className="m-auto" src={Needytidur} alt="" />;
      else if (keg === "main")
        return <img className="m-auto" src={Needymain} alt="" />;
      else if (keg === "work")
        return <img className="m-auto" src={Needyrokok} alt="" />;
      else if (keg === "study")
        return <img className="m-auto" src={Needystudy} alt="" />;
      else if (keg === "date")
        return <img className="m-auto" src={Needydate} alt="" />;
      else return <img className="m-auto" src={Needy} alt="" />;
    }
  }
  useEffect(() => {
    handlerTime();
    let interval = null;
    interval = setInterval(() => {
      handlerTime();
      setTime((prevTime) => prevTime + 10);
    }, 10);
  });
  useEffect(() => {
    let interval = null;
    interval = setTimeout(() => {
      setEat((prev) => prev - 1);
      //setStudy((prev) => prev - 1);
      setSleep((prev) => prev - 1);
      setEntertain((prev) => prev - 1);
    }, 1000);
    // return () => clearTimeout(interval);
  }, [eat, study, entertain, sleep]);
  return (
    <div>
      <div className="control fixed-top">
        <div className="row d-flex justify-content-between">
          <div className="col-4">
            {
              <Bar
                eat={eat}
                study={study}
                sleep={sleep}
                entertain={entertain}
              />
            }
          </div>
          <div className="col-3 text-white text-center">
            <Jam jam={timeNow.h} menit={timeNow.m} />
            {/* <Marquee> */}
            <h4>
              Hello {props.username} {handleUcapan()}{" "}
            </h4>
            {/* </Marquee> */}
          </div>
          <div className="col-4">
            <Weather />
          </div>
        </div>
        <div className="row d-flex justify-content-between">
          <div className="dropdow col-4">
            <GoTo />
          </div>
          <div className="character m-auto col-4">{handleKegiatan()}</div>
          <div className="col-4">
            <Wallet uang={money} />
            <center>
              <News waktu={eat} />
            </center>
            <Alert jam={timeNow.h} menit={timeNow.m} />
          </div>
        </div>
      </div>
      <div>{handleButtonPosition()}</div>
    </div>
  );
}
