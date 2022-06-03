import { useEffect, useState } from "react";

export default function Weather(props) {
  const api = {
    key: "8ca21f56c20604b71715ecc61b1bfe9e",
    base: "https://api.openweathermap.org/data/2.5/"
  };
  const [weather, setWeather] = useState({});
  const [temperature, setTemp] = useState({});
  const [kondisi, setKondisi] = useState({});
  // const [handle, setHandle] = useState(true);
  function setWeatherApi() {
    fetch(`${api.base}weather?q=${"Tangerang"}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setTemp(result.main);
        setKondisi(result.weather[0]);
        console.log(result);
      });
  }
  useEffect(() => {
    setWeatherApi();
    // setHandle(flse);
  }, []);

  const dateNow = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div>
      <div className="containerWeatherApi rounded m-auto mt-3 bg-light border border-dark border-5">
        <div className="Lokasi text-center">
          <h3>{weather.name}</h3>
          <p>{dateNow(new Date())}</p>
        </div>
        <div className="keterangan text-center">
          <h5>{Math.round(temperature.temp)}°C</h5>
          <h5>{kondisi.main}</h5>
          {/* {setWet()} */}
        </div>
      </div>
    </div>
  );
}
