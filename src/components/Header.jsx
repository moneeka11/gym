import React from 'react'
import Navbar from './Navbar'

export default function Header() {
  return (
    <>
    <div className="information">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <div className="topbar-left d-flex">
                        <div className="location">
                        <i className="bi bi-geo-alt"></i>
                        <span>Location:</span>
                        1050 Anewtyop Way Irvine, New York.
                        </div>
                        <div className="header-mail">
                        <i class="bi bi-envelope"></i>
                        <span>E-mail:</span>
                         <a href="#">email@example.com</a>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6">
                    <div className="topbar-right d-flex  justify-content-end">
                        <div className="schedule">
                        <i class="bi bi-clock"></i>
                        <span>Opening Hours:</span>
                        Mon - Sat:8.00 am-7.00 pm
                        </div>
                        <div className="phone">
                        <i class="bi bi-telephone"></i>
                        <span>Let's Phone:</span>
                        +123-(233)-375

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Navbar/>
    </>
  )
}
