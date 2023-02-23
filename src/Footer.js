import React from "react";
import { Link } from "react-router-dom";
import proto from "./img/PROTON INDIA LOGO 1.png";
import Group from "./img/Group 1.png";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { useLocation } from "react-router-dom";
import "./App.css";
import "./Footer.css";
const Footer = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  // you can check a more conditions here
  if (pathname === "/letmeet") return null;
  return (
    <div className="footer">
      <div className="top">
        <p className="top2">
          <img src={Group} alt="" />
        </p>
        <h3 className="h3">How about we meet over coffee?</h3>
        <p className="p2">
          Let's Discuss key aspects of Film Marketing and revenue
          <br />
          streams from content and other interestings things.
        </p>
        <br />
        <h5 className="p3">+916355004990</h5>
        <br />
      </div>
      <div className="ver">
        <div className="vertical"></div>
        <div className="vl"></div>
      </div>

      <div className="mainfooter">
        <div className="fo1">
          <br />
          <p>
            "We are 360* Integrated Marketing,Digital Distribution and
            Production Company"
          </p>
        </div>
        <div className="row">
          <div className="col1">
            <h1>Company</h1>
            <p>
              <Link className="activefooter" to="/">
                Home
              </Link>
              <Link className="activefooter" to="/aboutus">
                About Us
              </Link>
              <Link className="activefooter" to="/service">
                Services
              </Link>
              <Link className="activefooter" to="/contactus">
                Contact us
              </Link>
            </p>
          </div>
          <div className="col2">
            <h1>Business</h1>
            <p>Projects</p>
          </div>
          <div className="col3">
            <h1 className="getTouch">Get In Touch</h1>
            <p className="getintouch">
              <ImLocation /> 1108, Tivoli, Goderj Garden City,Ahmedabad
            </p>
            <p className="getintouch">
              <MdEmail /> Connect@Protonindia.in
            </p>
            <p className="getintouch">
              <AiFillPhone /> +916355004990
            </p>
            <p className="getintouch">
              <IoLogoWhatsapp /> +916355004990
            </p>
          </div>
        </div>
      </div>

      <div className="fo2">
        <div className="row2">
          <img src={proto} alt="hi" />
          <p className="fa1">
            copyright @ 2023 proton India | All Rights Reserved
          </p>
          <p className="fa2">
            <p>
              <AiOutlineInstagram />
            </p>
            <p>
              {" "}
              <ImFacebook />
            </p>
            <p>
              <ImTwitter />
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
