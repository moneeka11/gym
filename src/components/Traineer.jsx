import React from 'react'
import Trainerdata from '../Data/Trainerdata'
import LogoSlider from './LogoSlider'
import { Link } from 'react-router-dom'

export default function Traineer() {
    return (
        <>
            <div className="entry-banner">
                <div className="container">
                    <div className="entry-banner-content">
                        <h1 class="entry-title">Trainer</h1>
                        <div className="breadcrumb-area">
                            <div className="entry-breadcrumb">
                                <span className='bread1'><Link to="/">Gymate - </Link></span>
                                <span className='bread2'><Link to="/trainer">Trainer</Link></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="trainer-group">
                <div className="container">
              
                    <div className="row">
                    {
                                Trainerdata.map((a)=>(
                                    <>
                        <div className="col-lg-4 col-md-6">
                          
                                    <div className="t-box">
                                <div className="pic">
                                <Link to={`trainerdetails/${a.id}`}>
                                    <img src={a.image} alt="trainer" />
                                    </Link>

                                </div>
                                <div class="trainer-content">
                                    <h3 class="trainer-title">
                                        <Link to={`trainerdetails/${a.id}`}>{a.title}</Link>
                                    </h3>
                                    <div class="trainer-designation">{a.subtitle}</div>
                                    <ul class="trainer-social-icon">
                                        <li><a target="_blank" href="#">
                                            <i class="fab fa-facebook-f" aria-hidden="true"></i>
                                        </a></li>
                                        <li>
                                            <a target="_blank" href="#">
                                                <i class="fab fa-twitter" aria-hidden="true"></i>
                                            </a></li><li><a target="_blank" href="#"><i class="fab fa-behance" aria-hidden="true"></i></a></li><li><a target="_blank" href="#"><i class="fab fa-dribbble" aria-hidden="true"></i></a></li></ul></div>
                            </div>
                            
                        </div>
                        </>
                                ))
                            }

                    </div>
                   
                            
                </div>
            </div>
            <LogoSlider/>
        </>
    )
}
