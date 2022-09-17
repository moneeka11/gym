import Aos from 'aos';
import "aos/dist/aos.css"
import React from 'react'
import { useEffect } from 'react';
import { Homedata } from '../Data/Homedata'
import Aboutsection from './Aboutsection';
import Choosesection from './Choosesection';
import Classes from './Classes';
import UpcomingClass from './UpcomingClass';

export default function Home() {
 useEffect(()=>{
  Aos.init({duration:2000});

 },[])
  return (
    <>
    <div className="banner-main">
      <div className="container-fluid p-0">
        <div className="banner-slide">
          <div className="banner-image"></div>
          
        </div>
        <div className="banner-content-wrap"  >
          <div className="row">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div className="banner-content">
                {
                  Homedata.map((a)=>(<>
                     <div className="subtitle">
                    {a.subtitle}
                </div>
                <div className="title">
                  <h2>{a.title}</h2>
                </div>
                <div className="para">
                  <p>{a.p}</p>
                  <p>{a.pp}</p>
                </div>
                <div className="banner-btn">
                  <a href="#" className='btn-style2'><span>Our Classes<i class="fa-solid fa-arrow-right"></i></span></a>
                </div>

                  </>
                 

                  ))

                }
                
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <Aboutsection/>
    <UpcomingClass/>
    <Classes/>
    <Choosesection/>

    </>
  )
}
