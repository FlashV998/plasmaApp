import React from "react"
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";

class MainCard extends React.Component{
        constructor(props){
            super(props)
            this.state={
                isAns:"false",
                showCardName:"",


            }
            this.handleNextCard=this.handleNextCard.bind(this);
        }


        handleNextCard(event){
            this.setState({isAns:"true"})
            
            let card=event.target.name ;
            // card === "vcDone"?
            this.setState({showCardName:card});
            
        }



render(){

    return(<>
        {/* <ModalOne/> */}
        {/* <ModalTwo/>
        <ModalThree/>
        <ModalFour/> */}
        <div className={`card text-center ${(this.state.isAns === "false")?null:"d-none"}`}>
        {/* <div class="card-header">
          Featured
        </div> */}
        <div className="card-body">
          <h5 className="card-title">Are you Vaccinated?</h5>
          {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
          <div className="row pt-4">
              <div className="col-6"><a href="#" class="btn btn-primary" onClick={this.handleNextCard} name="vcDone">Yes</a></div>
              <div className="col-6"><a href="#" class="btn btn-primary" onClick={this.handleNextCard} name="vcNotDone">No</a> </div>
          </div>

        </div>
        {/* <div class="card-footer text-muted">
          2 days ago
        </div> */}
      </div>  
      { (this.state.showCardName === "")?null:((this.state.showCardName === "vcDone")?<CardOne/>:<CardTwo/>)}
    </>
    )
        
    
}
} 

export default MainCard;