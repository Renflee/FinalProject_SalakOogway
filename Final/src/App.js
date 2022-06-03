import "./styles.css";
import Halaman1 from "./Component/Halaman1";
import Halaman2 from "./Component/Halaman2";
import { useState } from "react";
export default function App() {
  const [show, setShow] = useState(false);
  const [nama, setNama] = useState();
  const [jurusan, setJurusan] = useState();
  function hideComponent(data) {
    return setShow(data);
  }
  function userName(data) {
    // console.log(data);
    return setNama(data);
  }
  function userJurusan(data) {
    // console.log(data);
    return setJurusan(data);
  }
  return (
    <div className="App">
      <Halaman1
        onSubmit={hideComponent}
        Nama={userName}
        Jurusan={userJurusan}
      />
      {show ? <Halaman2 username={nama} userjurusan={jurusan} /> : null}
      {/* <Bar/> */}
      {/* <Cafe/> */}
    </div>
  );
}
