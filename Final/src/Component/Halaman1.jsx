import "./style.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Carousel from "react-bootstrap/Carousel";
import needyimg from "../img/needy-idle.gif";
import BackgroundHal1 from "../img/Background-menu.gif";

export default function Halaman1(props) {
  const [nama, setNama] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [character, setCharacter] = useState();

  function handleName(event) {
    const name = event.target.value;
    setNama(name);
  }
  function handleMajor(event) {
    const major = event.target.value;
    setJurusan(major);
  }
  function handleCharacter(event) {
    const charac = event.target.alt;
    setCharacter(charac);
  }
  return (
    <div
      className="halaman1"
      style={{ backgroundImage: `url(${BackgroundHal1})` }}
    >
      <div className="col-md-3 m-auto ">
        <h1 className="text-center fs-3 text-white">
          Universitas Multimedia Nusantara
        </h1>
        <h3 className="text-center fs-4 text-white">
          Click to Choose Your Character
        </h3>
        <Carousel className="carousel">
          <Carousel.Item value="1">
            <img
              onClick={handleCharacter}
              className="d-block w-100"
              src={needyimg}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item value="2">
            <img
              onClick={handleCharacter}
              className="d-block w-100"
              src="https://c.tenor.com/HpEQla5zN9IAAAAi/sayori-ddlc.gif"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
        <>
          <form className="col-9 m-auto pb-5">
            <FloatingLabel
              onChange={handleName}
              controlId="floatingInput"
              label="Name"
              value={nama}
              className="mb-3 m-auto"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <Form.Select
              aria-label="Default select example"
              className="mb-3"
              onChange={handleMajor}
            >
              <option value="1">Choose Your Major</option>
              <option value="1">Informatika</option>
              <option value="2">Teknik Komputer</option>
              <option value="3">Sistem Informasi</option>
            </Form.Select>
            <center>
              <Button
                variant="outline-warning"
                onClick={() => {
                  props.onSubmit(true);
                  props.Nama(nama);
                  props.Jurusan(jurusan);
                  localStorage.setItem("position", "home");
                  localStorage.setItem("major", jurusan);
                  localStorage.setItem("character", character);
                }}
              >
                Play
              </Button>{" "}
            </center>
          </form>
        </>
      </div>
    </div>
  );
}
