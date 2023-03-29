import React from "react"
import { useCounter } from "../../pages/NewOrder/NewOrder"
import "./AddItemsComponent.scss"

const AddItemsComponent = (props) => {
    
    // Delete const [childData, setChildData] = useState([]);

    // Qty counter
    const {counter, increase, decrease} = useCounter()
    


    return(
        <div className="items">
                <section className="products">
                    <p>{props.item}</p>
                    <section className="counter">
                        <button>
                            <img onClick={decrease} 
                            src="src\assets\minus.png" alt="-"/>
                        </button>
                        <span>{counter}</span>
                        <button>
                            <img onClick={increase} 
                            src="src\assets\plus.png" alt="+"/>
                        </button>
                    </section>
                </section>

                <section className="delete">   
                    <figure>
                        <img onClick={() => props.deleteProduct(props.id)}
                        src="src/assets/delete.png" alt="x"/>
                    </figure>
                    <p>{props.price}</p>
                 </section>
                
        </div>
    )
}
export default AddItemsComponent
