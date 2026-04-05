import React from "react";
import "./pages.css";

class WeatherApp extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "",
      data: null,
      error: ""
    };
  }

  getWeather() {
    if (!this.state.city) return;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=d6840519ce62cd69a2690f0aafab21a7&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === "404") {
          this.setState({ error: "City not found", data: null });
        } else {
          this.setState({ data: data, error: "" });
        }
      });
  }

  render() {
    return (
      <div className="page">
        <h2>Weather App</h2>

        <div className="weather-input">
          <input
            type="text"
            placeholder="Enter city..."
            value={this.state.city}
            onChange={(e) => this.setState({ city: e.target.value })}
          />
          <button onClick={() => this.getWeather()}>Search</button>
        </div>

        {/* Error */}
        {this.state.error && <p className="error">{this.state.error}</p>}

        {/* Weather Data */}
        {this.state.data && (
          <div className="weather-card">
            <h3>
              {this.state.data.name}, {this.state.data.sys.country}
            </h3>

            <p>🌡 Temperature: {this.state.data.main.temp} °C</p>
            <p>☁ Weather: {this.state.data.weather[0].main}</p>
            <p>💧 Humidity: {this.state.data.main.humidity}%</p>
            <p>🌬 Wind: {this.state.data.wind.speed} m/s</p>
          </div>
        )}
      </div>
    );
  }
}

export default WeatherApp;