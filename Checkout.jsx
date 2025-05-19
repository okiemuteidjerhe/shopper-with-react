import "../styles/Checkout.css"

import caret from "../icons/caret.svg"
import whiteArrow from "../icons/white-arrow.svg"
import paylogo from "../icons/paypal-logo.svg"

export default function Checkout(){
    return(
        <div className="checkout-main">
        <div className="mini-nav">
            <a href="index.html">Home</a>
            <img src={caret}/>
            <a href="cart.html">Cart</a>
            <img src={caret}/>
            <a href="#">Checkout</a>
        </div>

        <section>
            <h1>Checkout</h1>
            <form className="items-container">
                <div className="billing-details">
                    <h2>
                        Billing Details
                    </h2>
                    <div className="fullname">
                        <input type="text" name="firstName" id="" placeholder="First Name" required/>
                        <input type="text" name="lastName" id="" placeholder="Last Name" required/>
                    </div>
                    <input type="text" name="companyName" id="" placeholder="Company Name"/>
                    <div className="ctn">
                        <input type="text" name="country" id="" placeholder="Country" required/>
                    </div>
                    <div className="ctn">
                        <input type="text" name="streetAddress" id="" placeholder="Street Address" required/>
                    </div>
                    <div className="ctn">
                        <input type="text" name="postalCode" id="" placeholder="Post code/Zip" required/>
                    </div>
                    <div className="ctn">
                        <input type="text" name="town" id="" placeholder="Town/City" required/>
                    </div>
                    <div className="ctn">
                        <input type="text" name="phone" id="" placeholder="Phone" required/>
                    </div>
                    <div className="ctn">
                        <input type="email" name="email" id="" placeholder="Email" required/>
                    </div>
                    <label>
                        <input type="checkbox" name="createAccount"/>
                        <span className="label-text">Create an account?</span>
                    </label>
                    <label>
                        <input type="checkbox" name="differentAddress"/>
                       <span className="label-text">Ship to a different address</span>
                    </label>
                    <textarea name="orderNotes" id="" placeholder="Order notes" rows="1"></textarea>
                </div>
                <div className="line"></div>

                <div className="shoe-order-summary">
                    <h2>Order Summary</h2>
                    <div className="shoe-order-details">
                        <div className="det">
                            <p>PRODUCT</p>
                            <p>TOTAL</p>
                        </div>
                        <div className="shoes">
                            <div className="det">
                                <p>Brown Sneakers</p>
                                <p>$240</p>
                            </div>
                            <div className="det">
                                <p>Red Shoes</p>
                                <p>$180</p>
                            </div>
                            <div className="det">
                                <p>Orange white sneakers</p>
                                <p>$130</p>
                            </div>
                        </div>    
                        <div className="det" id="d-ctn">
                            <p>Discount <span>(-20%)</span></p>
                            <p id="discount">-$133</p>
                        </div>
                        <div className="det">
                            <p>Shipping</p>
                            <p id="delivery-fee">Free Shipping</p>
                        </div>
                        <div className="det">
                            <p>Total</p>
                            <p id="total">$467</p>
                        </div>
                    </div>
                   <div className="payment-options">
                    <label><input type="radio" name="payment" value="Direct bank transfer" required/>Direct bank transfer</label>
                    <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    <label><input type="radio" name="payment" value="Cheque payments" required/>Cheque payments</label>
                    <label><input type="radio" name="payment" value="Cash on delivery" required/>Cash on delivery</label>
                    <label><input type="radio" name="payment" value="PayPal" required/>
                        <span className="label-content">PayPal <img src={paylogo}/></span>
                    </label>
                   </div>                

                    <button>Place Order <img src={whiteArrow}/></button>
                </div>
            </form>
        </section>
    </div>
    )
}