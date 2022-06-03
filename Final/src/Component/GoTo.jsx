import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
export default function GoTo() {
  const [home, setHome] = useState(0);
  const [campus, setCampus] = useState(0);
  const [cafe, setCafe] = useState(0);
  const [supermarket, setSupermarket] = useState(0);
  function handlePosition(event) {
    const pos = event.target.value;
    if (pos === "campus") {
      setCampus((prev) => prev + 1);
      localStorage.setItem("campus", campus);
    } else if (pos === "home") {
      setHome((prev) => prev + 1);
      localStorage.setItem("home", home);
    } else if (pos === "cafe") {
      setCafe((prev) => prev + 1);
      localStorage.setItem("cafe", cafe);
    } else if (pos === "supermarket") {
      setSupermarket((prev) => prev + 1);
      localStorage.setItem("supermarket", supermarket);
    }
    localStorage.setItem("position", pos);
  }
  return (
    <div>
      <DropdownButton id="dropdown-item-button" className="m-3" title="Go To">
        <Dropdown.Item as="button" value="home" onClick={handlePosition}>
          Home
        </Dropdown.Item>
        <Dropdown.Item as="button" value="campus" onClick={handlePosition}>
          Campus
        </Dropdown.Item>
        <Dropdown.Item as="button" value="cafe" onClick={handlePosition}>
          Cafe
        </Dropdown.Item>
        <Dropdown.Item as="button" value="supermarket" onClick={handlePosition}>
          Supermarket
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
