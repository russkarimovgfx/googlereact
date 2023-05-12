import React from 'react';
import Input from '../components/Input';
import store from '../store/';



import './SearchForm.css';



function SearchForm(props) {



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
    <Input store={store} />


   </div>

  </>
 )
}

export default SearchForm