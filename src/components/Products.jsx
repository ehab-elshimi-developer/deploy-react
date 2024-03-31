import React, { Component } from "react";

class Products extends Component {
  render() {
    return (
      <>
        <div className="bg-zinc-700 text-zinc-100 flex items-center justify-evenly py-3 rounded-2xl px-8 text-[0.75em]">
          <p>name: {this.props.product.name}</p>
          <p>price: {this.props.product.price}</p>
          <p>items: {this.props.product.items}</p>
          <p>total: {this.props.product.price * this.props.product.items}</p>
        </div>
      </>
    );
  }
}
export default Products;
