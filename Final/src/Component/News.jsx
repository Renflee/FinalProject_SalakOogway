import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListNews from "./ListNews";
export default function News(props) {
  const waktu = props.waktu;
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const url = "https://saurav.tech/NewsAPI/everything/cnn.json";
  const getNewsApi = async () => {
    const res = await fetch(url);
    const result = await res.json();
    setData(result.articles);
  };
  useEffect(() => {
    getNewsApi();
  }, []);
  useEffect(() => {
    // getNewsApi();
    const interval = setTimeout(function () {
      try {
        const rand = Math.round(Math.random() * 99 + 1);
        setTitle(data[rand].title);
        setDesc(data[rand].description);
        setImg(data[rand].urlToImage);
      } catch (err) {
        console.log("Error");
      }
      clearTimeout(interval);
    }, 1000);
  }, [waktu]);

  return (
    <>
      <div className="m-auto">
        <Button variant="primary" onClick={handleShow}>
          News
        </Button>
      </div>

      <div className="handleNews zindex-offcanvas">
        <div>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>News Today</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ListNews title={title} image={img} desc={desc} />
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </>
  );
}
