import React from "react"
import { useEffect, useState } from "react"
import { Navigate, Outlet } from 'react-router-dom'
// The <Outlet> component can be used in a parent <Route> element to render out child elements.
import { onAuthStateChanged } from 'firebase/auth';
import { auth  } from "../firebase/configFirebase"
import { routes } from "./routes"


export const PrivateRoute = () => {

    // Al iniciar estado es null
    const [user, setUser]= useState(null)
    
    // Definimos una escucha y muestra el cambio de estado
    useEffect(() =>  {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(true)
              //console.log(user.uid)
            } else {
              console.log("No user")
            }
        });
    }, [])

    return (
      user ? <Outlet/> : <Navigate to={ routes.LOGIN }/>
  )
}
