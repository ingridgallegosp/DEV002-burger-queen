import React from "react"
import LayoutComponent from "../Layout/Layout"
import { useNavigate } from "react-router-dom"
import { uid } from "../../firebase/configFirebase"; 


const HomeComponent = () => {
    
    const navigate = useNavigate()
    
    //Verificando user
    const userUid = uid()
    console.log(userUid)

    return(
        <LayoutComponent>
            <p>Welcome</p>
        </LayoutComponent>
    )
}

export default HomeComponent