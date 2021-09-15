import React from "react";
import { useHistory } from "react-router-dom";

function FeedbackSuccess(props) {
  const history = useHistory();
  const delayAndGo = () => {
    setTimeout(() => history.push("/"), 5000);
  };

  return (
    <div className="container text-center">
      <h3 className="display-4 text-success">
        Feedback submitted Successfully
      </h3>
      <h6 className="my-3">You will be redirected to Home</h6>
      <div>
        <button className="btn btn-primary my-3">
          <a href="/">Go to Home</a>
        </button>
      </div>
      {delayAndGo()}
    </div>
  );
}

export default FeedbackSuccess;
