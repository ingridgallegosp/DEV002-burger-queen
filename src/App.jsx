import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

import HomeComponent from "./components/Home/Home"
import LoginComponent from "./components/Login/Login"
import NewOrderComponent from "./components/NewOrder/NewOrder"
import Error404 from "./components/Error404/Error404"

import {AuthProvider} from "./context/authContext"

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomeComponent/>} />
          <Route path="/login" element={<LoginComponent/>} />
          <Route path="/new-order" element={<NewOrderComponent/>} />
          <Route path="/404" element={<Error404/>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
