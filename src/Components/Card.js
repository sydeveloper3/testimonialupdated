
import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';


const Card = (props) => {
  let reviews = props.review
  console.log(reviews);

  return (
    <div className='card'>
      <div className='Image'>
        <img
          className='img'
          src={reviews.image}>

        </img>
        <div className='back-img'></div>
      </div>

      <div className='name' >
        <p className='review-name'>
          {reviews.name}
        </p>
      </div>
      <div className='Job'>
        <p className='review-job'>
          {reviews.job}
        </p>
      </div >
      <div className='l-icon'>

        <FaQuoteLeft />

      </div>

      <div className='text'>
        <p className='review-text'>
          {reviews.text}
        </p>
      </div>

      <div className='r-icon'>
        <FaQuoteRight />
      </div>
    </div>
  )
}

export default Card
