import React, { useEffect, useState } from 'react';
//import './WeatherDetails.css';

const API_KEY = '7e7b477aec5ba9abbee9c06677a9fea5';

const WeatherDetails = ({ location }) => {
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`
        );
        if (!response.ok) {
          throw new Error('Kontrollera stavningen.');
        }
        const data = await response.json();
        setForecast(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setForecast(null);
      }
    };

    fetchForecast();
  }, [location]);

  if (error) return <div className="error">{error}</div>;
  if (!forecast) return <div className="loading">Laddar prognos...</div>;

  
  const dailyForecast = forecast.list
    .filter(item => item.dt_txt.includes('12:00:00'))
    .slice(0, 5);

  return (
    <div className="weather-details">
      {dailyForecast.map((day, index) => (
        <div key={index} className="forecast-card">
          <p className="date">{new Date(day.dt_txt).toLocaleDateString()}</p>
          <img
            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt={day.weather[0].description}
            className="weather-icon"
          />
          <p className="temp-range">
            Min: {Math.round(day.main.temp_min)}°C / Max: {Math.round(day.main.temp_max)}°C
          </p>
        </div>
      ))}
    </div>
  );
};

export default WeatherDetails;
