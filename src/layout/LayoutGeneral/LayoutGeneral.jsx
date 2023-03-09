import React from "react"
import HeaderComponent from "./Header"
import "./LayoutGeneral.scss"

const LayoutGeneral = ({ children }) => {
    return (
        <div>
            <HeaderComponent/>
            <main>
                {children}
            </main>
        </div>
    )
  }
  
export default LayoutGeneral
  