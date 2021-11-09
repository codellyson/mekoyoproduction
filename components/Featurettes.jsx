import React from "react";

function Featurettes() {
  return (
    <div>
      <div className="row featurette my-5 py-5 align-items-center ">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            First featurette heading.{" "}
            <span className="text-sharp-gold">It’ll blow your mind.</span>
          </h2>
          <p className="lead">
            Some great placeholder content for the first featurette here.
            Imagine some exciting prose here.
          </p>
        </div>
        <div className="col-md-5">
          <img
            src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBtYW4lMjBwb3RyYWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            className="img-fluid"
          />
        </div>
      </div>

      <div className="row featurette my-5 py-5 align-items-center">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">
            Oh yeah, it’s that good.{" "}
            <span className="text-sharp-gold">See for yourself.</span>
          </h2>
          <p className="lead">
            Another featurette? Of course. More placeholder content here to give
            you an idea of how this layout would work with some actual
            real-world content in place.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            src="https://images.unsplash.com/photo-1528109688329-6a043167789d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJsYWNrJTIwbWFuJTIwcG90cmFpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            className="img-fluid"
          />
        </div>
      </div>

      <div className="row featurette my-4 align-items-center">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            And lastly, this one.{" "}
            <span className="text-sharp-gold">Checkmate.</span>
          </h2>
          <p className="lead">
            And yes, this is the last block of representative placeholder
            content. Again, not really intended to be actually read, simply here
            to give you a better view of what this would look like with some
            actual content. Your content.
          </p>
        </div>
        <div className="col-md-5">
          <img
            src="https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBtYW4lMjBwb3RyYWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Featurettes;
