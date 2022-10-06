import React from 'react'
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function TraineeSection() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    
      }, [])
  return (
    <>
    <div className="trainer">
        <div className="container">
        <div className="t-banner">
            <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/04/vector-2-1.png" alt="" />
        </div>
        <div className="row text-center">
            <div className="col-lg-12">
            <div class="subtitle">Top Trainers</div>
            <h2 class="section-title">Meet Our Experienced <br/> Cool Trainers</h2>
            </div>
        </div>
        <div className="trainer-grid mt-5">
            <div className="row">
                <div className="col-lg-6  mb-md-5 mb-sm-4" data-aos="fade-right">
                    <div className="trainer-box">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="content">
                                   <h3> <a href="#">Dorian Yates</a></h3>
                                   <h4>Yoga Trainer</h4>
                                </div>
                                <div className="social-icon">
                                    <ul className='d-flex p-0'>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-behance"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-dribbble"></i></a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="trainer-pic">
                                    <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/03/Untitled-2.png" alt="trainer" />

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
                <div className="col-lg-6 " data-aos="fade-left">
                <div className="trainer-box">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="content">
                                   <h3> <a href="#">Stefi Cohen</a></h3>
                                   <h4>Body Builder</h4>
                                </div>
                                <div className="social-icon">
                                    <ul className='d-flex p-0'>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-behance"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-dribbble"></i></a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="trainer-pic">
                                    <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/03/team-17.png" alt="trainer" />

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className="trainer-grid mt-4">
            <div className="row">
                <div className="col-lg-6 mb-md-5 mb-sm-4 " data-aos="fade-right">
                    <div className="trainer-box">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <div className="content">
                                   <h3> <a href="#">Flex Wheeler</a></h3>
                                   <h4>Yoga Trainer</h4>
                                </div>
                                <div className="social-icon">
                                    <ul className='d-flex p-0'>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-behance"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-dribbble"></i></a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <div className="trainer-pic">
                                    <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/03/3.png" alt="trainer" />

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
                <div className="col-lg-6" data-aos="fade-left">
                <div className="trainer-box">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <div className="content">
                                   <h3> <a href="#">Shawn Ray</a></h3>
                                   <h4>Body Builder</h4>
                                </div>
                                <div className="social-icon">
                                    <ul className='d-flex p-0'>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-behance"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-dribbble"></i></a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <div className="trainer-pic">
                                    <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/03/4.png" alt="trainer" />

                                </div>

                            </div>
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
