import React from "react"
import { useReducer } from "react"
import "./ProductComponent.scss"

//1. Initial state is an empty array
const initialState = {
    orders: []//check orderS S AND WITHOUT S-----------------------
}
//2. Reducer is gonna add products to order
const orderReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_ORDER':
            return{
                ...state,
                orders: [...state.order, action.payload]
            };
        default: 
            return state
    }
}

const ProductComponent = (props) => { 

    //3. Introduce in document
    const [orders, dispatch] = useReducer(orderReducer, initialState)

    //4. handle clic uses dispatch and send value to order
    const handleClick = order => {
        console.log('se agrega')
        dispatch({ type: 'ADD_TO_ORDER', payload: order})
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
                <button onClick={ () => handleClick(props) }>Add</button>
            </section>
        </div>
    )
}
export default ProductComponent