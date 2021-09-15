import React from "react";

function Feedback(props) {
  return (
    <div className="feedback container">
      <div className="card jumbotron">
        <div className="card-body">
          <h2 className="text-center mb-4">Feedback</h2>
          <form action="/feedback-success">
            <div className="form-group" id="feedbackFood">
              <p className="form-label">How was your food?</p>
              <select id="foodQual">
                <option disabled selected value="0">
                  --Choose an option--
                </option>
                <option value="5">5 - Outstanding</option>
                <option value="4">4 - Good</option>
                <option value="3">3 - It was OK </option>
                <option value="2">2 - Bad </option>
                <option value="1">1 - Terrible </option>
              </select>
            </div>

            <div className="form-group" id="feedbackService">
              <p className="form-label">How was the service?</p>
              <select id="serviceQual">
                <option disabled selected value="0">
                  --Choose an option--
                </option>
                <option value="5">5 - Outstanding</option>
                <option value="4">4 - Good</option>
                <option value="3">3 - It was OK </option>
                <option value="2">2 - Bad </option>
                <option value="1">1 - Terrible </option>
              </select>
            </div>

            <div className="form-group" id="feedbackService">
              <p className="form-label">How was your experience with CBG?</p>
              <select id="expQual">
                <option disabled selected value="0">
                  --Choose an option--
                </option>
                <option value="5">5 - Outstanding</option>
                <option value="4">4 - Good</option>
                <option value="3">3 - It was OK </option>
                <option value="2">2 - Bad </option>
                <option value="1">1 - Terrible </option>
              </select>
            </div>

            <div className="form-group" id="email">
              <p className="form-label">Email</p>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="email"
              />
              <small id="emailHelp" class="form-text text-muted">
                For contact tracing purposes (voluntary)
              </small>
            </div>

            <button className="btn btn-primary" type="submit">
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
