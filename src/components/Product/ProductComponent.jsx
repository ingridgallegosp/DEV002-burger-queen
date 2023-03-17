import React from "react"
import "./ProductComponent.scss"

const ProductComponent = (props) => { 

    return(
        <div className="product">
            <section className="product-info">
                <figure className="photo">
                    <img src="" alt={props.id} />
                </figure>
                <section className="description">
                    <p> {props.item} </p>
                    <p>{props.description} </p>
                    <p> {props.price} </p>
                </section>
            </section>
            <section className="add-button">
                <button>Add</button>
            </section>
        </div>
    )
}
export default ProductComponent