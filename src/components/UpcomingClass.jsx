import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Classdata from '../Data/Classdata';
import { Link } from 'react-router-dom';



export default function UpcomingClass() {
    return (
        <>
            <div className="class-section">
                <div className="container-fluid">
                    <div className="class-box">
                        <div className="box1">
                            <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/04/shape-82.png" alt="" />
                        </div>
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="subtitle">
                                    Upcomming Class
                                </div>
                                <div className="title">
                                    <h2>We Offer Body Changes Classes</h2>
                                </div>
                                <div className="para">
                                    <p>Gymat an unknown printer took galle type anscr aey aretea bled make a type specimen bookay survived not onlyive centuries.</p>
                                </div>


                            </div>
                            <div className="col-lg-7">
                                <OwlCarousel className='owl-theme' margin={30} nav="true" loop="false">
                                  {
                                    Classdata.map((a)=>(
                                        <>
                                         <div className="box-wrap" data-merge="2">
                                            <div className="image-box">
                                                <img src={a.image} alt="" />
                                                
                                            </div>
                                            <div className="box-content">
                                                <div className="schedule-time">
                                                    <div className="class-icon">
                                                        {a.icon}
                                                    </div>
                                                    <div className="class-title">
                                                        <h3>{a.title}</h3>
                                                    </div>
                                                    <div className="schedule">
                                                        <p>{a.timeicon} {a.time}</p>
                                                    </div>
                                                    <div className="class-btn">
                                                        <Link to="/contact" className='btn-style'><span>{a.button}{a.bicon}</span></Link>
                                                    </div>

                                                </div>
                                            </div>
                                         </div>
                                        </>
                                    ))
                                  }
                                </OwlCarousel>;

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

