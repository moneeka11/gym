import React from "react";
import { Link } from "react-router-dom";
import Allclassdata from "../Data/Allclassdata";
import LogoSlider from "./LogoSlider";

export default function Classpage() {
  return (
    <>
      <div className="entry-banner">
        <div className="container">
          <div className="entry-banner-content">
            <h1 class="entry-title">Class</h1>
            <div className="breadcrumb-area">
              <div className="entry-breadcrumb">
                <span className="bread1">
                  <Link to="/">Gymate - </Link>
                </span>
                <span className="bread2">
                  <Link to="/class">Class</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="trainer-group">
        <div className="container">
          <div className="row">
            {Allclassdata.map((a) => (
              <>
                <div className="col-lg-4 col-md-6">
                  <div className="t-box">
                    <div className="pic">
                      <Link to={`classdetails/${a.id}`}>
                        <img src={a.image} alt="trainer" />
                      </Link>
                    </div>
                    <div class="trainer-content">
                      <h3 class="trainer-title">
                        <Link to={`classdetails/${a.id}`}>{a.title}</Link>
                      </h3>
                      <div class="trainer-designation">{a.subtitle}</div>
                      <div className="time-sec">{a.time}</div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <LogoSlider />
    </>
  );
}
