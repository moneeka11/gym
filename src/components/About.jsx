import React from 'react'
import AboutData from '../Data/AboutData'
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";


export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });

  }, [])
  return (
    <>
      <div className="entry-banner">
        <div className="container">
          <div className="entry-banner-content">
            <h1 class="entry-title">About</h1>
            <div className="breadcrumb-area">
              <div className="entry-breadcrumb">
                <span className='bread1'><a href="#">gymate - </a></span>
                <span className='bread2'><a href="#">About</a></span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="about-sectionn">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 " data-aos="fade-right">
              <div className="image-box">
                <div className="image-border">
                  <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/themes/gymat/assets/element/about-14.svg" alt="" />
                </div>
                <div className="img-inner">
                  <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/03/about-5.jpg" alt="" />
                </div>

              </div>

            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="about-content">
                {
                  AboutData.map((i) => (
                    <>
                      <div className="subtitle">
                        {i.subtitle}
                      </div>
                      <div className="title">
                        <h2>{i.title}</h2>
                      </div>
                      <div className="paragh">
                        <p>{i.p}</p>
                      </div>

                    </>
                  ))
                }



              </div>
              <div className="about-list">
                <ul>
                  <li>Gymat an unknown printer</li>
                  <li>Scraey aretea bled makea type</li>
                  <li>Bookhas survived not onlyive</li>
                  <li>Centuries but also the leap electronic.</li>
                </ul>
              </div>
              <div className="btn-area">
                <div className="banner-btn">
                  <a href="#" className='btn-style2'><span>Contact With Us<i class="fa-solid fa-arrow-right"></i></span></a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="class-sectionn">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="action-box d-flex">
                  <div className="col-lg-6">

                    <div className="content">
                      <div className="cta-title"><h2>Class For Her</h2></div>
                      <div className="cta-button">
                        <a href="#" className="btn-style3"><span>Join Our Team<i class="bi bi-arrow-right"></i></span></a>
                      </div>

                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cta-img">
                      <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/04/feature-3.jpg" alt="" />
                    </div>
                  </div>
                </div>

              </div>

            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="action-box d-flex">
                  <div className="col-lg-6">

                    <div className="content">
                      <div className="cta-title"><h2>Class For Him</h2></div>
                      <div className="cta-button">
                        <a href="#" className="btn-style3"><span>Join Our Team<i class="bi bi-arrow-right"></i></span></a>
                      </div>

                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cta-img">
                      <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/03/feature-4.jpg" alt="" />
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
      <div className="mission-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="history">
                <div className="info-box">
                  <div className="info-item">
                    <div className="info-media">
                      <span className="info-icon">
                      <i class="fa-sharp fa-solid fa-bullseye"></i>

                      </span>

                    </div>
                    <div class="info-content">
                      <h3 class="info-title">Our History</h3>
                      <div class="info-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit Exercitation veniam consequat.</div></div>
                  </div>

                </div>

              </div>

            </div>
            <div className="col-lg-6">
              <div className="info-img">
                <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/04/about-3.jpg" alt="historyimage" />
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-lg-6">
              <div className="info-img">
                <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/04/about-4.jpg" alt="historyimage" />
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="history">
                <div className="info-box">
                  <div className="info-item">
                    <div className="info-media">
                      <span className="info-icon">
                      <i class="fa-solid fa-mountain"></i>

                      </span>

                    </div>
                    <div class="info-content">
                      <h3 class="info-title">Our Mission</h3>
                      <div class="info-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit Exercitation veniam consequat.</div></div>
                  </div>

                </div>

              </div>

            </div>
           
          </div>

        </div>
      </div>



    </>
  )
}
