import React from "react"
import {AiFillHome} from "react-icons/ai"
import {GoSearch} from "react-icons/go"
import {CgProfile} from "react-icons/cg"
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
class Footer extends React.Component{


    render(){

        return(
            <div className="footer">

                    <IconContext.Provider value={{ size: "1.7em"}}>
  
                    <div className="row">
                        <div className="col-4">
                           <Link to="/" style={{textDecoration: "none",color:"inherit"}}> <div className="icon1"><AiFillHome/><span className="footer-text" style={{display:"block"}}>Home</span></div></Link>
                        </div>
                        <div className="col-4">
                        <Link to="/explore" style={{textDecoration: "none",color:"inherit"}}><div className="icon2"><GoSearch/><span className="footer-text" style={{display:"block"}}>Explore</span></div></Link>
                        </div>
                        <div className="col-4">
                        <Link style={{textDecoration: "none",color:"inherit"}}> <div className="icon3"><CgProfile/><span className="footer-text" style={{display:"block"}}>Profile</span></div></Link>
                        </div>
                    </div>
                    </IconContext.Provider>
            </div>
        )
    }
}

export default Footer;