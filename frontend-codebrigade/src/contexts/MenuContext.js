import React, { useState, createContext } from "react";
import { notes } from "../data";

export const MenuContext = createContext();

export const MenuProvider = (props) => {
  const [food, setFood] = useState([...notes]);
  const [cart, setCart] = useState([]);

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
