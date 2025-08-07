import React from "react";

const WeatherCard = ({ weather }) => {
  const { name, main, weather: details, wind } = weather;
  const icon = `https://openweathermap.org/img/wn/${details[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <img src={icon} alt={details[0].description} />
      <p>{details[0].description.charAt(0).toUpperCase() + details[0].description.slice(1)}</p>
      <p><strong>Temperature:</strong> {main.temp}°C</p>
      <p><strong>Feels Like:</strong> {main.feels_like}°C</p>
      <p><strong>Humidity:</strong> {main.humidity}%</p>
      <p><strong>Wind:</strong> {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
