//import react into the bundle
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleCardComponent from "./singleCardComponent.jsx";

const CardComponent = () => {
  return (
    <div className="row m-3">
      <SingleCardComponent text="card1" />
      <SingleCardComponent text="card2" />
      <SingleCardComponent text="card3" />
      <SingleCardComponent text="card4" />
    </div>
  );
};

export default CardComponent;
