import React, { useState } from "react";
import axios from "axios";

export default function SearchBar() {
  const [input, setInput] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function searchWeather(response) {
    setLoaded(true);
    setWeather({
      city: response.data.city,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "04f3tf2c9f9bboc83b5050dcf54e2f1a";
    let apiQuery = input;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${apiQuery}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(searchWeather);
  }

  function handleInput(event) {
    setInput(event.target.value);
  }

  let form = (
    <div className="SearchBar mt-4">
      <form action="search" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter City"
          autoComplete="off"
          onChange={handleInput}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="WeatherInfo">
          <div> City: {weather.city} </div>
          <div> Temperature: {Math.round(weather.temperature)}°C </div>
          <div> Wind Speed: {Math.round(weather.wind)}km/h </div>
          <div> Humidity: {weather.humidity}% </div>
          <div> Description: {weather.description} </div>
          <div>
            <img src={weather.icon} alt={weather.description} />
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
