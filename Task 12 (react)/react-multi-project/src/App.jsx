import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css"; // ✅ important

import StringCase from "./pages/StringCase";
import CharacterCount from "./pages/CharacterCount";
import CountdownTimer from "./pages/CountdownTimer";
import PasswordToggle from "./pages/PasswordToggle";
import DigitalClock from "./pages/DigitalClock";
import GuessNumber from "./pages/GuessNumber";
import BasicCalc from "./pages/BasicCalc";
import Calculator from "./pages/Calculator";
import GSTCalculator from "./pages/GSTCalculator";
import TodoState from "./pages/TodoState";
import TodoLocalStorage from "./pages/TodoLocalStorage";
import FormValidation from "./pages/FormValidation";
import FormLocalStorage from "./pages/FormLocalStorage";
import FetchAPI from "./pages/FetchAPI";
import WeatherApp from "./pages/WeatherApp";
import MovieApp from "./pages/MovieApp";
import NewsApp from "./pages/NewsApp";
import CurrencyConverter from "./pages/CurrencyConverter";
import ThemeToggle from "./pages/ThemeToggle";
import "./pages/pages.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app-container">  {/* ✅ MAIN WRAPPER */}
          
          <Navbar />

          <div className="page">  {/* ✅ PAGE WRAPPER */}
            <Routes>
              <Route path="/" element={<StringCase />} />
              <Route path="/char" element={<CharacterCount />} />
              <Route path="/timer" element={<CountdownTimer />} />
              <Route path="/password" element={<PasswordToggle />} />
              <Route path="/clock" element={<DigitalClock />} />
              <Route path="/guess" element={<GuessNumber />} />
              <Route path="/basic" element={<BasicCalc />} />
              <Route path="/calc" element={<Calculator />} />
              <Route path="/gst" element={<GSTCalculator />} />
              <Route path="/todo" element={<TodoState />} />
              <Route path="/todo-local" element={<TodoLocalStorage />} />
              <Route path="/form" element={<FormValidation />} />
              <Route path="/form-local" element={<FormLocalStorage />} />
              <Route path="/api" element={<FetchAPI />} />
              <Route path="/weather" element={<WeatherApp />} />
              <Route path="/movie" element={<MovieApp />} />
              <Route path="/news" element={<NewsApp />} />
              <Route path="/currency" element={<CurrencyConverter />} />
              <Route path="/theme" element={<ThemeToggle />} />
            </Routes>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;