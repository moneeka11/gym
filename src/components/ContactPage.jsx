import React from 'react'

export default function ContactPage() {
  return (
    <>
      <div className="entry-banner">
        <div className="container">
          <div className="entry-banner-content">
            <h1 class="entry-title">Contact</h1>
            <div className="breadcrumb-area">
              <div className="entry-breadcrumb">
                <span className='bread1'><a href="#">gymate - </a></span>
                <span className='bread2'><a href="#">Contact</a></span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="form-information">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <div class="title-text">
                  <h2 class="section-title">We are here for help you! To Shape Your Body.</h2>
                  <div class="section-content">when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic types etting.type specimen It has survived not only five centuries, but also the type specimen book.
                  </div>

                </div>
                <div className="contact-information">
                  <div className="row">
                    <div className="col-lg-6">
                      <div class="contact-address">
                        <h3 class="contact-title">New York City, USA</h3>
                        <div class="section-line-wrap">
                          <span class="section-line section-line-one"></span>
                        </div>
                        <div class="list-item">
                          <div class="list-content">
                            <span> 85 Briston Mint Street, </span>
                          </div>
                        </div>
                        <div class="list-item">
                          <div class="list-content">
                            <span> London, E1 8LG, USA </span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="col-lg-6">
                      <div class="contact-address">
                        <h3 class="contact-title">Opening Hours</h3>
                        <div class="section-line-wrap">
                          <span class="section-line section-line-one"></span>
                        </div>
                        <div class="list-item">
                          <div class="list-content">
                            <span> Mon to Fri: 7:30 am — 1:00 am </span>
                          </div>
                        </div>
                        <div class="list-item">
                          <div class="list-content">
                            <span> Mon to Fri: 7:30 am — 1:00 am </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div class="contact-address">
                        <h3 class="contact-title">Information</h3>
                        <div class="section-line-wrap">
                          <span class="section-line section-line-one"></span>
                        </div>
                        <div class="list-item">
                          <div class="list-content">
                            <span> <a href="tel:+800-123-4567 "> +800-123-4567 </a> </span>
                          </div>
                        </div>
                        <div class="list-item">
                          <div class="list-content">
                            <span> <a href="mailto:gymat@yourname.com"> gymat@yourname.com </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                    <div class="contact-address">
                      <h2 class="contact-title">Follow Us On</h2>
                      <div class="section-line-wrap">
                         <span class="section-line section-line-one"></span>
                         </div>
                         <ul class="social-icons">
                          <li> <a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                          <li> <a href="#"><i class="fab fa-twitter"></i></a></li>
                          <li> <a href="#"><i class="fab fa-instagram"></i></a></li>
                          <li> <a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                          </ul>
                    </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
            <div className="col-lg-6">
                  <div className="contact-form">
                    <div className="contact-info">
                      <div className="title">
                        <h2>Leave Us Your Info</h2>
                      </div>
                    </div>
                    <div className="form-contact">
                      <div className="first-input">
                        <input type="text" className="text" placeholder='Full Name*' />
                      </div>
                      <div className="first-input">
                        <input type="email" name="email" placeholder="E-mail Address*" />
                        
                      </div>
                      <div className="first-input">
                       <select name="opti">
                        <option value="Body Building">Body Building</option>
                        <option value="Boxing">Boxing</option>
                        <option value="Running">Running</option>
                        <option value="Fitness">Fitness</option>
                        <option value="Fitness">Yoga</option>

                        
                       </select>
                        
                      </div>
                      <div className="first-input">
                        <textarea name="textarea" cols="2" rows="6" placeholder='Comment'></textarea>
                      </div>
                      <div className="btnn">
                        <button>Submit Now</button>
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
