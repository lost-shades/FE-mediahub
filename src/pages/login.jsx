import React, { useState } from 'react'
import './Login.css'
import { Button } from './button/Button'

const Signin = () => {
  const [inputs, setInputs] = useState('')

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputs(values => ({...values, [name]: value}))
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    // my submit logic
  }

  return (
    <main className='login'>
        <header className='imageDiv'>
            <img src="/Media Hub Logo 2 1.png" alt="logo" />
        </header>
        <section className="formWrapper">            
            <form onSubmit={handleSubmit}>
                <div className='topheading'>
                    <h2>Welcome back!</h2>
                    <p>Kindly Fill in your Correct Log in Details</p>
                </div>
                <div className='formContainer'>
                    <div className="inputField">
                        <input
                            type="email"
                            placeholder='Email'
                            name='emailAddress'
                            value={inputs.emailAddress || ""}
                            onChange={handleChange}
                            required
                        />
                        <div className="passwordEye">
                            <input
                                type="password"
                                placeholder='Password'
                                name='passId'
                                value={inputs.passId || ""}
                                onChange={handleChange}
                                required
                            />
                            <img src='/eye-slash.png'/>
                        </div>
                        <p className='forgotPassword'>Forgot password?</p>
                    </div>
                    <button type="submit">Sign In</button>
                    {/* <Button value={"register"}/>
                    <Button value={"verify"} customStyle={'verifyButton'}/> */}
                </div>
            </form>
        </section>
    </main>
  )
}

export default Signin
