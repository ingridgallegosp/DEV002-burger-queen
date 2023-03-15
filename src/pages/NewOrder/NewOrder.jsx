import React from "react"
import HeaderComponent from "../../containers/Header/Header"
import MenuBarComponent from "../../containers/MenuBar/MenuBarComponent"
import PurchaseOrder from "../../containers/PurchaseOrder/PurchaseOrder"
//import OptionsNavComponent from "../../containers/OptionsNav/OptionsNavComponent"
import ProductComponent from "../../components/Product/ProductComponent"
import "../NewOrder/NewOrder.scss"
//import data from "../../menu.json"
import data from '../../menu.json'


const NewOrderComponent = () => {
    const menuData = data
    console.log(typeof menuData)
    /*  sandwiches = menuData.filter(menuData => menuData.sandwiches)
    console.log(sandwiches) */
    
    //hacer consulta productos
    // for each object imprimir tarjeta
    //filtrar segun boton sand/drink etc
    //pintar segun seccion
    
    //React.createElement('div').

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