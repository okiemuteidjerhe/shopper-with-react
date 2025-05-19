import "../styles/Product.css"
import cart from "../icons/cart.svg"

export default function Product(props){
    return (
                <div className="product-card">
                    <div className="product-img">
                        <img src={props.img}/>
                        <button onClick={()=>{props.addToCart(props.id)}}><img src={cart}/></button>
                        
{
    props.qty > 0 ? <span className="qty">{props.qty}</span>
            : ""  
}

                    </div>
                    <div className="product-texts">
                        <h3>{props.name}</h3>
                        <div className="rating-container">
                            <span>Rating </span>
                            <span>{props.rating}</span>
                        </div>
                        <div className="price-container">
                            <h2 className="price">${props.price}</h2>
                            
{
    props.discount? <><h2 className="dp">${props.discountedPrice}</h2>
                            <p className="discount">{props.discount}%</p></>
                  : ""          
}

                        </div>
                    </div>
                </div>                
    )
}