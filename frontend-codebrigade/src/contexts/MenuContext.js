import React, { useState, createContext, useEffect } from "react";
import { notes } from "../data";

export const MenuContext = createContext();

export const MenuProvider = (props) => {
  const [food, setFood] = useState([...notes]);
  const [cart, setCart] = useState([]);
  const [qrScan, setQrScanned] = useState();
  const [tableNo, setTableNo] = useState();

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

  useEffect(() => {
    const getLocalQR = () => {
      if (localStorage.getItem("qrScanned") === null) {
        localStorage.setItem("qrScanned", false);
      } else {
        let qrValueLocal = localStorage.getItem("qrScanned");
        setQrScanned(qrValueLocal);
      }
    };

    getLocalQR();
  }, []);

  useEffect(() => {
    const saveLocalQR = () => {
      localStorage.setItem("qrScanned", qrScan);
    };

    saveLocalQR();
  }, [qrScan]);

  useEffect(() => {
    const getLocalQR = () => {
      if (localStorage.getItem("tableNoLocal") === null) {
        localStorage.setItem("tableNoLocal", 0);
      } else {
        let tableValueLocal = localStorage.getItem("tableNoLocal");
        setTableNo(tableValueLocal);
      }
    };

    getLocalQR();
  }, []);

  useEffect(() => {
    const saveLocalTableNo = () => {
      localStorage.setItem("tableNoLocal", tableNo);
    };

    saveLocalTableNo();
  }, [tableNo]);

  const value = {
    food,
    setFood,
    cart,
    setCart,
    qrScan,
    setQrScanned,
    tableNo,
    setTableNo,
  };

  return (
    <MenuContext.Provider value={value}>{props.children}</MenuContext.Provider>
  );
};
