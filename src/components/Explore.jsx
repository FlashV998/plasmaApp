import React from "react"

class Explore extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(<>
            <div className="secondNav justify-content-start">
                <div className="row">
                <div className="col-2 " style={{paddingLeft: "1rem"}}><button className="filterButton" type="button"><span className="filterText">Oxygen</span></button></div>
                <div className="col-2"><button className="filterButton" type="button"><span className="filterText">Blood</span></button></div>
                <div className="col-2"><button className="filterButton" type="button"><span className="filterText">Plasma</span></button></div>
                <div className="col-2"><button className="filterButton" type="button"><span className="filterText">Vaccine</span></button></div>
                </div>
            </div>
     
            <div class="container" style={{height:"26.5rem", marginBottom:"5rem"}}>
                    <div className="row exploreCard">
                        <div className="col-3 imageBox" >asas</div>
                        <div className="col-5 ">
                            <div className="row headerTextThi  ">Name</div>
                            <div className="row headerTextSec ">Date Last available</div>
                            <div className="row headerTextSec">Location</div>
                        </div>
                        <div className="col-4 pl-5">
                        <div className="row  headerTextSec " style={{textAlign:"end"}}>60% verified</div>
                            <div className="row headerTextSec ">91-xxxxxxxxx</div>
                            <div className="row headerTextSec"><button  type="button"><span>OPEN MAP</span></button></div>
                        </div>
                    </div>
        
  
        </div>
                </>
            
        )
    }


}

export default Explore;