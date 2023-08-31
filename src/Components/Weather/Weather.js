import { useState } from "react";

import WeatherContent from "./WeatherContent/WeatherContent";
import WeatherForm from "./WeatherForm/WeatherForm";

import "./Weather.css";

export default function Weather() {
  const [weather, setWeather] = useState({});
  return (
    <div
      className={
        typeof weather.main !== "undefined"
          ? weather.main.temp > 16
            ? "weatherApp warm"
            : "weatherApp"
          : "weatherApp"
      }
    >
      <div className="main">
        <WeatherForm setWeather={setWeather} />
        <WeatherContent weather={weather} />
      </div>
    </div>
  );
}
