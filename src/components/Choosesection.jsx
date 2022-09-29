import React from 'react'
import { Choosesectiondata } from '../Data/Choosesection'
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react'
import CountUpPage from './CountUpPage';

export default function Choosesection() {
  useEffect(() => {
    Aos.init({ duration: 2000 });

  }, [])
  return (
    <>
      <div className="choose-category">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-box">
                <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/04/service-2.png" alt="" />
              </div>
              <div className="image-shape-element ">
                <ul className="d-none d-xl-block">
                  <li className='motion-effects1'>
                    <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/themes/gymat/assets/element/shape-97.png" alt="dot" />
                  </li>
                  <li className="motion-effects2">
                    <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/themes/gymat/assets/element/shape-96.png" alt="letter" />
                  </li>
                </ul>


              </div>
            </div>
            <div className="col-lg-6" >
              <div className="content">
                {
                  Choosesectiondata.map((i) => {
                    return(<>
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
                    )
                      
                    
                   })

                }
              </div>
              <div className="choose-info-box mb-5">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="choose-info-item">
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

                  </div>
                  <div className="col-lg-6">
                    <div className="choose-info-item">
                      <div className="info-media">
                        <span className="info-img">
                          <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/04/Group-47-1.png" alt="imgg" />
                        </span>
                      </div>
                      <div className="info-content">
                        <h3 className="info-title">
                          Weight Balance
                        </h3>
                        <div className="info-text">Gymat an unknown printer took a galley of type and scraey.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CountUpPage/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
