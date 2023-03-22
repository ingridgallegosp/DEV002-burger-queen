import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { collection, doc, getDocs, getDoc, query } from "firebase/firestore";
import { auth, db, logOut } from "../../firebase/configFirebase"; 
import { routes } from "../../utils/routes";
import "./Header.scss"

const logoMontagu = "src/assets/montagu-logo.png"

const HeaderComponent = () => {
   
    //const [uid, setUid] = useState("")
    const [name, setName] = useState("")
    const [rol, setRol] = useState("")

    const navigate = useNavigate()    
    const returnHome = () => navigate(routes.HOME)
    const date = new Date().toLocaleDateString('es-es', {
        weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric',
    });


    // Info 
    /* const signedUser = auth.currentUser
    const currentUid = signedUser.uid
    if (currentUid === null){
        navigate(routes.LOGIN)
    } */
    //setUid(currentUid)
    //console.log(uid)
    /* const setUserData = async () =>{
        const docRef = doc(collection(db, 'usuario', currentUid, 'displayName.value'))
        //console.log(q) 
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const registeredUser = docSnap.data()
        console.log(registeredUser)
        //setName(registeredUser.displayname)
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        } 
    }
    //console.log(name) */
    /* const setUserData = async () =>{
        const q = query(collection(db, "usuario", currentUid, "displayName"))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            return console.log(doc.id, " => ", doc.data());
        });
    }
    console.log(setUserData()) */

        
    
    // Log Out
    const handleLogout = () => {
        try{
            //setUser(false)
            logOut
            navigate(routes.LOGIN)
        }
        catch (error) {
            console.log(error.code)
        }
    }

    return (
        <div id="header">
            <section id = "time">
                <p className = "title">Resto Sandwich</p>
                <p className = "subtitle">{ date }</p>
            </section>
            <figure id="logo">
                <img className = "logo" onClick = { returnHome } src={ logoMontagu } alt = "Logo Montagu"/>
            </figure>
            <section id="user">
                <section>
                    <p className = "title"></p>
                    <p className = "subtitle"></p>
                </section>
                <figure>
                    <button >
                        <img src="src\assets\signout.png" alt="Log Out" onClick = { handleLogout }/>
                    </button>
                </figure>
            </section>
        </div>
    )
}

export default HeaderComponent