import "../styles/Footer.css"
//Icons
import envelope from "../icons/envelop.svg" 
import logo from "../icons/logo.svg"
import twitter from "../icons/twitter-logo.svg"
import facebook from "../icons/facebook-logo.svg"
import instagram from "../icons/instagram-logo.svg"
import visa from "../icons/Visa.svg"
import masterCard from "../icons/Mastercard.svg"
import payPal from "../icons/Paypal.svg"
import applePay from "../icons/applePay.svg"
import gPay from "../icons/G-Pay.svg"
import github from "../icons/github-logo.svg"

export default function Footer(){
    return(
        <footer>
        <div className="cta">
            <h1>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h1>
            <form>
                <div className="input">
                    <img src={envelope}/>
                    <input type="email" placeholder="Enter your email address"/>
                </div>
                <button>Subscribe to Newsletter</button>
            </form>
        </div>
        <div className="main-footer">
            <div className="main-footer-up">
                <div className="footer-logo">
                    <div className="logo">
                        <img src={logo}/>
                    </div>
                    <p>We have shoes that suits your style and which you’re proud to wear. From women to men.</p>
                    <div className="sm-icons">
                        <a href=""><img src={twitter} alt="Twitter logo"/></a>
                        <a href=""><img src={facebook} alt="Facebook logo"/></a>
                        <a href=""><img src={instagram} alt="Instagram logo"/></a>
                        <a href=""><img src={github} alt="Github logo"/></a>
                    </div>
                </div>
                <div className="footer-texts">
                    <div className="footer-text">
                        <h3>COMPANY</h3>
                        <ul>
                            <li><a href="">About</a></li>
                            <li><a href="">Features</a></li>
                        </ul>
                    </div>
                    <div className="footer-text">
                        <h3>HELP</h3>
                        <ul>
                            <li><a href="">Customer Support</a></li>
                            <li><a href="">Delivery Details</a></li>
                            <li><a href="">Terms & Conditions</a></li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-text">
                        <h3>FAQ</h3>
                        <ul>
                            <li><a href="">Account</a></li>
                            <li><a href="">Manage Deliveries</a></li>
                            <li><a href="">Orders</a></li>
                            <li><a href="">Payments</a></li>
                        </ul>
                    </div>
                    <div className="footer-text">
                        <h3>RESOURCES</h3>
                        <ul>
                            <li><a href="">Youtube Playlist</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="main-footer-down">
                <p>Shopper © 2024, All Rights Reserved</p>
                <div className="gateways">
                    <a href=""><img src={visa} alt=""/></a>
                    <a href=""><img src={masterCard} alt=""/></a>
                    <a href=""><img src={payPal} alt=""/></a>
                    <a href=""><img src={applePay} alt=""/></a>
                    <a href=""><img src={gPay} alt=""/></a>
                </div>
            </div>
        </div>
    </footer>
    )
}