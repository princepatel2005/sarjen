import React from "react";
import "./pages.css";

class CurrencyConverter extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: "",
      rate: 0,
      result: 0
    };
  }

  componentDidMount() {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ rate: data.rates.INR });
      });
  }

  convert() {
    let amount = parseFloat(this.state.amount) || 0;
    let result = amount * this.state.rate;
    this.setState({ result });
  }

  render() {
    return (
      <div className="page">
        <h2>Currency Converter (USD → INR)</h2>

        <input
          placeholder="Enter USD"
          onChange={(e) => this.setState({ amount: e.target.value })}
        />

        <button onClick={() => this.convert()}>Convert</button>

        <p>Rate: {this.state.rate}</p>
        <p>INR: {this.state.result}</p>
      </div>
    );
  }
}

export default CurrencyConverter;