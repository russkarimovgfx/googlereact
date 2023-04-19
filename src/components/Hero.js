import React from 'react'
import './Hero.css'
import SearchForm from './SearchForm'


function Hero() {
 return (
  <>
   <div className="container">
    <img src="./images/googlelogotransparent.png" alt="google" />
   </div>
   <SearchForm />
   <div className="button-container">
    <button className="button-1">Google Search</button>
    <button className="button-2">I'm Feeling Lucky</button>
   </div>
  </>
 )
}

export default Hero