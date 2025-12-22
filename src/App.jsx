import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AdminPage from './pages/adminPage'
import loginPage from './pages/loginPage'

function App() {

  return (
    <BrowserRouter>
       <div className="w-full h-[100vh] bg-red-600">
          <Routes path="/">
              <Route path="/" elements={<h1>Home page</h1>}/>
              <Route path="/register" elements={<h1>Register page page</h1>}/>
              <Route path="/login" elements={loginPage}/>
              <Route path="/admin/*" elements={AdminPage}/>
          
          
          
          </Routes>

       </div>
    </BrowserRouter>
  )
}

export default App
