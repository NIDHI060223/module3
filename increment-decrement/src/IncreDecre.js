import React, { useState } from "react";

function IncreDecre() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <h1>Increment Decrement Number</h1>
            <div>
              <h3>{num}</h3>
            </div>
            <div className="mb-3">
              <button
                className="btn btn-success mx-3"
                onClick={() => {
                  setNum(num + 1);
                }}
              >
                Increment
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  setNum(num - 1);
                }}
              >
                Decrement
              </button>
            </div>
            <div>
              <button
                className="btn btn-warning"
                onClick={() => {
                  setNum(0);
                }}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncreDecre;
