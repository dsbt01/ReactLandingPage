//import react into the bundle
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Middle = () => {
    return(
         <div>
 <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
        <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra diam sit amet. Lacus laoreet non curabitur gravida arcu. Porttitor massa id neque aliquam vestibulum.</p>
        <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
      </div>
    </div>
</div>
    );
} ;

export default Middle;
