import React from "react"
import { useNavigate } from "react-router-dom"
import { routes } from "../../utils/routes"
import "./MenuBarComponent.scss"

const MenuBarComponent = () => {
    const navigate = useNavigate()
    const newOrder = () => navigate(routes.NEWORDER)
   
    return(
        <div className="menu-bar">
            <section className="all-buttons">
                <section className="buttons">
                    <button className="barBtn">
                        <img className="icons" id="new-order" onClick={newOrder} src="src/assets/new.png" alt="new order"/>
                    </button>
                    <p>New Order</p>
                </section>
                <section className="buttons" >
                    <button className="barBtn">
                        <img className="icons" id="waiting" src="src/assets/waiting.png" alt="waiting"/>
                    </button>
                    <p>Waiting</p>
                </section>
                <section className="buttons" >
                    <button className="barBtn">
                        <img className="icons" id="ready" src="src/assets/ready.png" alt="ready"/>
                    </button>
                    <p>Ready</p>
                </section>
                <section className="buttons" >
                    <button className="barBtn">
                        <img className="icons" id="closed" src="src/assets/closed.png" alt="closed"/>
                    </button>
                    <p>Closed</p>
                </section>
                <section className="buttons" >
                    <button className="barBtn">
                        <img className="icons" id="canceled" src="src/assets/canceled.png" alt="canceled"/>
                    </button>
                    <p>Canceled</p>
                </section>
                {/* <section className="buttons" >
                    <button className="barBtn">
                        <img className="icons" id="cooking" src="src/assets/" alt="cooking"/>
                    </button>
                    <p>Cooking</p>
                </section> */}
            </section>
        </div>
    )
}

export default MenuBarComponent