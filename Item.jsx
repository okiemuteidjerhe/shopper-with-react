import bin from "../icons/bin.svg"
import minus from "../icons/minus.svg"
import plus from "../icons/plus.svg"

import sneakers from "../images/brown-sneakers.png"
export default function Item(){
    return (
        <div className="item-card">
                        <div className="item-img">
                            <img src={sneakers} alt="Brown sneakers"/>
                        </div>
                        <div className="item-texts">
                            <div className="up">
                                <div className="up-texts">
                                    <h2>Brown Sneakers</h2>
                                    <p>Size: <span>Large</span></p>
                                    <p>Color: <span>Brown</span></p>
                                </div>
                                <button>
                                    <img src={bin}/>
                                </button>
                            </div>
                            <div className="down">
                                <p>$240</p>
                                <div className="btns">
                                    <button><img src={minus} alt=""/></button>
                                    <span>1</span>
                                    <button><img src={plus} alt=""/></button>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}