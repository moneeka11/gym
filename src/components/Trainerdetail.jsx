import React from 'react'
import { useParams } from 'react-router-dom'
import Trainerdata from '../Data/Trainerdata'
import { Link } from 'react-router-dom'

export default function Trainerdetail() {
    let { id } = useParams()
    let tdata = Trainerdata.find((a) => a.id == id)

    return (
        <>
            <div className="entry-banner">
                <div className="container">
                    <div className="entry-banner-content">
                        <h1 class="entry-title">Trainer Details</h1>
                        <div className="breadcrumb-area">
                            <div className="entry-breadcrumb">
                                <span className='bread1'><Link to="/">Gymate - </Link></span>
                                <span className='bread1'><Link to="/trainer">Trainer-</Link></span>
                                <span className='bread2'><Link to="#">{tdata.title}</Link></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="trainer-detail-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="trainer-item">
                                <div className="trainer-info-box">
                                    <div className="trainer-thums">
                                        <a href="#"><img src={tdata.image} alt="trainee" /></a>
                                    </div>
                                    <div class="trainer-info">
                                        <h2 class="trainer-title">{tdata.title}</h2>
                                        <h4 class="trainer-designation">{tdata.subtitle}</h4>
                                    </div>
                                    <div class="trainer-social">
                                        <ul class="trainer-social-icon">
                                            <li><a target="_blank" href="#">
                                                <i class="fab fa-facebook-f"></i>
                                            </a></li>
                                            <li>
                                                <a target="_blank" href="#">
                                                    <i class="fab fa-twitter"></i>
                                                </a>
                                            </li><li>
                                                <a target="_blank" href="#">
                                                    <i class="fab fa-behance">
                                                    </i>
                                                </a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="#">
                                                    <i class="fab fa-dribbble"></i></a></li></ul>
                                    </div>

                                </div>
                            </div>
                            <div class="trainer-class-schedule">
                                <h4>Class Schedule</h4>
                                <ul class="schedule-list">
                                    <li>
                                        <h5><span class="day">Sunday:</span>
                                            <span class="time">6:00 pm - 7:00 pm</span>
                                        </h5>
                                    </li>
                                    <li>
                                        <h5>
                                            <span class="day">Wednesday:</span>
                                            <span class="time">9:00 am - 10:00 am</span>
                                        </h5></li></ul>
                            </div>
                        </div>
                        <div className="col-lg-8"></div>
                    </div>
                </div>

            </div>
        </>
    )
}
