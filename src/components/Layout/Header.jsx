import React from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/authContext"
import { getAuth, onAuthStateChanged } from "firebase/auth";
//import { collection, query, where } from "firebase/firestore";
import { auth, db } from "../../firebase/configFirebase"; 
import "./Header.scss"



const HeaderComponent = () => {

    // Me devuelve la informacion de mi contexto
    const { user, logOut } = useAuth()
    const navigate = useNavigate()

    // User uid
    const uid = onAuthStateChanged(auth, (user) => {
        if (user) {
            return user.uid;
        } else {
            console.log("There's no user signed in")
        }
    });

    //Consultar 
    /* 
    const subColRef = query(collection(db, 'usuarios', currentUser))
    console.log(subColRef) */
    

    

   
    // Log Out
    const handleLogout = async () => {
        await logOut
        navigate('/login')
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
                    <p className="title">User Name</p>
                    <p className="subtitle">Rol</p>
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