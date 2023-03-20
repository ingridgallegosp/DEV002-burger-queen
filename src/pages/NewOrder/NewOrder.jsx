import React from "react"
import { useState } from "react"
import HeaderComponent from "../../containers/Header/Header"
import MenuBarComponent from "../../containers/MenuBar/MenuBarComponent"
import ProductComponent from "../../components/ProductCard/ProductComponent"
import AddItemsComponent from "../../components/AddItems/AddItemsComponent"
import data from "../../menu.json"
import "../NewOrder/NewOrder.scss"

const NewOrderComponent = () => {
    const [products, setProducts] = useState([])
    
    const menu = data
    const sandwiches = menu.sandwiches
    //console.log(sandwiches)
    const extras = menu.extras
    const drinks = menu.drinks
    const desserts = menu.desserts

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
    
    //importar data
    //evaluamos - for each imprimir tarjeta
    //filtrar segun boton sandw/drink etc
    //pintar segun seccion
    //con add product debe anadirse a orden
    //al hacer clic en add order, se guarda en coleccion
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

                         {/*    { orders.orders.map(order => {
                                return(
                                <AddItemsComponent key={order.id}
                                />
                                )
                            })}  
 */}
                        </section>
                        <section className="total-price">
                            <p>TOTAL:</p>
                            <p>$$$$$$</p>
                        </section>
                        <section className="order-btn">
                            <button>Add Order</button>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default NewOrderComponent