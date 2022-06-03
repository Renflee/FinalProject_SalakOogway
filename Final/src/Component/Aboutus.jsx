import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Kartu from "./Credits/Kartu";
import contacts from "./Credits/contacts";
export default function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        About US
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>About Us</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {contacts.map((element) => {
            return (
              <Kartu
                key={element.id}
                name={element.name}
                img={element.imgURL}
                tel={element.phone}
                email={element.email}
              />
            );
          })}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
