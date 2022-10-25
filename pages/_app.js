import "../styles/globals.css";

// logic
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, []);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price;
    }
    setSubTotal(subt);
  };

  const addToCart = (itemCode, qty, price, name, image) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
      newCart[itemCode].price = cart[itemCode].price + price;
    } else {
      newCart[itemCode] = { qty: 1, price, name, image };
    }

    setCart(newCart);
    saveCart(newCart);
  };

  const removeFromCart = (itemCode, qty, price, name, image) => {
    let newCart = cart;
    delete newCart[itemCode];
    setCart(newCart);
    saveCart(newCart);

    // --> this code can be used to increase or decrease the quantity
    // since its not in the assigment to I am commenting this <--

    // if (itemCode in cart) {
    //   newCart[itemCode].qty = cart[itemCode].qty - qty;
    // }s
    // if (newCart[itemCode].qty <= 0) {
    // delete newCart[itemCode];
    // }
  };
  return (
    <>
      <Navbar
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        subTotal={subTotal}
      />
      <Component
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        subTotal={subTotal}
        {...pageProps}
      />
    </>
  );
}

export default MyApp;
