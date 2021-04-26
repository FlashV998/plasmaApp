import React from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist";
import {AiOutlineCloseCircle} from "react-icons/ai"
import { IconContext } from "react-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
class NotVaccine extends React.Component{
    constructor(props){
        super(props)
        this.state={
            date:new Date(),
            
            entityname:"",
            location:"",
            mobile:""

        }
this.handleDate=this.handleDate.bind(this);
this.handleInputValue=this.handleInputValue.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);
// this.uploadFilesOnS3=this.uploadFilesOnS3.bind(this)
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
      else if(eventName ==="mobile"){
        this.setState({mobile:eventValue});
      }

    }
    handleSubmit(){
      console.log(this.state);

    }
    

render(){
return(
        <div class="container">
          <div className="row justify-content-around text-center">
            <h5 >Want to get Vaccinated?</h5>
      <div className="col-10">       
      <form>




  <div class="form-group row pt-3">
      <label className="col-md-6" for="entityName">Entity Name</label>
    <div className="col-md-6">
    <input type="text" class="form-control" id="entityName" aria-describedby="emailHelp" name="entityname" placeholder="Enter Name" onChange={this.handleInputValue}/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
    </div>
  </div>
  <div class="form-group row pt-3">
    <label className="col-md-6" for="centreLocation" >Location/Address of the place</label>
    <div className="col-md-6">
    <input type="text" class="form-control" id="centreLocation" name="location" onChange={this.handleInputValue} placeholder="Enter Location"/>
  </div>
  </div>
  <div class="form-group row pt-3">
    <label className="col-md-6" for="mobile">Pincode</label>

   <div className="col-md-6"> <input type="text" class="form-control" id="mobile" name="mobile" onChange={this.handleInputValue} placeholder="Enter Mobile"/></div>
  </div>
  <div class="form-group row pt-3">
    <label className="col-md-6" for="lastDate">Date</label>

  
  <div className="mb-4 col-md-6  date field field--not-empty react-datepick-smart-popup date-picker-enquire" style={{    paddingRight: "20rem"}} >
                              
                                <DatePicker
                                    selected={this.state.date}
                                    onChange={this.handleDate}
                                    className="input  "
                                    // showTimeSelect ={!isMobile ? true : false}
                                    // showTimeSelect
                                    // timeFormat="HH:mm"
                                    calendarClassName="red-bgx"
                                    // dateFormat={!isMobile ? "MMMM d, yyyy h:mm aa" : "MMMM d, yyyy"}
                                    dateFormat = "MMMM d, yyyy " 
                                />
                                
                                
 </div>
</div>
  
  <div className="pt-3"><button type="button" onClick={this.handleSubmit} class="btn btn-primary">Next</button></div>
</form>
</div>

            <div className="col-12">
                Nearby Vaccine centers
                    </div>
      </div>
      </div>
      

)}}

export default NotVaccine;