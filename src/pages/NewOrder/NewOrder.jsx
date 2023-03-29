import React from "react"
import { useState } from "react"
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../../firebase/configFirebase"; 
import HeaderComponent from "../../containers/Header/Header"
import MenuBarComponent from "../../containers/MenuBar/MenuBarComponent"
import ProductComponent from "../../components/ProductCard/ProductComponent"
import AddItemsComponent from "../../components/AddItems/AddItemsComponent"
import ModalComponent from "../../components/Modal/Modal";
import { date } from "../../containers/Header/Header"
import data from "../../menu.json"
import "../NewOrder/NewOrder.scss"

export const useCounter = () => {
    const [counter, setCounter] = useState(1)

    const increase = () => setCounter(counter +1)
    const decrease = () => setCounter(counter -1)

    return{
        counter, increase, decrease
    } 
}

const NewOrderComponent = () => {
    // Modal
    const [showModal, setShowModal] = useState(false);

    // Order info
    const orderNumber = Date.now().toString().slice(-7)
    const waiterUid = auth.currentUser.uid

    const [table, setTable] = useState("")
    const [customerName, setCustomerName] = useState("")

    const handleChangeTable = e => setTable(e.target.value)
    const handleChangeCustomerName = e => setCustomerName(e.target.value)

    //Menu data
    const sandwiches = data.sandwiches
    const extras = data.extras
    const drinks = data.drinks
    const desserts = data.desserts
    
    // Menu options
    const [products, setProducts] = useState([])

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
    
    // Orders state(father)
    const [customerOrders, setCustomerOrders] = useState([])

    // Set Orders data
    /* const addProducts = (newData) => {
        setCustomerOrders((prevState) => [...prevState, newData])
    } */
    const addProducts = (newData) => {
        const existingProduct = customerOrders.find((product) => product.id === newData.id);
        if (existingProduct) {
          // Product already exists, update the quantity instead of adding a new item
          setCustomerOrders((prevState) =>
            prevState.map((product) =>
              product.id === newData.id ? { ...product, quantity: product.quantity + newData.quantity } : product
            )
          );
        } else {
          // Product doesn't exist yet, add it to the list
          setCustomerOrders((prevState) => [...prevState, newData]);
        }
      };

    const ordersId =() => customerOrders.filter((item) => item.id);
    console.log(ordersId(customerOrders))

    const deleteProduct = (id) => {
        const updatedOrder = customerOrders.filter((item) => item.id !== id);
        setCustomerOrders(updatedOrder)
        //console.log("delete")
    }

    // Qty counter
    const {counter, increase, decrease} = useCounter()

    // Submit Order
    const handleSubmitOrder = async () => {
        const ordersCollection = collection(db, "orders");

        if(table===""){
            alert("Table number missing")
            return
        }
        if(customerName===""){
            alert("Customer Name Missing")
            return
        }
        if(customerOrders===[]){
            alert("order is empty")
            return
        }  
        try {
            await addDoc((ordersCollection), 
            { orderNumber, table, date, customerName, ordersId /* customerOrders */, waiterUid  })  
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
                                    id = {product.id}
                                    photo = {product.photo}
                                    item = {product.item}
                                    description = {product.description}
                                    price = {product.price}
                                    addProducts = { addProducts }
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
                                <p> { orderNumber } </p>
                            </section>
                            <section className="info">
                                <section className="user-info">
                                    <label>Customer:</label>
                                    <input placeholder="Customer Name" 
                                    onChange={handleChangeCustomerName}>
                                    </input>
                                </section>
                                <section className="table-info">
                                    <label>Table:</label>
                                    <input placeholder="#" 
                                    onChange={handleChangeTable}>
                                    </input>
                                </section>
                            </section>
                            <section className="form">
                                <p>Item</p>
                                <p>Qty</p>
                            </section>
                        </section>
                        <section className="order">

                           {customerOrders.map(order => {
                            //console.log(customerOrders)
                            //console.log(typeof customerOrders)
                                return(
                                    // customerOrders!='' ?  tarejta de abajo : <p>no products yet</p>
                                    <AddItemsComponent 
                                    key={order.id}
                                    id = {order.id}
                                    item = {order.item}
                                    quantity = {counter}
                                    price = {order.price}
                                    deleteProduct = {deleteProduct}
                                    />
                                )
                            })}   
 
                        </section>
                        <section className="total-price">
                            <p>TOTAL:</p>
                            <p>$$$$$$</p>
                        </section>
                        <section className="order-btn">
                            <button onClick = { () => setShowModal(true) }>Submit Order</button>
                        </section>
                    </section>
                </div>
                <ModalComponent
                        isOpen={showModal}
                        onRequestClose={() => setShowModal(false)}
                        onConfirm={handleSubmitOrder}
                        onCancel={() => setShowModal(false)}
                        message="Are you sure you want to submit the order?"
                        confirmText="Confirm"
                        cancelText="Cancel"
                    />
            </div>
        </div>
    )
}

export default NewOrderComponent