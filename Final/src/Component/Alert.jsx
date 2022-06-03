import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function Example(props) {
  const [show, setShow] = useState(false);
  const [desc, setDesc] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleAlert() {
    if (props.jam == 17 && props.menit == 15) {
      const amount = localStorage.getItem("campus");
      if (amount > 3) {
        setDesc("Kamu sudah terlalu rajin belajar, istirahat yang cukup ya!");
      } else {
        setDesc("Ayo belajar, sudah terlalu banyak bolos kamu!");
      }
      handleShow();
    } else if (props.jam == 20 && props.menit == 40) {
      const amount = localStorage.getItem("cafe");
      if (amount > 4) {
        setDesc("Kamu sudah terlalu banyak hangout, tabung uangnya!");
      } else {
        setDesc("Kamu butuh refreshing, silahkan pergi hangout");
      }
      handleShow();
    } else if (props.jam == 18 && props.menit == 10) {
      const amount = localStorage.getItem("supermarket");
      if (amount > 3) {
        setDesc("Kebutuhan kamu sudah cukup!");
      } else {
        setDesc(
          "Belanja bulanan jangan lupa ya! Sudah pada habis persediaanmu"
        );
      }
      handleShow();
    } else if (props.jam == 21 && props.menit == 30) {
      const amount = localStorage.getItem("home");
      if (amount > 4) {
        setDesc("Istirahat di rumah yang cukup ya, jaga kesehatan!");
      } else {
        setDesc("Ayo produktif! Jangan di rumah terus");
      }
      handleShow();
    }
  }
  useEffect(() => {
    handleAlert();
  });
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reminder!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{desc}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}
