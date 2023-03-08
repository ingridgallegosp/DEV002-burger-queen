import React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../firebase/configFirebase"

// Context
// lugar unico (archivo por fuera) donde todos los componentes pueden saber si el usuario esta logueado o no
// y c/u puede hacer la condicional para verificar si se autentico y continuar o no
// permite definir proveedor y luego crear objetos
export const authContext = createContext()

export const useAuth = () => {
  const context = useContext(authContext)
  if(!context) throw new Error ('There is not auth provider')
  return context
}

export function AuthProvider({children}) {

  // Al iniciar provider es null
  let [user, setUser]= useState(null)
  
  // Inicio de sesion
  const logIn = async (email, password) => signInWithEmailAndPassword(auth, email, password)

  // Cerrar de sesion
  const logOut = () => signOut(auth)

  // cuadno carga el provider, definimos una escucha y muestra el cambio de estado
  useEffect(() => { 
    onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      console.log(currentUser)
    })

  },[])

  return (
    //retorna un provider//dentro voy a colocar un componente y van a tener acceso a lo que tenga el provider
    //todo componente hijo va a poder acceder a los datos del componente padre
    //dato de user login se va a poder mostrar en todos los componentes

    //el valor es lo que exporto-en este caso el objeto y el objeto tiene una funcion sigIn
    <authContext.Provider value={{ logIn, user, logOut }}> 
      {children}
    </authContext.Provider>
  )
}

