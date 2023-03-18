import React from "react"
import "./AddItemsComponent.scss"

const AddItemsComponent = () => {
    return(
        <div className="items">
                <section className="products">
                    <p>Product Name</p>
                    <section className="counter">
                        <button>
                            <img src="src\assets\minus.png" alt="-"/>
                        </button>
                        <span>#</span>
                        <button>
                            <img src="src\assets\plus.png" alt="+"/>
                        </button>
                    </section>
                </section>

                <section className="delete">   
                    <figure>
                        <img src="src/assets/delete.png" alt="x"/>
                    </figure>
                    <p>$ 3.50</p>
                 </section>
                
        </div>
    )
}
export default AddItemsComponent
