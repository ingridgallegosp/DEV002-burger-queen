import React from "react"
import { useNavigate } from "react-router-dom";
import { routes } from "../../utils/routes";
import { collection, query } from "firebase/firestore";
import { auth, db, user, onAuthState } from "../../firebase/configFirebase"; 
import "./Header.scss"

const HeaderComponent = () => {
    const navigate = useNavigate()

    onAuthState()
    if (user !== null) {
        const uid = user.uid;        
    } else if (!user) {
        navigate(routes.LOGIN)
    }

    

    // Info 
    /* const displayName = query(collection(db, 'usuarios', user.displayName))
    console.log(displayName)
    const rol = query(collection(db, 'usuarios', user.rol))
    console.log(displayName) */
    
    // Log Out
    const handleLogout = async () => {
        await logOut
        navigate(routes.LOGIN)
    }

    return (
        <div id="header">
            <section id="time">
                <p className="title">Resto Sandwich</p>
                <p className="subtitle">Date</p>
            </section>
            <figure id="logo">
                <img className="logo" src="src/assets/montagu-logo.png" alt="Logo Montagu"/>
            </figure>
            <section id="user">
                <section>
                    <p className="title">{/*{displayName}*/}</p>
                    <p className="subtitle">{/*{rol}*/}</p>
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