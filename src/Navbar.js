import { Link } from "react-router-dom";
import "./App.css";
import proto from "./img/PROTON INDIA LOGO 1.png";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="abc">
      <div className="banner">
        <div className="logo">
          <img src={proto} alt="" />
        </div>
        <div className="nav">
          <Link className="active" to="/">
            Home
          </Link>
          <Link className="active" to="/aboutus">
            About Us
          </Link>
          <Link className="active" to="/service">
            Services
          </Link>
          <Link className="active" to="/contactus">
            Contact us
          </Link>
          <Link className="active" to="/letmeet">
            <button>Let's Meet </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
