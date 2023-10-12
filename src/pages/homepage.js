import React from "react";
import "./homepage.css";
import Rectangle35 from "../images/rectangle35.png";
import Button from "../component/button";
import Ellipse62 from "../images/ellipse62.png"
import Ellipse1 from "../images/ellipse1.png"
import Pngegg78 from "../images/pngegg78.png"
import Servicetips from "../images/servicetips.png"
import Travelagency from "../images/travelagency.png"
import Weddinggift from "../images/weddinggift.png"
import Unsplash0 from "../images/unsplash0.png"
import Unsplash1 from "../images/unsplash1.png"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import Rectangle31 from "../images/rectangle31.png"

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="navbar-section">
       <img  className="navbar-image" src={Rectangle35}></img>

         <div className="navbar-list">
          <ul className="list">
            <li className="list-sub">Home</li>
            <li>Save</li>
            <li>Travel</li>
            <li>Experience</li>
            <li>Wallet</li>
          </ul>
          <div>
        <Button title="Contact Us" />
        </div>
        </div>
      </div>

        <div className="homepage-header">
            <div className="header-section">
                 
            <div className="header-info">
                <h1 className="header-heading"><span className="span-section">SAVING</span> YOUR MONEY FOR TRAVEL THROUGH TRAVEL FUND</h1>
                <p className="header-para">Save your money for travel securely and explore the whole world with trasave, we provide you the best travel services.</p>
                <div className="header-button">
                    <Button title="Save Now" />
                    <Button title="UI/UX Case Study" />

                </div>
            </div>
            <img className="header-image2" src={Ellipse1}></img> 
            <img  className="header-image3" src={Pngegg78}></img>
            </div>
        </div>

        <div className="travel-section">
            <h1 className="travel-heading">Why to <span className="travel-heading-span">travel</span> with us?</h1>
            <p className="travel-para">Ambitious about your next adventure but sick of saving money? End up sneaking into those savings because well. You’re bored? Lost motivation? You don’t feel the funds are growing fast enough? Saving just sucks? Trasave has introduced an epic new way to reward you for your savings for travel</p>

        </div>

        <div className="list-section">
            <div className="list-subsection">
                <img src={Servicetips}></img>
                <h1 className="list-heading">Save <span className="list-heading-span">money</span></h1>
                <p className="list-para">Invest in trasave securily for future</p>
            </div>
            <div className="list-subsection">
                <img src={Weddinggift}></img>
                <h1 className="list-heading">Earn <span className="list-heading-span">rewards</span></h1>
                <p className="list-para">Earn rewards and track your money</p>
            </div>
            <div className="list-subsection">
            <img src={Travelagency}></img>
                <h1 className="list-heading">Travel <span className="list-heading-span">Global</span></h1>
                <p className="list-para">Use this money for your travelling</p>
            </div>
        </div>
       

       <div className="save-section">
        <div className="save-info">
            <div className="saveimg-heading">
                <img className="save-img" src={Rectangle31}></img>
                <h1 className="save-heading">Save your travel money in Trasave and get top grade security with us</h1>
            </div>
            <div>
                <p className="save-para">There are so many benefits of travelling with Trasave. Not only do we provide you with an awesome digital travel solution , an awesome travel app, but we also make it super easy and fun for you to store, save and move your travel money.

As well as saving money, the TRASAVE travel fund is a good way to track your travel money. Tracking Expenses is important when travelling as you don’t want to be stuck in the middle of your journey budgeting your travel. We created the travel fund so you can store all your travel money and then track your money from your travel fund expense tracker. </p>
            </div>
        </div>
       </div>

       <div className="footer-section">
        <div className="footer-info">
        <div className="footer-section1">
            <img src={Rectangle35}></img>
            <p className="footer-para">TRASAVE travel fund is a good way to track your travel money. </p>
            <div className="footer-logo">
            <AiFillInstagram/>
            <AiFillLinkedin/>
            <BsFacebook/>
            <BsTwitter/>
            </div>
        </div>
        <div className="footer-section2">
            <ul className="footer-list"><span className="footer-span">About</span>
                <li>Technical Info</li>
                <li>Other Products</li>
            </ul>
            
        </div>
        <div className="footer-section3">
            <ul className="footer-list"><span className="footer-span">Contact Us</span>
                <li>Bengaluru, India</li>
                <li>80030 10108</li>
                <li>hr@curlistic.com</li>
            </ul>
        </div>
        <div className="footer-subscribe-section">
        <div className="footer-subscribe">Subscribe <span className="footer-span"> Newsletter</span></div>
        <form className="email">
           
            <input type='email' id='email' placeholder="Enter your name"/>
            <Button title="Subscribe"/>
        </form>
        </div>
       </div>
       <p className="copyright-para"> Copright  2022 Curlistic. All right reserved.</p>
       </div>
      
    </div>
  );
};

export default Homepage;
