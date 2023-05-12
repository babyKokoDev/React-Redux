import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import {createStore} from "redux"

const initialStore = {
  count : 10,
  name : "Elijah"
}

const reducer = (state, action) => {
  console.log({state, action})
  return state
}

const store = createStore(reducer, initialStore)
console.log(store.getState())

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart = {store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
