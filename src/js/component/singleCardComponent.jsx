//import react into the bundle
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const singleCardComponent = (props) => {
  return (
    <div className="card col-3" >
      <img src="" className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">{props.text}</p>
        <a href="#" className="btn btn-primary">
          Find out more!
        </a>
      </div>
    </div>
  );
};

export default SingleCardComponent;