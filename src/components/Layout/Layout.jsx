import React from "react"
import HeaderComponent from "./Header"
import "./Layout.scss"

const LayoutComponent = ({ children }) => {
    return (
        <div>
            <HeaderComponent/>
            <main>
                {children}
            </main>
        </div>
    )
  }
  
export default LayoutComponent
  