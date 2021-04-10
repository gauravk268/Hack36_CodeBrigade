import React from "react";
import { useHistory } from "react-router-dom";

function PaymentSuccess(props) {
  const history = useHistory();
  const delayAndGo = () => {
    setTimeout(() => history.push("/feedback"), 5000);
  };

  return (
    <div className="container text-center">
      <h3 className="display-4 text-success">Payment Received Successfully</h3>
      <h6 className="my-3">You will be redirected to Feedback</h6>
      <div>
        <button className="btn btn-primary my-3">
          <a href="/">Go to Home</a>
        </button>
      </div>
      {delayAndGo()}
    </div>
  );
}

export default PaymentSuccess;
