import React, { Component } from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";

class App extends Component {
  state = {
    products: [
      { id: 0, name: "shipcy", price: 100, items: 10 },
      { id: 1, name: "pepsi", price: 200, items: 20 },
      { id: 2, name: "cigaretes", price: 300, items: 30 },
      { id: 3, name: "kranshy", price: 400, items: 40 },
      { id: 4, name: "molto", price: 500, items: 50 },
    ],
    mode: true,
  };

  changeMode = () => {
    this.setState({
      mode: !this.state.mode,
    });
  };

  render() {
    return (
      <div
        className={`h-screen ${
          this.state.mode
            ? "bg-lime-600 text-white "
            : "bg-red-950 text-stone-900"
        } `}
      >
        <Header mode={this.state.mode} />
        <Cart
          changeMode={this.changeMode}
          mode={this.state.mode}
          products={this.state.products}
        />
      </div>
    );
  }
}
export default App;
