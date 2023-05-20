import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      amount: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ amount: event.target.value });
  };

  handleAddMoney = () => {
    const { balance, amount } = this.state;
    const parsedAmount = parseFloat(amount);
    if (!isNaN(parsedAmount)) {
      this.setState({ balance: balance + parsedAmount, amount: "" });
    }
  };

  handleRemoveMoney = () => {
    const { balance, amount } = this.state;
    const parsedAmount = parseFloat(amount);
    if (!isNaN(parsedAmount)) {
      const newBalance = balance - parsedAmount;
      if (newBalance >= 0) {
        this.setState({ balance: newBalance, amount: "" });
      }
    }
  };

  render() {
    const { balance, amount } = this.state;

    return (
      <div className="App">
        <div className="container">
          <div className="window">
            <p>My Wallet</p>
            <div className="balanceInfo">${balance}</div>
            <input
              className="amount"
              type="number"
              placeholder="Type in your amount"
              value={amount}
              onChange={this.handleInputChange}
            />
            <div className="options">
              <button className="addMoney" onClick={this.handleAddMoney}>
                +
              </button>
              <button className="removeMoney" onClick={this.handleRemoveMoney}>
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
