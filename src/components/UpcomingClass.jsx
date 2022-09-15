import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Classdata from '../Data/Classdata';



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
                            <div className="col-lg-4">
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
                            <div className="col-lg-8">
                                <OwlCarousel className='owl-theme' margin={10} nav="true" center="true">
                                  {
                                    Classdata.map((a)=>(
                                        <>
                                        <div className="image">
                                            <img src={a.image} alt="" />
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

