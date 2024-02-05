import React, { useState } from 'react'
import Card from './Card';
import{FiChevronLeft,FiChevronRight}  from "react-icons/fi"



const Testimonials = (props) => {
  let reviews = props.reviews;
  const[index,setIndex] = useState(0);
 function leftShiftHandler()
 {
     if(index-1 <0)
     {
      setIndex(reviews.length-1);
     }
     else{
      setIndex(index-1);
     }
 }
 function rightShiftHandler()
 {
   if(index+1>=reviews.length)
   {
    setIndex(0);
   }
   else{
    setIndex(index+1);
   }
 }
 function surpriseHandler()
 {
    setIndex( Math.floor(Math.random()*reviews.length));
 }





  return (
    <div className='test-main'>

      <Card review={reviews[index]} />

      <div className='btn-1'>
        <button 
        onClick={leftShiftHandler}
        
        className='left-arrow'>

          <FiChevronLeft />
        </button>

        <button 
          onClick={rightShiftHandler}

        className='right-arrow'>
          <FiChevronRight />
        </button>
      </div>
      <div>
        <button 
        onClick={surpriseHandler  }
        className='btn-2'>
          Surprise me
        </button>
      </div>

    </div>
  )
}

export default Testimonials
