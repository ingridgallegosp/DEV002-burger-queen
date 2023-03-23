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

    //Order info
    const [table, setTable] = useState("")
    const [customerName, setCustomerName] = useState("")
    const [orderNumber, setOrderNumber] = useState("")
    const [products, setProducts] = useState([])
    
    //parent state
    const [customerOrders, setCustomerOrders] = useState([])
    // set data
    const addProducts = (newData) => {
        setCustomerOrders((prevState) => [...prevState, newData])
        //setChildData((prevState) => [...prevState, productInfo])
    }

    //Menu data
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
    
    const handleChangeTable = e => setTable(e.target.value)
    const handleChangeOrderNumber = e => setOrderNumber(e.target.value)
    const handleChangeCustomerName = e => setCustomerName(e.target.value)
    
    const handleSubmitOrder = async () => {
        const ordersCollection = collection(db, "orders");

        if(orderNumber===""){
            alert("Order number missing")
            return
        }
        if(table===""){
            alert("Table number missing")
            return
        }
        if(customerName===""){
            alert("Customer Name Missing")
            return
        }
        /* if(customerOrders===[]){
            alert("order is empty")
            return
        } */
        try {
            await addDoc((ordersCollection), { orderNumber, table, customerName, customerOrders})  
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
                                    addProducts = { addProducts }
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

                           {customerOrders.map(order => {
                            console.log(customerOrders)
                            //console.log(typeof customerOrders)
                                return(
                                    // customerOrders!='' ?  tarejta de abajo : <p>no products yet</p>
                                    <AddItemsComponent 
                                    key={order.id}
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
                            <button onClick = { handleSubmitOrder }>Submit Order</button>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default NewOrderComponent