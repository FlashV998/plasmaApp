


/* eslint-disable */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// import coffee from "../images/coffee.svg"

 const Navbar=()=>{
   return(<>
    <nav class="navbar navbar-light " style={{background: "#302F7E",height:"47px",width:"100%"}}>
  <a class="navbar-brand" href="#"></a>
</nav>
<div className="secondNav">
  <div className="row pt-1">
      <div className="col-2 " style={{paddingLeft: "1rem"}}><button style={{width:"5rem"}} className="filterButton" type="button"><span className="filterText">Location</span></button>
      </div>
      </div>
  </div>
  </> )
 }

 export default Navbar