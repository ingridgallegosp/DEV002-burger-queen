import React from "react"
import "./ProductComponent.scss"

const ProductComponent = () => {
    
    

    return(
        <div className="product">
            <section className="product-info">
                <figure className="photo">
                    <img src="" alt="product"/>
                </figure>
                <section className="description">
                    <p>Name</p>
                    <p>Description</p>
                    <p>Price</p>
                </section>
            </section>
            <section className="add-button">
                <button>Add</button>
            </section>
        </div>
    )
}
export default ProductComponent