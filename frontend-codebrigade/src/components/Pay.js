import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { MenuContext } from "../contexts";
import Checkout from "./Checkout"
function Pay(props) {
  const value = useContext(MenuContext);
  const history = useHistory();
  // const setQrScanned = value.setQrScanned;

  const paymentSuccess = () => {
    value.setQrScanned(false);
    value.setTableNo(0);
    value.setCart([]);
    history.push("/feedback");
  };

  return (
    <div className="pay container">
      <div className="jumbotron text-center">
        <button className="btn btn-primary" >
          <Checkout amount=""/>
        </button>
      </div>
    </div>
  );
}

export default Pay;
