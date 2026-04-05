import React from "react";
import "./pages.css";

class GSTCalculator extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: "",
      gst: "",
      gstAmount: 0,
      total: 0
    };
  }

  calculate() {
    let amount = parseFloat(this.state.amount) || 0;
    let gst = parseFloat(this.state.gst) || 0;

    let gstAmount = (amount * gst) / 100;
    let total = amount + gstAmount;

    this.setState({
      gstAmount: gstAmount.toFixed(2),
      total: total.toFixed(2)
    });
  }

  render() {
    return (
      <div className="page">
        <h2>GST Calculator</h2>

        <div className="form-group">
          <label>Enter Amount:</label>
          <input
            type="number"
            value={this.state.amount}
            onChange={(e) =>
              this.setState({ amount: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>GST Percentage (%):</label>
          <input
            type="number"
            value={this.state.gst}
            onChange={(e) =>
              this.setState({ gst: e.target.value })
            }
          />
        </div>

        <button onClick={() => this.calculate()}>
          Calculate GST
        </button>

        <div className="gst-result">
          <div className="result-row">
            <span>GST Amount:</span>
            <span>₹ {this.state.gstAmount}</span>
          </div>

          <div className="result-row">
            <span>Total Amount:</span>
            <span>₹ {this.state.total}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default GSTCalculator;