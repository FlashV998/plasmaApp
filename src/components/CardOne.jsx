import React from "react"
import ModalOne from "./cardOneModals/ModalOne"

class CardOne extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
        // this.handleNextCard=this.handleNextCard.bind(this);
    }



    render(){
        return(<>
        
            <div className="card text-center">
            {/* <div className="card-header">
              Featured
            </div> */}
            <div className="card-body">
              <h5 className="card-title">Have You visited any nearby hospital,etc..?</h5>
              <p className="card-text">Please help us with answers of the below data.</p>
              <form action="">
              <div className="row pt-4">
                  <div className="col-6 ">Nearby Oxygen Available</div>
                  <div className="col-6 "><a href="#" className="btn btn-primary"  name="vcNotDone"  data-toggle="modal"
                    data-target="#oxygenModal">ADD</a> 
                    </div>
              </div>
              <div className="row pt-4">
                  <div className="col-6 col-md-6">Nearby Medicines Available</div>
                  <div className="col-6 col-md-6"><a href="#" className="btn btn-primary" data-toggle="modal"
                    data-target="#medicineModal" >ADD</a> </div>
              </div>
              <div className="row pt-4">
                  <div className="col-6 col-md-6">Nearby Vaccines Centers</div>
                  <div className="col-6 col-md-6"><a href="#" className="btn btn-primary" data-toggle="modal"
                    data-target="#vaccineModal">ADD</a> </div>
              </div>
              <div className="row pt-4">
                  <div className="col-6 col-md-6">Any family member covid recovered plasma</div>
                  <div className="col-6 col-md-6"><a href="#" className="btn btn-primary" data-toggle="modal"
                    data-target="#recoveredModal" >ADD</a> </div>
              </div>
              </form>
    
            </div>
            {/* <div className="card-footer text-muted">
              2 days ago
            </div> */}
          </div>   
          

</>


        )
    }

}

export default CardOne;