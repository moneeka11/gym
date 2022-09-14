import React from 'react'
import Aboutsectiondata from '../Data/Aboutsectiondata'
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react'

export default function Aboutsection() {
    useEffect(()=>{
        Aos.init({duration:2000});
      
       },[])
  return (
    <>
    <div className='about-section'>
        <div className="container-fluid">
            <div className="about-container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="image-container">
                            <div className="image-box">
                                <div className="image-item">
                                    <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/04/about-3-1.png" alt="about image" />
                                </div>
                                <div className="image-shape-element">
                                    <ul className="d-none d-lg-block">
                                        <li className='motion-effects1'>
                                            <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/themes/gymat/assets/element/shape-102.png" alt="dot" />
                                        </li>
                                        <li className="motion-effects2">
                                            <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/themes/gymat/assets/element/shape-86.png" alt="letter" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 " data-aos="fade-up-left">
                        <div className="about-content">
                            {
                                Aboutsectiondata.map((i)=>(
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
                        <div className="info-box">
                            <div className="info-item d-flex">
                                <div className="info-media">
                                    <span className="info-img">
                                        <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/03/liftingmachine.png" alt="imgg" />
                                    </span>
                                </div>
                                <div className="info-content">
                                    <h3 className="info-title">
                                    Modern Equipment
                                    </h3>
                                    <div className="info-text">Gymat an unknown printer took a galley of type and scraey.</div>
                                </div>
                            </div>
                            <div className="info-item d-flex">
                                <div className="info-media">
                                    <span className="info-img">
                                        <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/03/ball.png" alt="imgg" />
                                    </span>
                                </div>
                                <div className="info-content">
                                    <h3 className="info-title">
                                    Body Fitness
                                    </h3>
                                    <div className="info-text">Gymat an unknown printer took a galley of type and scraey.</div>
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
