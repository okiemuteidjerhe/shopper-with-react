import "../styles/Cart.css"
import Item from "./Item"

//Icons
import caret from "../icons/caret.svg"
import coupon from "../icons/coupon.svg"
import whiteArrow from "../icons/white-arrow.svg"


export default function Cart(){
    return(
        <div className="cart-main">
        <div className="mini-nav">
            <a href="index.html">Home</a>
            <img src={caret}/>
            <a href="#" className="h">Cart</a>
        </div>

        <section>
            <h1>My cart</h1>
            <div className="items-container">
                <div className="items">
                    <Item/>
                    <Item/>
                </div>
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <div className="order-details">
                        <div className="det">
                            <p>Subtotal</p>
                            <p id="subtotal">$565</p>
                        </div>
                        <div className="det" id="d">
                            <p id="d">Discount <span>(-20%)</span></p>
                            <p id="discount">-$133</p>
                        </div>
                        <div className="det">
                            <p>Delivery Fee</p>
                            <p id="delivery-fee">$15</p>
                        </div>
                        <div className="det">
                            <p>Total</p>
                            <p id="total">$467</p>
                        </div>
                    </div>
                    <form className="coupon">
                        <div>
                            <img src={coupon}/>
                            <input id="coupon-code" type="text" placeholder="Add promo code"/>
                        </div>
                        <button>Apply</button>
                    </form>

                    <a href="checkout.html">Go to Checkout <img src={whiteArrow}/></a>    
                </div>
            </div>
        </section>
    </div>
    )
}