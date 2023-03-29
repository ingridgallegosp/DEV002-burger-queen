import React from "react"
import { useState } from "react"
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/configFirebase"; 
import HeaderComponent from "../../containers/Header/Header"
import MenuBarComponent from "../../containers/MenuBar/MenuBarComponent"
import data from "../../menu.json"
import "../Waiting/Waiting.scss"

const WaitingComponent = () => {
    const ordersCollection = collection(db, "orders");
      
    return(
        <div className="content-home">
        <HeaderComponent/>
        <div className="welcome">
            <MenuBarComponent/>
            <div className="main">
                <section className="welcome-main">
                    <section>
                        
                    {  products.map((product) => {
                            
                            return(               
                                    <TicketComponent
                                    key = {product.id}
                                    photo = {product.photo}
                                    item = {product.item}
                                    description = {product.description}
                                    price = {product.price}
                                    /> 
                            ) 
                        })  } 

                    </section>
                    
                </section>
            </div>
        </div>
    </div>
    )
}

export default WaitingComponent