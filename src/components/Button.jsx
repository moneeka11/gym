import React from 'react'
import { Link } from 'react-router-dom'


export default function Button() {
  return (
    <>
    <Link to="/"><button className='btn'>Join Class Now</button></Link>
    </>
  )
}
