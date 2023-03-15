import React from "react"
import { useNavigate } from "react-router-dom"
import { routes } from "../../utils/routes"


const Error404 = () => {
    const navigate = useNavigate()
    const returnHome = () => navigate(routes.HOME)
    return(
        <div className="error404">
            <p> Not Found </p>
            <button onClick={ returnHome }>Return to Home </button>
        </div>
    )
}
export default Error404