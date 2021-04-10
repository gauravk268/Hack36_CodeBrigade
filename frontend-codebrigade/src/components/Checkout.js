
import React, { useState ,useContext } from "react";
import PayPal from "./PayPal";
import { MenuContext } from "../contexts";

function Checkout() {
  const [checkout, setCheckOut] = useState(false);

  const value = useContext(MenuContext);
  const cart = [...value.cart];

  let totalCost = 0;
  const orderValue = () => {
    cart.forEach((food) => {
      totalCost += food.qty * food.price;
    });
    totalCost = Math.round(totalCost).toFixed(2);
  };

  orderValue();


  return (
    <div >
      {checkout ? (
        <PayPal  bill={totalCost}/>
      ) : (
        <button className="order btn btn-primary me-2"
          onClick={() => {
            setCheckOut(true);
          }}
        >
         Pay and Checkout
        </button>
      )}
    </div>
  );
}

export default Checkout;
