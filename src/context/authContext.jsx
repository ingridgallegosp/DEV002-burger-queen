import React from "react"
import { useEffect, useState } from "react"
import { onAuthStateChanged} from 'firebase/auth';
import { auth } from "../firebase/configFirebase"

// Context
// lugar unico (archivo por fuera) donde todos los componentes pueden saber si el usuario esta logueado o no
// y c/u puede hacer la condicional para verificar si se autentico y continuar o no
// permite definir proveedor y luego crear objetos

export const AuthProvider = ({children}) => {

    // Al iniciar provider es null
    let [user, setUser]= useState(null)

    // cuando carga el provider, definimos una escucha y muestra el cambio de estado
    useEffect(() => { 
        onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log(currentUser)
        })

  },[])

  return (
    //retorna un provider//dentro voy a colocar un componente y van a tener acceso a lo que tenga el provider
    //todo componente hijo va a poder acceder a los datos del componente padre

    //el valor es lo que exporto-en este caso el objeto y el objeto tiene una funcion sigIn
    <auth.Provider value={{ user }}> 
      {children}
    </auth.Provider>
  )
}

