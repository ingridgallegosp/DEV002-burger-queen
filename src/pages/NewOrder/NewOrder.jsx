import React from "react"
import { useState } from "react"
import HeaderComponent from "../../containers/Header/Header"
import MenuBarComponent from "../../containers/MenuBar/MenuBarComponent"
import PurchaseOrder from "../../containers/PurchaseOrder/PurchaseOrder"
//import OptionsNavComponent from "../../containers/OptionsNav/OptionsNavComponent"
import ProductComponent from "../../components/Product/ProductComponent"
import "../NewOrder/NewOrder.scss"
import data from "../../menu.json"


const NewOrderComponent = () => {
    const [products, setProducts] = useState([])
    const menu = data
    //console.log(menu)
    //console.log(typeof menu)
    
    const sandwiches = menu.sandwiches
    console.log(sandwiches)

    const extras = menu.extras
    const drinks = menu.drinks
    const desserts = menu.dessert

    const itemId = (array) => array.map((e) => (e.item))

     const handleSubmitSandw = (sandwiches) => {
        setProducts('')
        setProducts(sandwiches)
        console.log('debe mostrar saduches')
    }  
    
    //hacer consulta productos
    //evaluamos - for each imprimir tarjeta
    
    //filtrar segun boton sand/drink etc
    //pintar segun seccion
    //con add product debe anadirse a una coleccion 

    //al hacer clic en add order, el pedido de la coleccion se guarda y la tajeta se pinta en seccion waiting

        return(
        <div className="content-order">
            <HeaderComponent/>
            <div className="order">
                <MenuBarComponent/>
                <div className="main">
                    {/* <OptionsNavComponent/> */}
                    <nav className="options-nav">
                        <section>
                            <p   onClick = { handleSubmitSandw }  >Sandwiches</p>
                        </section>     
                        <section>
                            <p>Extras</p>
                        </section> 
                        <section>
                            <p>Drinks</p>
                        </section>  
                        <section>
                            <p>Dessert</p>
                        </section>   
                    </nav>
                    <section className="products-info" id="products">
                       
                        {  sandwiches.map((product) => {
                            return(
                            <ProductComponent
                            key = {product.id}
                            item = {product.item}
                            description = {product.description}
                            price = {product.price}
                            />
                            )
                            
                        })  }                 
                        
                    </section>
                </div>
                <PurchaseOrder/>
            </div>
        </div>
    )
}

export default NewOrderComponent