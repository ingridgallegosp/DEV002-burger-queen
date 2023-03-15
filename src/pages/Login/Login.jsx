import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { logIn } from "../../firebase/configFirebase"
import { routes } from "../../utils/routes"
import { validEmail, validPassword } from "../../utils/validations"
import "./Login.scss"

const LoginComponent = () => {
    
    const [user, setUser]= useState(false)
    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("") 
    const [error, setError]= useState("")
    const [errorPass, setErrorPass]= useState("")
    const navigate = useNavigate()
    
    //Update states (email and password values)
    const handleChangeEmail = e => { 
        setError('')
        setEmail(e.target.value)
    }

    const handleChangePassw = e => { 
        setError('')
        setPassword(e.target.value)
    } 
    
    //Front and back validations
    const handleSubmit = async e => {
        e.preventDefault()
        //console.log(e)
        const emailValueValid = validEmail(email)
        const passwordValueValid = validPassword(password)

        if(!email && !password ) {
            setError('')
            setErrorPass('')
            setError('E-mail is required')
            setErrorPass('Password is required')
            return 
        }
        if(!email) {
            setError('')
            setError('E-mail is required')
            return
        }
        if(!emailValueValid) {
            setError('')
            setError('Enter a valid e-mail. E.g admin@montagu.com')
            return
        } 

        if(!password){
            setErrorPass('')
            setErrorPass('Password is required')
            return 
        }
        if(!passwordValueValid){
            setErrorPass('')
            setErrorPass('Passwords must contain at least 6 characters')
            return
        }
        
        try {
            
            await logIn(email, password)
            setUser(true)
            navigate(routes.HOME)

        } catch (error) {
            console.log(error.code)

            if(error.code === 'auth/user-not-found'){
                setError('')
                setError('User not found. Try with another e-mail.')
                return
            }
            if(error.code === 'auth/invalid-email'){
                setError('')
                setError('Enter a valid e-mail. e.g admin@montagu.com')
                return
            }
            if(error.code === 'auth/wrong-password'){
                setError('')
                setErrorPass('Wrong password. Try again') 
                return
            }
            if(error.code === 'auth/internal-error'){
                setError('')
                setError('internal error')
                return
            } 
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
                    <p id="errorMessage" className="hide">{error}</p>
                </section>

                <section className="info">
                    <label>Password</label>
                    <input 
                    type="password" 
                    id="password" 
                    placeholder="******"
                    onChange={handleChangePassw}
                    />
                    <p id="errorMessage" >{errorPass}</p>
                </section>

                <section className="button">
                    <button type="submit" onClick={handleSubmit}>Log In</button>
                </section>
            </form>
        </div>
    )
}

export default LoginComponent