import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.scss'

import HomeComponent from "./pages/Home/Home"
import LoginComponent from "./pages/Login/Login"
import NewOrderComponent from "./pages/NewOrder/NewOrder"
import Error404 from "./pages/Error404/Error404"
import { routes } from "./utils/routes"
//import {AuthProvider} from "./context/authContext"

const App = () => {
  return (
    <BrowserRouter>
      {/*<AuthProvider>*/}
        <Routes>
          <Route path={ routes.HOME } element={<HomeComponent/>} />
          <Route path={ routes.LOGIN } element={<LoginComponent/>} />
          <Route path={ routes.NEWORDER } element={<NewOrderComponent/>} />
          <Route path={ routes.ERROR404 } element={<Error404/>} />
        </Routes>
      {/*</AuthProvider>*/}
    </BrowserRouter>
  )
}

export default App
