import React from "react"
import Typed from 'react-typed'
import { Link } from "react-router-dom";
import LocationMap from "./LocationMap"
import Map from "./Map"
import AutoMap from "./AutoMap"

class Home extends React.Component{



    render(){

        return(
        
      
        
                <div class="container">
                    <div className="headerText">Help us Collect real<br/>time data to fight<br/>COVID-19</div>
                        
                        <div className="row"><AutoMap/></div>

<hr/>                        

                    <div className="row justify-content-around   text-center ">
                        {/* <div class="  col-md-12 pb-3"> */}

                        <div className="col-6 headerTextSec">Are you Vaccinated?</div>
                              <div className="col-3 ">
                                <input  type="checkbox" value="" id="defaultCheck1"/>
                                <label class="form-check-label" for="defaultCheck1">
                                          Yes
                                </label>
                                {/* <div className="col-1 "><Link to="/notvaccinated"><button type="button" class="btn btn-primary"  name="vcNotDone">No</button></Link> </div> */}
                             </div>
                             <div className="col-3 ">
                                <input  type="checkbox" value="" id="defaultCheck1"/>
                                <label class="form-check-label" for="defaultCheck1">
                                          No
                                </label>
                                {/* <div className="col-1 "><Link to="/notvaccinated"><button type="button" class="btn btn-primary"  name="vcNotDone">No</button></Link> </div> */}
                             </div>
                            
                        </div>
                        
                        
                        <hr/>
                        <div className="col-md-10 pt-3  " style={{margin:"1.5rem"}}>
                        
              <h5 className="headerTextThi">Have you recently been to any nearby Hospitals? If yes, Help us with some of the below data </h5>
              
              <div className="row pt-4"  >
                  <div className="col-6 optionTitle">Oxygen Available Nearby</div>
                  <div className="col-6 " style={{textAlign:"end"}}><Link to="/oxygencentre"><button href="#"  name="vcNotDone" ><span className="buttonText">ADD +</span></button></Link> 
                    </div>
              </div>
              <div className="row pt-4">
                  <div className="col-6 col-md-6 optionTitle">Meds Available nearby</div>
                  <div className="col-6 col-md-6" style={{textAlign:"end"}}><Link to="/medicinecentre"><button href="#"><span className="buttonText">ADD +</span></button> </Link></div>
              </div>
              <div className="row pt-4">
                  <div className="col-6 col-md-6 optionTitle" >Vaccines Available nearby </div>
                  <div className="col-6 col-md-6"style={{textAlign:"end"}}><Link to="/vaccinecentre"><button href="#"><span className="buttonText">ADD +</span></button></Link> </div>
              </div>
              <div className="row pt-4">
                  <div className="col-6 col-md-6 optionTitle" >Any one in your aquaintance <br/>who 
                    has covid recovered Plasma ?<br/> Only last 3 months recovered Plasma is useful.</div>
                  <div className="col-6 col-md-6 "style={{textAlign:"end"}}><Link to="/recoverdetails"><button href="#" ><span className="buttonText">ADD +</span></button></Link> </div>
              </div>
             
            </div>

  </div>



        )
    }





}


export default Home