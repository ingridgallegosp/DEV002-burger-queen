import React from "react"
import "./PurchaseOrder.scss" 

const PurchaseOrder = () => {

    return(
        <section className="purchase-order">
                <section className="orders">
                    
                    <section className="new-order">

                        <section className="order-number">
                            <p>Order </p>
                            <p>000##</p>
                        </section>
                        <section className="info">
                            <section className="user-info">
                                <label>Customer:</label>
                                <input placeholder="Customer Name"></input>
                            </section>
                            <section className="table-info">
                                <label>Table:</label>
                                <input placeholder="#"></input>
                            </section>
                        </section>
                        <section className="form">
                            <p>Item</p>
                            <p>Qty</p>
                        </section>
                    </section>
                    <section className="order">
                       
                        

                    </section>
                    <section className="total-price">
                        <p>TOTAL:</p>
                        <p>$$$$$$</p>
                    </section>
                    <section className="order-btn">
                        <button>Add Order</button>
                    </section>
                </section>
        </section>
    )
}
export default PurchaseOrder


