import React from "react"

class CardTwo extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
        // this.handleNextCard=this.handleNextCard.bind(this);
    }



    render(){
        return(
            <div className="card text-center">
            {/* <div className="card-header">
              Featured
            </div> */}
            <div className="card-body">
              <h5 className="card-title">Have second You visited any nearby hospital,etc..?</h5>
              <p className="card-text">Please help us with answers of the below data.</p>
              {/* <div classNameName="row pt-4">
                  <div classNameName="col-6"><a href="#" className="btn btn-primary" onClick={this.handleNextCard} name="vcDone">Yes</a></div>
                  <div classNameName="col-6"><a href="#" className="btn btn-primary" onClick={this.handleNextCard} name="vcNotDone">No</a> </div>
              </div> */}
    
            </div>
            {/* <div className="card-footer text-muted">
              2 days ago
            </div> */}
          </div>   




        )
    }

}

export default CardTwo;