import React, { Component } from "react";
import Products from "./Products";

class Cart extends Component {
  render() {
    return (
      <div className="w-3/4 mx-auto mt-[5em] rounded-xl">
        <div className="flex items-center h-20 text-white bg-zinc-900 justify-evenly rounded-2xl">
          <button className="btn btn-neutral">empty</button>
          <button className="btn btn-primary">reset</button>
          <button className="btn btn-secondary" onClick={this.props.changeMode}>
            Change Mode
          </button>
        </div>
        <div className="mt-[1em] text-3xl flex flex-col justify-center  gap-y-5 ">
          {this.props.products.map((product, index) => (
            <div key={index}>
              <Products product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Cart;
