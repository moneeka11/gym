import React from 'react'
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

export default function CountUpPage() {
    const [counterOn,setCounterOn]=useState(false)
  return (

   <>
   <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
   <div className="count-num">
    <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="success-count-wrap">
                <div className="count ">
                    <h3> {counterOn &&  <CountUp  start={1} end={10} duration={2} delay={0} />}+</h3>

                </div>
                <div class="count-title"><h4>Expert Trainer</h4></div>

            </div>
           
       

        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <div className="success-count-wrap">
                <div className="count ">
                    <h3> {counterOn &&  <CountUp  start={1} end={500} duration={2} delay={0} />}+</h3>

                </div>
                <div class="count-title"><h4>Trained Students</h4></div>

            </div>
        </div>
    </div>
   </div>
   </ScrollTrigger>
  

   </>
  )
}
