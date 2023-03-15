import React from "react"
import "./OptionsNavComponent.scss"

const OptionsNavComponent = () => {
    return(
        <nav className="options-nav">
            <section>
                <p>Sandwiches</p>
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
    )
}
export default OptionsNavComponent