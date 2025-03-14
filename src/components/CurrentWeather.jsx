import React, { useEffect, useState } from 'react';
//import './CurrentWeather.css';

const API_KEY = '7e7b477aec5ba9abbee9c06677a9fea5';

const CurrentWeather = ({ location }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        );
        if (!response.ok) {
          
          throw new Error('Sök igen');
        }
        const data = await response.json();
        setWeather(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setWeather(null);
      }
    };

    fetchWeather();
  }, [location]);

  if (error) return <div className="error">{error}</div>;
  if (!weather) return <div className="loading">Laddar väderdata...</div>;

  const currentDate = new Date();

  return (
    <div className="current-weather">
      <h2>{weather.name}</h2>
      <p className="temperature">{Math.round(weather.main.temp)}°C</p>
      <p className="datetime">
        {currentDate.toLocaleDateString()} {currentDate.toLocaleTimeString()}
      </p>
      <p className="weather-description">{weather.weather[0].description}</p>
    </div>
  );
};

export default CurrentWeather;
