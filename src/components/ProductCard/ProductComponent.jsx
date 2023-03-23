import React from "react"
import { useState } from "react"
import "./ProductComponent.scss"

const ProductComponent = (props) => { 
    //console.log(props)
    const [childData, setChildData] = useState([]);
    
    const handleChange = (productInfo) => {
        //setChildData(productInfo);
        setChildData((prevState) => [...prevState, productInfo])
        props.addProducts(productInfo)
        //console.log(productInfo)
    }

    return(
        <div className="product" key={props.id}>
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
                <button value={ props.id } onClick = { () => handleChange(props) } >Add</button>
            </section>
        </div>
    )
}
export default ProductComponent