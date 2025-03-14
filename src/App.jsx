import React, { useState } from 'react';
import CurrentWeather from './components/CurrentWeather';
import WeatherDetails from './components/WeatherDetails';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [location, setLocation] = useState('Stockholm');

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Väder</h1>
        <SearchBar onSearch={setLocation} />
      </header>
      <main>
        <CurrentWeather location={location} />
        <WeatherDetails location={location} />
      </main>
    </div>
  );
}

export default App;
