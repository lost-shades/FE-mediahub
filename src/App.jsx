import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Signin from './pages/Login'
import { Signup } from "./pages/Signup"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Signup />}/>
          <Route path="SignUp" element={<Signup/>}/>
          <Route path="LogIn" element={<Signin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
