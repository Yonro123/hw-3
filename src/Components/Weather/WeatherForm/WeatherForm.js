import { useState } from "react";

import Input from "../../Input/Input";

import "./WeatherForm.css";

const api = {
  key: "7552de1035fed3093f1a8729e1ec58ef",
  base: "https://api.openweathermap.org/data/2.5/",
};

export default function WeatherForm({ setWeather }) {
  const [query, setQuery] = useState("");

  const search = async (event) => {
    if (event.key === "Enter") {
      const response = await fetch(
        `${api.base}weather?q=${query}&units=metric&APPID=${api.key}`
      );
      const result = await response.json();
      setWeather(result);
      setQuery("");
    }
  };

  const onChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="search-box">
      <Input
        className="search-bar"
        placeholder="Search..."
        onChange={onChange}
        value={query}
        onKeyPress={search}
      />
    </div>
  );
}
