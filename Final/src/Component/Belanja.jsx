import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListBelanja from "./ListBelanja";
export default function News() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const url = "https://fakestoreapi.com/products";
  const getNewsApi = async () => {
    const res = await fetch(url);
    const result = await res.json();
    setData(result);
    console.log(result);
  };
  useEffect(() => {
    getNewsApi();
  }, []);
  function handleBelanja(data) {
    setAmount((prev) => prev + data);
    localStorage.setItem("totalBelanja", amount);
  }
  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Shopping
      </Button>

      <div className="handleNews zindex-offcanvas">
        <div>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Sumarecon Mart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {data.map((element) => {
                return (
                  <ListBelanja
                    title={element.title}
                    image={element.image}
                    desc={element.description}
                    price={element.price}
                    belanja={handleBelanja}
                  />
                );
              })}
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </>
  );
}

// render(<Example />);
