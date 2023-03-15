import React from "react"
import HeaderComponent from "../../containers/Header/Header"
import MenuBarComponent from "../../containers/MenuBar/MenuBarComponent"
import PurchaseOrder from "../../containers/PurchaseOrder/PurchaseOrder"
//import OptionsNavComponent from "../../containers/OptionsNav/OptionsNavComponent"
import ProductComponent from "../../components/Product/ProductComponent"
import "../NewOrder/NewOrder.scss"
import "../../menu.json"

const NewOrderComponent = () => {
    const menuData = JSON.parse(menu)
    const sandwiches = menuData.filter(menuData => menuData.sandwiches)
    
    //hacer consulta productos
    //filtrar segun boton sand/drink etc
    //pintar segun seccion

    //sandwiches
    //Drinks
    
    return(
        <div className="content-order">
            <HeaderComponent/>
            <div className="order">
                <MenuBarComponent/>
                <div className="main">
                    {/* <OptionsNavComponent/> */}
                    <nav className="options-nav">
                        <section>
                            <p /* onClick={ sandwiches } */>Sandwiches</p>
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

                        <ProductComponent/>
                        
                    </section>
                </div>
                <PurchaseOrder/>
            </div>
        </div>
    )
}

export default NewOrderComponent