import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard.jsx";
import DarkModeToggle from "./components/DarkModeToggle.jsx";
import { useWeather } from "./hooks/useWeather.js";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const { weather, loading, getWeather } = useWeather();

  const handleSearch = () => {
    if (city.trim()) {
      getWeather(city.trim());
    }
  };

  return (
    <div className="app">
      <div className="header">
        <h1>🌤 Weather Pro</h1>
        <DarkModeToggle />
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? "Loading..." : "Get Weather"}
        </button>
      </div>

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;
