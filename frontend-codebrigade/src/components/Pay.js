import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { MenuContext } from "../contexts";

function Pay(props) {
  const value = useContext(MenuContext);
  const history = useHistory();
  // const setQrScanned = value.setQrScanned;

  const handlePayment = () => {
    value.setQrScanned(false);
    history.push("/feedback");
  };

  return (
    <div className="pay container">
      <div className="jumbotron text-center">
        <button className="btn btn-primary" onClick={handlePayment}>
          Pay and Checkout
        </button>
      </div>
    </div>
  );
}

export default Pay;
