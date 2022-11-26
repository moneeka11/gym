import React from "react";
import { Link, useParams } from "react-router-dom";
import Allclassdata from "../Data/Allclassdata";


export default function Classdetail() {
  let { id } = useParams();
  let classdatas = Allclassdata.find((a) => a.id == id);
  return (
    <>
      <div className="entry-banner">
        <div className="container">
          <div className="entry-banner-content">
            <h1 class="entry-title">{classdatas.title}</h1>
            <div className="breadcrumb-area">
              <div className="entry-breadcrumb">
                <span className="bread1">
                  <Link to="/">Gymate - </Link>
                </span>
                <span className="bread1">
                  <Link to="/class">Class - </Link>
                </span>
                <span className="bread2">
                  <Link to="#">{classdatas.title}</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="classes">
        <div className="container">
          <div className="top-boxes py-5">
            <div className="row">
              <div className="col-lg-7">
                <div className="img-boxs">
                  <img src={classdatas.image} alt="classdetailphoto" />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="payment-detail">
                  <h3 className="info-title">Course Info</h3>
                  <ul class="class-info-list">
                    <li>
                      <h4>
                        {" "}
                        Course Price:{" "}
                        <span class="price">{classdatas.courseprice}</span>{" "}
                        <sub class="unit">/month</sub>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        Course Duration:
                        <span class="item">{classdatas.duration}</span>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        Class Intensity:
                        <span class="item">{classdatas.intensity}</span>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        Class Name:<span class="item">{classdatas.title}</span>
                      </h4>
                    </li>
                  </ul>
                  <div class="class-btn">
                    <a href="#" class="btn-style">
                      <span>
                        JOIN NOW<i class="bi bi-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-box">
            <div className="row">
              <div className="col-lg-12 col-mg-12 col-sm-12">
                <h3>The Best Body Fitness in Town</h3>
                <p>
                  Authoritatively disseminate multimedia based total linkage
                  through market-driven metho dologies. Continually transform
                  integrated results vis-a-vis multidisciplinary manufacture
                  products. Appropriately foster fully researched innovation
                  rather than backend supply chains results vis-a-vis
                  multidisciplin ary manufactured.
                </p>
              </div>
            </div>
          </div>
          <div className="things-bring">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h3>Things To Bring</h3>
                <p>
                  Authoritatively disseminate multimedia based total linkage
                  through market-driven metho dologies. Continually transform
                  integrated results.
                </p>
                <div className="things">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="info-box">
                        <div className="info-thing">
                          <span>
                            <i class="fa-solid fa-bottle-water"></i>
                          </span>
                        </div>
                        <div className="info-content">
                          <h3 class="info-title">Water Bottle</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="info-box">
                        <div className="info-thing">
                          <span>
                            <i class="fa-solid fa-shoe-prints"></i>
                          </span>
                        </div>
                        <div className="info-content">
                          <h3 class="info-title">Sport Shoes</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="info-box">
                        <div className="info-thing">
                          <span>
                            <i class="fa-solid fa-shirt"></i>
                          </span>
                        </div>
                        <div className="info-content">
                          <h3 class="info-title">Extra Clothes</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="info-box">
                        <div className="info-thing">
                          <span>
                            <i class="fa-solid fa-toilet-paper"></i>
                          </span>
                        </div>
                        <div className="info-content">
                          <h3 class="info-title">Towel</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="class-table ">
            <h3>Class Time Table</h3>
            <p>
              Authoritatively disseminate multimedia based total linkage through
              market-driven metho dologies. Continually transform integrated
              results.
            </p>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Day/Time </th>
                 
                 
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{classdatas.time}</td>
                  
                 
                </tr>
              </tbody>
            </table>
          </div> */}
        </div>
      </div>
    </>
  );
}
