import "../styles/Home.css"

import { useState } from "react"
import Product from "./Product"

//Import data
import {updatedItems} from "../data"

//Image and icon
import mainShoe from "../images/main-shoe-image.svg"
import darkArrow from "../icons/dark-arrow.svg"

export default function Home()    {
    const [products, setProducts] = useState(updatedItems);

    /* 
    This is for Header's qty span. 
    
    Further lifting? Context?

    const totalQty = products.reduce((starter, product)=>{
      return starter + product.qty
    },0) */
    
    
    //Functionality Logic
    function addToCart(id){
      setProducts(prev=>{
        return prev.map(product =>{
          if(product.id === id){
            return{...product, qty: product.qty + 1};
          }else{
            return product;
          }
      })
      })
    }

    const shoeCards = products.map(shoe=>{
        return <Product 
        key={shoe.id}
        id={shoe.id}
        img={shoe.img}
        name={shoe.name}
        rating={shoe.rating}
        price={shoe.price}
        discountedPrice={shoe.discountedPrice}
        discount={shoe.discount}
        qty={shoe.qty}
        addToCart={addToCart}
        />
    })
    return (
        <div className="home">    
            <section className="hero">
            <div className="hero-texts">
                <h1>
                FIND SHOES THAT <span>MATCHES</span> YOUR STYLE
                </h1>
                <p>
                Browse through our diverse range of meticulously crafted shoes,
                designed to bring out your individuality and cater to your sense
                of style.
                </p>
                <a href="#shop">Shop Now</a>
            </div>
            <div className="hero-img">
                <img src={mainShoe} />
            </div>
            </section>

            <section className="products" id="shop">
          <h1>PRODUCTS</h1>
          <div className="products-container">
          {shoeCards}
          </div>
          <a href="#">
            View more <img src={darkArrow} />
          </a>
        </section>
        </div>    
    )
}