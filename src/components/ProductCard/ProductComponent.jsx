import React from "react"
import "./ProductComponent.scss"

const ProductComponent = (props) => { 

    return(
        <div className="product">
            <section className="product-info">
                <figure className="photo">
                    <img src={props.photo} alt={props.id} />
                </figure>
                <section className="description">
                    <p className="main-info"> {props.item} </p>
                    <p className="descript">{props.description} </p>
                    <p className="main-info"> {props.price} </p>
                </section>
            </section>
            <section className="add-button">
                <button>Add</button>
            </section>
        </div>
    )
}
export default ProductComponent