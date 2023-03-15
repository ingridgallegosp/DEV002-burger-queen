import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeComponent from "./pages/Home/Home"
import LoginComponent from "./pages/Login/Login"
import NewOrderComponent from "./pages/NewOrder/NewOrder"
import Error404 from "./pages/Error404/Error404"
import { routes } from "./utils/routes"
import './App.scss'

//import { PrivateRoute } from "./utils/privateRoute"

const App = () => {
  return (
    <BrowserRouter>
    
            <Routes>  
                <Route path={ routes.LOGIN } element={<LoginComponent/>} />
                <Route path='*' element={<Error404/>}/>

                <Route path={ routes.HOME } element= {<HomeComponent/>} />
                <Route path={ routes.NEWORDER } element={<NewOrderComponent/>} />

{/*                 <Route element={<PrivateRoute/>}>
                    <Route path={ routes.HOME } element= {<HomeComponent/>} />
                </Route>
                
                <Route element={<PrivateRoute/>}>
                    <Route path={ routes.NEWORDER } element={<NewOrderComponent/>} />
                </Route> // activar luego de maquetar*/}
                
            </Routes>
    </BrowserRouter>
  )
}

export default App
