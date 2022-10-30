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
                        <div className="col-lg-8">
                            <div className="trainer-contentt">
                                <h3>Biography</h3>
                                <p>Authoritatively disseminate multimedia based total linkage through marketdriven dologies areContinually transform integrated results vismultidiscnary manufacture products. Appropriately foster fully researched.disseminate multimedia based total linkage through marketdrivenvoluptates accusantium. Rerum cum est repudiandaeDeserunt iustovoluptates accusantium.</p>
                                <p>&nbsp;</p>
                                <h3>Qualifications</h3>
                                <ul>

                                    <li>Certificate in Fitness Instructing – Gym</li>
                                    <li>Diploma in Fitness Instructing and Personal Training</li>
                                    <li>Diploma in Instructing Exercise and Fitness</li>
                                </ul>
                                <div className="trainer-skills">
                                    <h3 class="trainer-heading">Skills</h3>
                                    <div className="trainer-skill-each">
                                        <div className="trainer-name">Yoga</div>
                                        <div className="progress">
                                            <div className="progress-bar" data-progress="95%" style={{ width: "95%" }}>
                                                <span>95%</span>


                                            </div>
                                        </div>

                                    </div>
                                    <div className="trainer-skill-each">
                                        <div className="trainer-name">Boxing</div>
                                        <div className="progress">
                                            <div className="progress-bar" data-progress="70%" style={{ width: "70%" }}>
                                                <span>70%</span>


                                            </div>
                                        </div>

                                    </div>
                                    <div className="trainer-skill-each">
                                        <div className="trainer-name">GYM</div>
                                        <div className="progress">
                                            <div className="progress-bar" data-progress="85%" style={{ width: "85%" }}>
                                                <span>85%</span>


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
