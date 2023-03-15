import React from "react"
import { useNavigate } from "react-router-dom";
import { collection, doc, getDocs, getDoc, query } from "firebase/firestore";
import { auth, db, logOut } from "../../firebase/configFirebase"; 
import { routes } from "../../utils/routes";
import "./Header.scss"

const HeaderComponent = () => {
    
    const navigate = useNavigate()    
    const returnHome = () => navigate(routes.HOME)
    // Info 
    /* const signedUser = auth.currentUser    
    const uid = signedUser.uid
    console.log(uid)

    const docRef = doc(collection(db, 'usuarios', uid, 'displayName.value'))
    console.log(docRef)
    const querySnapshot = async () => await getDoc(docRef);
     */ //-- OK activar luego de maquetar
    
    
    // Log Out
    const handleLogout = () => {
        logOut
        navigate(routes.LOGIN)
    }

    return (
        <div id="header">
            <section id="time">
                <p className="title">Resto Sandwich</p>
                <p className="subtitle">Date</p>
            </section>
            <figure id="logo">
                <img className="logo" onClick={returnHome} src="src/assets/montagu-logo.png" alt="Logo Montagu"/>
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