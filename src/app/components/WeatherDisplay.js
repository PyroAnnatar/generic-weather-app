import React from "react";

const WeatherDisplay = ({ data }) => {
  return (
    <>
      <div className="bg-sky-200 p-4 text-center w-full md:w-3/5 rounded-lg">
        <p className="text-3xl">{data.name}</p>
        <div>
          <span className="text-3xl">{Math.round(data.main.temp)}</span>
          <span className="relative bottom-2">°C</span>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="Weather Status"
          className="m-auto"
        />
        <p>{data.weather[0].description}</p>
        <div>{`Hissedilen: ${data.main.feels_like}°C | Nem: ${data.main.humidity}%`}</div>
      </div>
    </>
  );
};

export default WeatherDisplay;
