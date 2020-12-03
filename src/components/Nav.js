import "./Nav.css";
import { Link } from "react-router-dom";
import house from "../images/house.jpg";
import mag from "../images/mag.jpg";
import bell from "../images/bell.jpg";
import mail from "../images/mail.png";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">
            <img className="home" alt="home" src={house} />
          </Link>
        </li>
        <li>
          <Link to="/search">
            <img className="search" alt="search" src={mag} />
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/notifications">
            <img className="notification" alt="notification" src={bell} />
          </Link>{" "}
        </li>
        <li>
          <Link to="/mail">
            <img className="mail" alt="mail" src={mail} />{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
