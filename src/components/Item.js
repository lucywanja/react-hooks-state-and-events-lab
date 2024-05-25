import React from "react";
import { useState } from 'react'

function Item({ name, category }) {

const [inCart, setInCart] = useState(false);

function handleClick () {
  // The setInCart(!inCart) correctly toggles the state of inCart by setting it to the opposite of its current value.
  setInCart(!inCart);
}

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={inCart ? "remove" : "add"}>
      {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
