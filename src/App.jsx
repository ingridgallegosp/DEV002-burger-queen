import React from "react"
//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeComponent from "./components/Home/Home"

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
