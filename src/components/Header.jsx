import React from "react"
import Typed from 'react-typed'
import MainCard from "./MainCard";
import ModalOne from "./cardOneModals/ModalOne"
import ModalTwo from "./cardOneModals/ModalTwo"
import ModalThree from "./cardOneModals/ModalThree"
import ModalFour from "./cardOneModals/ModalFour"


const Header=()=>{
  return(
      <>
      <ModalOne/>
      <ModalTwo/>
      <ModalThree/>
      <ModalFour/>
    <div className="header-wrapper" id="home">
        <div className="header-info">
        <Typed className="typed-text "
strings={["Register for Vacinee","locate nearby centres",""]}
typeSpeed={40}
backSpeed={50}
loop
 >
        </Typed>
        
        <MainCard/>
        </div>
    </div></>
  )
}

export default Header