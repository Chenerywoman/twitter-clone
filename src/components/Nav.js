import "./Nav.css"
import {BrowserRouter, Link} from 'react-router-dom';
import house from "../images/house.jpg"
import mag from "../images/mag.jpg"
import bell from "../images/bell.jpg"
import mail from "../images/mail.png"

const NavBar = () => {
    return (
        <nav>
            <BrowserRouter>
            <Link to="/"><img className="home" alt="home" src={house}></img></Link>
            <Link to="/search"><img className="search" alt="search" src={mag}></img></Link>
            <Link to="/notifications"><img className="notification" alt="notification" src={bell}></img></Link>
            <Link to="/mail"><img className="mail" alt="mail" src={mail}></img></Link>
            </BrowserRouter>
           
        </nav>
    )
}

export default NavBar;

