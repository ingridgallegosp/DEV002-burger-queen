import React from "react"
import "./AddItemsComponent.scss"

const AddItemsComponent = (props) => {

    const addQty = () => 1

    const minusQty = () => 1


    return(
        <div className="items">
                <section className="products">
                    <p>{props.item}</p>
                    <section className="counter">
                        <button>
                            <img onClick = {addQty}src="src\assets\minus.png" alt="-"/>
                        </button>
                        <span>1</span>
                        <button>
                            <img onClick = {minusQty} src="src\assets\plus.png" alt="+"/>
                        </button>
                    </section>
                </section>

                <section className="delete">   
                    <figure>
                        <img src="src/assets/delete.png" alt="x"/>
                    </figure>
                    <p>{props.price}</p>
                 </section>
                
        </div>
    )
}
export default AddItemsComponent
