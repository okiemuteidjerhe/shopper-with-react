import "../styles/Header.css"
//Icons
import menuBtn from "../icons/menu.svg"
import logo from "../icons/logo.svg"
import cart from "../icons/cart.svg"
import avatar from "../icons/avatar.svg"


export default function Header (){
    return(
        <header>
        <button><img src={menuBtn} /></button>
        <nav>
            <div className="logo">
                <img src={logo} />
            </div>
            <ul className="main-menu">
                <li><a href="">Shop</a></li>
                <li><a href="">On Sale</a></li>
                <li><a href="">New Arrivals</a></li>
            </ul>
            <div className="cart-container">
                <div className="cart-icon">
                    <a href="cart.html"><img src={cart} /></a>
                    <span className="total-qty">0</span>
                </div>
                <a href=""><img src={avatar} /></a>
            </div>
        </nav>
    </header>
    )
}

