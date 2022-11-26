import React from 'react'
import { Link } from 'react-router-dom'


export default function ContactBanner() {
    return (
        <>
            <div className="contact-banner">
                <div className="container">
                    <div class="cta-content">
                        <h2 class="cta-title">Need a Fitness Consultant?</h2>
                        <h3 class="cta-phone"> Call:+130-4044888</h3>
                    </div>
                    <div className="btn-area">
                        <div className="banner-btn">
                            <Link to="/contact" className='btn-style2'><span>Contact With Us<i class="fa-solid fa-arrow-right"></i></span></Link>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
