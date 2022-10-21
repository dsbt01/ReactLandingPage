//import react into the bundle
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleCardComponent from "./singleCardComponent.jsx";

const CardComponent = () => {
  return (
    <div className="row mt-3">
      <SingleCardComponent text="card1" />
    </div>
  );
};

export default CardComponent;
