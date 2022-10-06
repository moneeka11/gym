import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Logodata from '../Data/Logodata';

export default function LogoSlider() {
  return (
    <><div className="logo-slider-wrapper  ">
        <div className="container">
            <OwlCarousel className='owl-theme' margin={30}  loop="true" items={5} autoplay={true}>
                {
                    Logodata.map((a)=>(
                        <>
                        <div className="item">
                            <div className="imge">
                                <img src={a.logo} alt="logo-image" />
                            </div>
                        </div>
                        </>
                    ))
                }

            </OwlCarousel>

        </div>
    </div>

    </>
  )
}
