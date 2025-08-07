import { useState } from "react";
import { fetchWeatherByCity } from "../services/weatherService.js";

export const useWeather = () => {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);

  const getWeather = async (city) => {
    setLoading(true);
    try {
      const data = await fetchWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      console.error("Error:", err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return { loading, weather, getWeather };
};

