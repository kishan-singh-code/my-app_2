import React from "react";
import logo from "./work.svg";
export default function About(props) {
  return (
    <div className="container mt-5">
      <div
        className="card-header bg-secondary"
        style={{
          color: "white",
        }}
      >
        Featured
      </div>
      <div
        className={`card text-${props.mode === "light" ? "dark" : "white"} bg-${
          props.mode === "light" ? "light" : "dark"
        }`}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={logo} className="img-fluid rounded-start" alt="/" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">About Us</h5>
              <p className="card-text">
                Hi, i am Kishan , In this project, which was collaboratively
                made and designed by both students and with the help teacher,
                The products we created for this project were a website based on
                data mining. we use Django framework, the mining is done by
                various machine learning algorithm.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card-footer bg-secondary"
        style={{
          color: "white",
        }}
      >
        @kishansingh
      </div>
    </div>
  );
}
