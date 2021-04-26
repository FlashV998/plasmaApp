import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
// import Profile from "./components/Profile";
// import FormOne from "./components/formOne";
import Home from "./components/Home"
import LocationMap from "./components/LocationMap"
import ModalOne from "./components/cardOneModals/ModalOne"
import ModalTwo from "./components/cardOneModals/ModalTwo"
import ModalThree from "./components/cardOneModals/ModalThree"
import ModalFour from "./components/cardOneModals/ModalFour"
import NotVaccine from "./components/cardOneModals/NotVaccine"
import Explore from "./components/Explore"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      {/* <Header/> */}
      
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/explore" component={Explore}></Route>
        
        <Route exact path="/oxygencentre" component={ModalOne}/>
        <Route exact path="/medicinecentre" component={ModalTwo}/>
        
        <Route exact path="/vaccinecentre" component={ModalThree}/>

        <Route exact path="/recoverdetails" component={ModalFour}/>
        <Route exact path="/notvaccinated" component={NotVaccine}/>
        <Route exact path="/location" component={LocationMap}/>

      </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
