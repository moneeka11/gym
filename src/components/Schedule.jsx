import React from 'react'
import { Link } from 'react-router-dom';
import LogoSlider from "./LogoSlider";


export default function Schedule() {
  return (
    <>
      <div className="entry-banner">
        <div className="container">
          <div className="entry-banner-content">
            <h1 class="entry-title">Schedule</h1>
            <div className="breadcrumb-area">
              <div className="entry-breadcrumb">
                <span className="bread1">
                  <Link to="/">Gymate - </Link>
                </span>
                <span className="bread2">
                  <Link to="/schedule">schedule</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="table-info">
        <div className="container">
          <table class="table table-bordered table-dark">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">MON</th>
                <th scope="col">TUE</th>
                <th scope="col">WED</th>
                <th scope="col">THUR</th>
                <th scope="col">FRI</th>
                <th scope="col">SAT</th>
                <th scope="col">SUN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">9:00am</th>

                <td>Fitness</td>
                <td>Boxing</td>
                <td>Cycling</td>
                <td></td>
                <td>Crossfit</td>
                <td>Power Lifting</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">10:00am</th>

                <td>Body Building</td>
                <td></td>
                <td></td>
                <td>Crossfit</td>
                <td>Karate</td>
                <td></td>
                <td>Power Lifting</td>
              </tr>
              <tr>
                <th scope="row">11:00am</th>
                <td></td>
                <td>Yoga</td>
                <td>Power Lifting</td>
                <td>Yoga</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">1:00am</th>
                <td></td>
                <td></td>

                <td>Fitness</td>
                <td>Boxing</td>
                <td>Meditation</td>
                <td>Boxing</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">4:00pm</th>
                <td>Boxing</td>
                <td>Running</td>
                <td></td>
                <td>Meditation</td>

                <td></td>
                <td>Power Lifting</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">6:00pm</th>
                <td></td>
                <td>Yoga</td>
                <td>Power Lifting</td>
                <td>Yoga</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <LogoSlider />
    </>
  );
}
