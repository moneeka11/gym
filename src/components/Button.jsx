import React from 'react'
import { Link } from 'react-router-dom'


export default function Button() {
  return (
    <>
     <div className="search">
     <i class="fa-solid fa-magnifying-glass"></i>
     </div>
    <Link to="/"><button className='btn'>Join Class Now</button></Link>
    </>
  )
}
