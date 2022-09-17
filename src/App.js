import React, { useEffect, useState } from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './Style/style.scss'

import Header from './components/Header'
import { RingLoader } from 'react-spinners'



export default function App() {
  const[loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(false);
    setTimeout(()=>{
      setLoading(false)
    },4000)

  },[])
  return (
    <>
    {
      loading ?
      <div className='load'> <RingLoader color={'#FC3059'} loading={loading}  size={120} /></div>
    

     
      : <Header/>
    }
   
    </>
  )
}
