import React from "react"
import { useState } from "react"
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/configFirebase"; 
import HeaderComponent from "../../containers/Header/Header"
import MenuBarComponent from "../../containers/MenuBar/MenuBarComponent"
import ProductComponent from "../../components/ProductCard/ProductComponent"
import AddItemsComponent from "../../components/AddItems/AddItemsComponent"
import data from "../../menu.json"
import "../NewOrder/NewOrder.scss"

const NewOrderComponent = () => {
    const [products, setProducts] = useState([])
    const [customerOrders2, setCustomerOrders2] = useState([])

    const [table, setTable] = useState("")
    const [customerName, setCustomerName] = useState("")
    const [orderNumber, setOrderNumber] = useState("")
    const [status, setStatus] = useState([])
    
    const sandwiches = data.sandwiches
    const extras = data.extras
    const drinks = data.drinks
    const desserts = data.desserts

    const handleSubmitSandw = () => {
        setProducts('')
        setProducts(sandwiches)
    }  
    const handleSubmitExtras = () => {
        setProducts('')
        setProducts(extras)
    }  
    const handleSubmitDrinks = () => {
        setProducts('')
        setProducts(drinks)
    } 
    const handleSubmitDesserts = () => {
        setProducts('')
        setProducts(desserts)
    } 

    /* const handleSubmitCustomerOrders = () => {
        console.log(customerOrders)
        setCustomerOrders({key: "id"})
    } */ 
    
    const handleChangeTable = e => setTable(e.target.value)
    const handleChangeOrderNumber = e => setOrderNumber(e.target.value)
    const handleChangeCustomerName = e => setCustomerName(e.target.value)
    
    const handleSubmitAddOrder = async () => {
        const ordersCollection = collection(db, "orders");
        /* if(customerOrders===""){
            alert("Order number missing")
        } */
        if(orderNumber===""){
            alert("Order number missing")
        }
        if(table===""){
            alert("Table number missing")
        }
        if(customerName===""){
            alert("Order Number Missing")
        }
        try {
            await addDoc((ordersCollection), { orderNumber, table, customerName, }) 
            //waiter
            //orders
            //total
            //time
            //setOrders([]) 
            console.log("order saved!")    
        } catch (error) {
            console.log(error);
        }
    }
            
    return(
        <div className="content-order">
            <HeaderComponent/>
            <div className="order">
                <MenuBarComponent/>
                <div className="main">
                    <nav className="options-nav">
                        <section>
                            <p onClick={ handleSubmitSandw }>Sandwiches</p>
                        </section>     
                        <section>
                            <p onClick={ handleSubmitExtras }>Extras</p>
                        </section> 
                        <section>
                            <p onClick={ handleSubmitDrinks }>Drinks</p>
                        </section>  
                        <section>
                            <p onClick={ handleSubmitDesserts }>Desserts</p>
                        </section>   
                    </nav>
                    <section className="products-info" id="products">
                         <section className="search-bar">
                            <p>Choose some options:</p>
                            <input></input>
                         </section>
                        <section className="products-options">
                        {  products.map((product) => {
                            return( 
                            
                                <ProductComponent 
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
                <div className="purchase-order">
                    <section className="orders">
                        <section className="new-order">
                            <section className="order-number">
                                <p>Order </p>
                                <input placeholder="0025" onChange={ handleChangeOrderNumber }></input>
                            </section>
                            <section className="info">
                                <section className="user-info">
                                    <label>Customer:</label>
                                    <input placeholder="Customer Name" onChange={handleChangeCustomerName}></input>
                                </section>
                                <section className="table-info">
                                    <label>Table:</label>
                                    <input placeholder="#" onChange={handleChangeTable}></input>
                                </section>
                            </section>
                            <section className="form">
                                <p>Item</p>
                                <p>Qty</p>
                            </section>
                        </section>
                        <section className="order">

                           {customerOrders2.map(order => {
                            console.log(customerOrders2)
                                return(
                                    
                                <AddItemsComponent key={order.id}
                                item = {order.item}
                                price = {order.price}
                                />
                                )
                            })}   
 
                        </section>
                        <section className="total-price">
                            <p>TOTAL:</p>
                            <p>$$$$$$</p>
                        </section>
                        <section className="order-btn">
                            <button onClick={handleSubmitAddOrder}>Add Order</button>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default NewOrderComponent