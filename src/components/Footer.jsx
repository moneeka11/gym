import React from 'react'

export default function Footer() {
  return (
    <>
     <div className="footer-section">
        <div className="container">
            <div className="image">
                <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/themes/gymat/assets/element/shape-75.png" alt="" />
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <div className="gym-about">
                        <div className="logo">
                            <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/04/gymat_dark-1.svg" alt="" />
                        </div>
                        <div class="footer-about">Gesent vel rutrum purus Nam vel dui eu risus duis dignissim dignissim Suspen disse at eros tempus</div>
                        <ul className="footer-social">
                            <li>
                               <a href="#"><i class="fa-brands fa-facebook-f"></i></a> 
                            </li>
                            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>

                </div>
                <div className="col-lg-3">
                    <div className="footer-class">
                    <h3 class="widgettitle ">Our Classes</h3>
                    <div className="menu-class">
                        <ul>
                            <li><a href="#">Fitness Classes</a></li>
                            <li><a href="#"> Aerobics Classes</a></li>
                            <li><a href="#">Power Yoga</a></li>
                            <li><a href="#">Lean Machines</a></li>
                            <li><a href="#">Full-Body Strength</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="footer-class">
                    <h3 class="widgettitle ">Quick Links</h3>
                    <div className="menu-class">
                        <ul>
                            <li><a href="#">Fitness Classes</a></li>
                            <li><a href="#"> Aerobics Classes</a></li>
                            <li><a href="#">Power Yoga</a></li>
                            <li><a href="#">Lean Machines</a></li>
                            <li><a href="#">Full-Body Strength</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                
                <div className="col-lg-3">
                    <div className="gym-address">
                    <h3 class="widgettitle ">Gymat Location</h3>
                    <ul className="corporate-address">
                        <li>178 West 27th Street, Suite 527, New York NY 10012 United States</li>
                        <li>
                        <i class="fa-solid fa-phone"></i>
                        <a href="#">+1-234-5678901</a>
                        </li>
                        <li>
                        <i class="fa-solid fa-envelope"></i>
                        <a href="#">gymat@yourname.com</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
          
        </div>
     </div>
     <div className="copy-right text-center">
        <div className="container">
        <div class="copyright">
            © 2022 gymat. All Rights Reserved by <a  href="#">RadiusTheme</a></div>
        </div>
     </div>



    </>
  )
}
