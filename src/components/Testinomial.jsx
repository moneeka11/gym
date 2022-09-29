import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Testimonialdata from '../Data/Testimonialdata';

export default function Testinomial() {
    return (
        <>
            <div className="testimonail">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="content">
                                <div class="subtitle">Testimonials</div>
                                <h2 class="section-title">Some Reviews From Our Trusted Clients</h2>
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="parag">
                                <p>Gymatan unknown printer took lle type anscraey retea bled maketype specimen bookayurvived ot onlyive centuries.Gymatan unknown printer took lle type anscraey.</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-wrapper">
                        <div className="row">
                            <div className="col-lg-5  p-0">
                                <div className="img-box">
                                    <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/05/testimonial-7-1.jpg" alt="testinomial" />

                                </div>

                            </div>

                            <div className="col-lg-7  p-0">
                                <div className="slider-testinomail">
                                    <OwlCarousel className='owl-theme' margin={30} nav="true" loop="true" items={1}>
                                        {
                                            Testimonialdata.map((a) => (
                                                <>
                                                    <div className="testinomial-box-wrap">
                                                        <div class="testimonial-qoute">
                                                            <img src={a.image1} alt="quote" />
                                                        </div>
                                                        <div className="pgh">
                                                            <p>{a.para}</p>

                                                        </div>
                                                        <div class="testimonial-content">
                                                            <h3 class="testimonial-title">{a.name}</h3>
                                                            <div class="testimonial-designation"> {a.designation}</div>
                                                        </div>


                                                    </div>


                                                </>
                                            ))



                                        }

                                    </OwlCarousel>

                                </div>



                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
