import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import Edit from './pages/Edit'
import Error from './pages/Error'
import View from './pages/View.JSX'
import { ToastContainer, toast } from 'react-toastify';
// import './App.css'

function App() {
 
  return (
    <>
    <ToastContainer />
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<View/>}/> 
       <Route path="/Add"element={<Add/>}/> 
        <Route path="/Edit/:ExpenseId"element={<Edit/>}/> 
        {/* page not found */}
         <Route path="*"element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
