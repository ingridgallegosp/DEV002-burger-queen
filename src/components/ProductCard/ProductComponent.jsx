import React from "react"
import { useReducer } from "react"
import "./ProductComponent.scss"

//1. Initial state is an empty array
const initialState = {
    customerOrders: []
}
//2. Reducer is gonna add products to orders
//It is going to take two arguments, the current state and action. 
//This reducer's job is to modify or update the state object whenever there is an action
//taken within the app by the user.

const orderReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_ORDER':
            return{
                ...state,
                orders: [...state.orders, action.payload]
            };
        default: 
            return {
                state
            }
    }
} 

const ProductComponent = (props) => { 

    //3. Introduce in document
    const [customerOrders, dispatch] = useReducer(orderReducer, initialState)

    //4. handle clic uses dispatch and send value to order
    const handleClick = order => {
        dispatch({ type: 'ADD_TO_CUSTOMER_ORDER', payload: order})
        console.log('se agrega')
    } 
    console.log(customerOrders)

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
                <button  onClick = {() => handleClick(props)} >Add</button>
            </section>
        </div>
    )
}
export default ProductComponent