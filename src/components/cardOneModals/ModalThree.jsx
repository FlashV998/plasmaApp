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
class ModalThree extends React.Component{
    constructor(props){
        super(props)
        this.state={
            date:new Date(),
            fileUrls: [],
            entityname:"",
            location:"",
            pincode:""
        }
this.handleDate=this.handleDate.bind(this);
this.handleFileChange=this.handleFileChange.bind(this);
this.removeImage=this.removeImage.bind(this);
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

    }
    handleSubmit(){
      console.log(this.state);

    }
   
    handleFileChange(event) {
        event.persist();
        console.log(event.target);
        const file = event.target.files[0];
        this.setState({
          fileUrls: [...event.target.files]
        });
        // this.uploadFilesOnS3();
      }
      removeImage(index) {
        var filePreview = [...this.state.fileUrls];
        filePreview.splice(index, 1);
        this.setState({ fileUrls: [...filePreview] });
      }
    


render(){
return(
  <div class="container" style={{marginBottom:"5rem"}}>
  <div className="row justify-content-around text-center">
    
<div className="col-10">       
<form>


<div className="row mb-4">
<div className="col-md-6">
    <div className="row">
      <div className="col-6 imgUploadBox mt-4 pb-4">
      <div className="upload-thumb col-md-6">
              
              <div
                style={{ marginBottom: "2%" }}
                className=" thumb-edit col-md-4"

              >
                
                <input
                className="d-none"
                  type="file"
                  id="imageUpload"
                  accept=".png, .jpg, .jpeg"
                  name="imageUpload"
                  multiple
                  onChange={this.handleFileChange}
                />
                <label htmlFor="imageUpload " >
                <IconContext.Provider value={{  size:"3em" }}><span><AiOutlinePlus/></span> </IconContext.Provider></label>
                
              </div>
              {this.state.fileUrls.length > 0
                ? this.state.fileUrls.map((file, index) => {
                    return (
                      <div
                        key={file + index}
                        className="img-preview col-md-8"
                        style={{
                          marginLeft: "1%",
                          marginTop: "1%",
                          paddingRight: "0%",
                          paddingLeft: "0%"
                        }}
                      >
                          <div className="remove pr-3 pb-5" >


              <IconContext.Provider value={{  size:"3em" }}>
                              <i
                            className=""
                            onClick={() => this.removeImage(index)}
                          ><AiOutlineCloseCircle/></i>
                          </IconContext.Provider>
                        </div>
                        <div
                          id="AboutSummaryPreview"
                          className="preview"
                          style={{
                            backgroundImage: `url(${URL.createObjectURL(
                              file
                            )})`
                            // width: "240px",
                            // height: "100"
                          }}
                        ></div>
                        
                      </div>
                    );
                  })
                : null}
            </div>
      </div>
      <div className="col-6 headerTextSec" style={{paddingLeft:"5%",paddingTop:"18%"}}>
      Add Center Photo  
      </div>
    </div>
  
  
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
<label className="col-md-6 pb-1" style={{textAlign:"initial"}} for="lastDate">When did you last verify?</label>


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

export default ModalThree;