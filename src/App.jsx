import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Signin from './pages/Login'
import { Signup } from "./pages/Signup"
import { EmailVerification } from "./pages/EmailVerification"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Signup />}/>
          <Route path="SignUp" element={<Signup/>}/>
          <Route path="Login" element={<Signin/>}/>
          <Route path="EmailVerification" element={<EmailVerification/>}/>
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
