import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Allclassdata from '../Data/Allclassdata';


export default function Classdetail() {
    let {id} =useParams();
    let classdatas=Allclassdata.find((a)=> a.id == id);
  return (
    <>
     <div className="entry-banner">
                <div className="container">
                    <div className="entry-banner-content">
                        <h1 class="entry-title">{classdatas.title}</h1>
                        <div className="breadcrumb-area">
                            <div className="entry-breadcrumb">
                                <span className='bread1'><Link to="/">Gymate - </Link></span>
                                <span className='bread1'><Link to="/class">Class - </Link></span>
                                <span className='bread2'><Link to="#">{classdatas.title}</Link></span>
                            </div>
                        </div>
                    </div>
                </div>

     </div>
     <div className="classes">
        <div className="container">
            <div className="top-boxes">
                <div className="row">
                    <div className="col-lg-7">
                        
                    </div>
                </div>
            </div>
        </div>
     </div>

    </>
  )
}
