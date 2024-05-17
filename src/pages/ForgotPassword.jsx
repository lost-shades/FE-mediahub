import React from 'react'
import { PopupModal } from '../components/PopupModal'
import './Pages.css'

export const ForgotPassword = () => {
  return (
    <PopupModal 
        vector={"/Vector.png"} 
        smsTracking={"/sms-tracking.png"} 
        h3Title={"Forgot your password?"} 
        paragragh={"Enter your email address below to receive a reset code"}
        type={"text"}
        placeholder={"Enter email address"} 
        names={"ForgotPassword"}
        value={"Reset password"}         
        footerSentence={"Didnt recieve a code? "} 
        footerLink={"Try Again"}
    />
  )
}


{/* <main className='emailMain'>
        <header className='mediaLogoDiv'>
            <img src="/Media Hub Logo 2 1.png" alt="logo" />
        </header>
        <div className='emailHeading'>
            <p>Welcome back</p>
        </div>
        <section className='ForgotPassword-container'>
            <img className='vector' src="/Vector.png" alt="" />
            <section className='ForgotPassword-container2'>
                <div className='div1'>
                    <h3>Forgot your password?</h3>
                    <p>Enter your email address below to receive a reset code</p>
                </div>

                <div className='forgotPasswordInput'>
                    <Inputs
                        type={"text"}
                        placeholder={"Enter email address"}
                        names={"ForgotPassword"} 
                    />
                    <Button customStyle='ForgotPasswordButton' value={"Reset password"} />
                </div>
            </section>
        </section>
    </main> */}