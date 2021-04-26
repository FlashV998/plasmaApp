import React from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist";
import {AiOutlineCloseCircle} from "react-icons/ai"
import { IconContext } from "react-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import {AiOutlinePlus} from "react-icons/ai"

class ModalFour extends React.Component{
    constructor(props){
        super(props)
        this.state={
            date:new Date(),
            fileUrls: [],entityname:"",
            location:"",
            pincode:"",
            bloodgrp:""
        }
this.handleDate=this.handleDate.bind(this);
this.handleInputValue=this.handleInputValue.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);

    }
    handleDate = (date) => {
        // console.log(new Date(date).toISOString());
        let dt = new Date(date);
        this.setState({date:date})
        let val={...this.state.event};
        // console.log(date+"sdsdsd");
        // console.log(d+"sdssds");
        let value=dt.toISOString()
    
        
    };
    handleInputValue(event){
      let eventName=event.target.name;
      let eventValue=event.target.value;
      if (eventName === "entityname"){
        this.setState({entityname:eventValue});
        
      }
      else if(eventName === "location"){
        this.setState({location:eventValue});
      }
      else if(eventName ==="pincode"){
        this.setState({pincode:eventValue});
      }
      else if(eventName === "bloodgrp"){
        this.setState({bloodgrp:eventValue})
      }

    }
    handleSubmit(){
      console.log(this.state);

    }

render(){
return( 
<div class="container" style={{marginBottom:"5rem"}}>
<div className="row justify-content-around text-center">
  
<div className="col-10">       
<form>


<div className="row pt-5 mb-4">
<div className="col-6 headerTextSec">
Any Family Record?

</div>
<div className="col-3 headerTextSec">
    <input  type="checkbox" value="" id="defaultCheck1"/>
    <label class="form-check-label" for="defaultCheck1">
              Yes
    </label>

</div>

<div className="col-3 headerTextSec">
<input  type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
            No
  </label>

</div>

       
      </div>














<div class=" row pt-3 optionTitle">
<label className="col-md-6 pb-1" style={{textAlign:"initial"}} for="entityName">Entity Name</label>
<div className="col-md-6 ">
<input type="text" class="inputField" id="entityName" aria-describedby="emailHelp" name="entityname" placeholder="Enter Name" onChange={this.handleInputValue}/>
{/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
</div>
</div>
<div class=" row pt-3 optionTitle">
<label className="col-md-6 pb-1" style={{textAlign:"initial"}} for="centreLocation" >Location</label>
<div className="col-md-6">
<input type="text" class="inputField" id="centreLocation" name="location" onChange={this.handleInputValue} placeholder="Enter Location"/>
</div>
</div>
<div class="row pt-3 optionTitle">
<label className="col-md-6 pb-1" style={{textAlign:"initial"}} for="pincodeLocation">Pincode</label>

<div className="col-md-6"> <input type="text" class="inputField" id="pincodeLocation" name="pincode" onChange={this.handleInputValue} placeholder="Enter Pincode"/></div>
</div>

<div class="row pt-3 optionTitle">
    <label className="col-md-6pb-1" for="bloodgrp" style={{textAlign:"initial"}}>Blood Group</label>
    <div className="col-md-6"><select className="inputField custom-select col-md-6" id="bloodgrp" name="bloodgrp" onChange={this.handleInputValue}  style={{display:"block"}}>
  <option selected>Select blood group</option>
<option value="A+">A RhD positive (A+)</option>
<option value="A-">A RhD negative (A-)</option>
<option value="B+">B RhD positive (B+)</option>
<option value="B-">B RhD negative (B-)</option>
<option value="O+">O RhD positive (O+)</option>
<option value="O-">O RhD negative (O-)</option>
<option value="AB+">AB RhD positive (AB+)</option>
<option value="AB-">AB RhD negative (AB-)</option>
  
</select></div>
  </div>
<div class="row pt-3 optionTitle">
<label className="col-md-6 pb-1" style={{textAlign:"initial"}} for="lastDate">When did you recover from COVID?</label>


<div className="mb-4 col-md-6  date field field--not-empty react-datepick-smart-popup date-picker-enquire" style={{    paddingRight: "20rem"}} >
                    
                      <DatePicker
                          selected={this.state.date}
                          onChange={this.handleDate}
                          className="inputField"
                          // showTimeSelect ={!isMobile ? true : false}
                          // showTimeSelect
                          // timeFormat="HH:mm"
                          calendarClassName="red-bgx"
                          // dateFormat={!isMobile ? "MMMM d, yyyy h:mm aa" : "MMMM d, yyyy"}
                          dateFormat = "MMMM d, yyyy " 
                      />
                      
                      
</div>
</div>

<div className="pt-3 "  style={{paddingLeft:"12.5rem"}}><button  type="button" onClick={this.handleSubmit}><span className="buttonText">SUBMIT</span></button></div>
</form>
</div>
</div>
</div>


)}}

export default ModalFour;

