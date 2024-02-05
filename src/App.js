import logo from './logo.svg';
import './App.css';
import review from "./data.js";
import Testimonials from './Components/Testimonials';
import React from 'react'

const App = () => {
  return (
    <div className='main'>

    <div className='sub-main'>

      <h1 className='heading'>

        Our Testimonial

      </h1>

       <div className='underline'></div>
       
       <Testimonials reviews = {review}/>
     
      
    </div>
    </div>
  )
}

export default App



