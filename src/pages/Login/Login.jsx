import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { logIn } from "../../firebase/configFirebase"
import { routes } from "../../utils/routes"
import "./Login.scss"

const LoginComponent = () => {
       
    //el valor es lo que estoy trayendo - en este caso el objeto y el objeto tiene una funcion sigIn
    const [email, setEmail] = useState() //--
    const [password, setPassword] = useState() //--
    let [error, setError]= useState()
    const navigate = useNavigate()
    
    //funcion que actualiza el estado (valores de email y password)
    const handleChangeEmail = e => setEmail(e.target.value)
    
    const handleChangePassw = e => setPassword(e.target.value)
    
    //funcion para ver que tiene el estado
    const handleSubmit = async e => {
        e.preventDefault()
        console.log(e)
        setError = ('')
        try {
            await logIn(email, password)
            navigate(routes.HOME)
        } catch (error) {
            console.log(error.code)
            if(error.code === 'auth/internal error')
            setError('correo invalido')
        }
    }
    return(
        <div>
            <form>
                <figure>
                    <img id="logo" src="src\assets\montagu-logo.png" alt="montagu logo"/>
                </figure>
                <section className="info">
                    <label>E-mail</label>
                    <input 
                    type="text" 
                    id="email" 
                    placeholder="admin@montagu.com" 
                    onChange={handleChangeEmail}
                    />
                    <p id="errorMessage" className="hide">This field is required</p>
                </section>
                <section className="info">
                    <label>Password</label>
                    <input 
                    type="password" 
                    id="password" 
                    placeholder="******"
                    onChange={handleChangePassw}
                    />
                    <p id="errorMessage" >{error}</p>
                </section>
                <section className="button">
                    <button onClick={handleSubmit} >Log In</button>
                </section>
            </form>
        </div>
    )
}

export default LoginComponent