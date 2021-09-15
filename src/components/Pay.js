import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { MenuContext } from "../contexts";
function Pay(props) {
  const value = useContext(MenuContext);
  const history = useHistory();
  // const setQrScanned = value.setQrScanned;

  const paymentSuccess = () => {
    value.setQrScanned(false);
    value.setTableNo(0);
    value.setCart([]);
    history.push("/payment-success");
  };

  return (
    <div className="pay container">
      <div className="jumbotron text-center">
        <button className="btn btn-primary" onClick={paymentSuccess}>
          Pay and Checkout
        </button>
      </div>
    </div>
  );
}

export default Pay;
