import LocationBox from "./LocationBox/LocationBox";
import WeatherBox from "./WeatherBox/WeatherBox";

import "./WeatherContent.css";

export default function WeatherContent({ weather }) {
  return (
    <>
      {typeof weather.main !== "undefined" ? (
        <div>
          <LocationBox weather={weather} />
          <WeatherBox weather={weather} />
        </div>
      ) : (
        ""
      )}
    </>
  );
}
