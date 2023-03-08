import React from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/authContext"
import "./Header.scss"

const HeaderComponent = () => {

    // Me devuelve la informacion de mi contexto
    const { user, logOut } = useAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logOut
        navigate('/login')
    }
    return (
            <div id="header">
                <section id="time">
                    <p>Resto Sandwich</p>
                    <p>Date</p>
                </section>
                <figure id="logo">
                    <img className="logo" src="src\assets\montagu-logo.png" alt="Logo Montagu"/>
                </figure>
                <section id="user">
                    <section>
                        <p>User Name</p>
                        <p>Rol</p>
                    </section>
                    <figure>
                        {/*<img src="" alt="Log Out"/>*/}
                        <button onClick={handleLogout}>Log Out</button>
                    </figure>
                </section>
            </div>
    )
}

export default HeaderComponent