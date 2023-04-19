import React from 'react';
import './SearchForm.css';

function SearchForm() {
 return (
  <>
   <div className="field">
    <div className="field-flex">
     <div className="left">
      <i class="fa-solid fa-magnifying-glass"></i>
     </div>
     <div className="right">
      <i class="fa-solid fa-microphone"></i>
      <i class="fa-solid fa-camera"></i>
     </div>
    </div>
    <input type="text" />
   </div>
  </>
 )
}

export default SearchForm