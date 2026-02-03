import React, { useState } from "react";


const Weather = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const api = {
    key: "11d0d3b8d649a4ffb97c9b97e3e7907d",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };

  const getWeather = () => {
    if (!search) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");

    fetch(`${api.base}?q=${search}&appid=${api.key}&units=metric`)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === "404") {
          setError("City not found");
          setWeather(null);
        } else {
          setWeather(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
        setWeather(null);
        setLoading(false);
      });
  };

  return (
    <div className="weather-container">
      <div className="weather-card">
        <h1>🌤 Weather App</h1>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={getWeather}>Search</button>
        </div>

        {loading && <p className="loading">Loading...</p>}

        {error && <p className="error">{error}</p>}

        {weather && weather.main && (
          <div className="weather-info">
            <h2>{weather.name}</h2>

            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather-icon"
            />

            <p className="temp">{Math.round(weather.main.temp)}°C</p>
            <p className="condition">{weather.weather[0].main}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
