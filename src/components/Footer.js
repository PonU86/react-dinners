import React from 'react'
import BroccoliSoup from '../assets/broccoli-soup.jpeg';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className="leftSide">
        <p>Preston and Ashley's Dinner Meals</p>
      </div>
      <div className='rightSide'>
        <img src={BroccoliSoup} />
      </div>
    </div>
  )
}

export default Footer
