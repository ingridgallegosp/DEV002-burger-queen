import React from "react"
import HeaderComponent from "../Header/Header"
import "./LayoutHome.scss"

const LayoutHomeComponent = ({ children }) => {
    return (
        <div>
            <HeaderComponent/>
            <main>
                {children}
            </main>
        </div>
    )
  }
  
export default LayoutHomeComponent
  