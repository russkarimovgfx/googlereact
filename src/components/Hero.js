import React from 'react'
import './Hero.css'
import SearchForm from './SearchForm'
import store from '../store/';


function Hero(props) {
 return (
  <>
   <div className="container">
    <img src="./images/googlelogotransparent.png" alt="google" />
   </div>
   <SearchForm store={store} />
   <div className="button-container">
    <button className="button-1">Google Search</button>
    <button className="button-2">I'm Feeling Lucky</button>
    <p >{props.inputValue}</p>
   </div>
  </>
 )
}

export default Hero