import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=b2bce22e5c582ddceda5722a1e2dc0ea`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            <h1>{data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}</h1>
          </div>
          <div className="description">
            <p>{data.wheather ?<p>{data.wheather[0].main}</p> : null} </p>
          </div>
        </div>

        {data.name !== undefined &&
        <div className="bottom">
          <div className="feels">
          {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
            <p>Feels like</p>
          </div>
          <div className="humudity"> 
          {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
          {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
          <p>Wind speed </p>
            
          </div>
        </div>

        }
      </div>
    </div>
  );
}

export default App;