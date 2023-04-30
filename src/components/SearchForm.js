import React, { useEffect, useState } from 'react';
import './SearchForm.css';

function SearchForm() {

 const [search, setSearch] = useState("");

 useEffect(() => console.log(search), [search]);

 const updateSearch = (event) => {
  setSearch(event.target.value);
 }
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
    <input value={search} name="search" onChange={updateSearch} type="text" />
   </div>
  </>
 )
}

export default SearchForm