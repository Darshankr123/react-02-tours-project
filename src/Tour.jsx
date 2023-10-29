import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">{price}$</span>

      <div className="tour-info">
        <p>{name}</p>
        <p>
          {showInfo ? info : info.substring(0, 200)}
          <button
            className="info-btn"
            type="button"
            onClick={() => {
              setShowInfo(!showInfo);
            }}
          >
            ...{showInfo ? "Read Less" : "Read More"}
          </button>
        </p>
        <button
          type="button"
          className="btn btn-block"
          onClick={() => {
            removeTour(id);
          }}
        >
          remove tour
        </button>
      </div>
    </div>
  );
};

export default Tour;
