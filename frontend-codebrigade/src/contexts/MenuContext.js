import React, { useState, createContext, useEffect } from "react";
import { notes } from "../data";

export const MenuContext = createContext();

export const MenuProvider = (props) => {
  const [food, setFood] = useState([...notes]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getLocalCart = () => {
      if (localStorage.getItem("cartFood") === null) {
        localStorage.setItem("cartFood", JSON.stringify([]));
      } else {
        let cartFoodLocal = JSON.parse(localStorage.getItem("cartFood"));
        setCart(cartFoodLocal);
      }
    };

    getLocalCart();
  }, []);

  useEffect(() => {
    const saveLocalCart = () => {
      localStorage.setItem("cartFood", JSON.stringify(cart));
    };

    saveLocalCart();
  }, [cart]);

  const value = {
    food,
    setFood,
    cart,
    setCart,
  };

  return (
    <MenuContext.Provider value={value}>{props.children}</MenuContext.Provider>
  );
};
