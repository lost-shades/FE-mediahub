import React from 'react'
import './Pages.css'
import { PopupModal } from '../components/PopupModal'

export const EmailVerification = () => {
  return (
    <PopupModal 
        vector={"/Vector.png"} 
        smsTracking={"/sms-tracking.png"} 
        h3Title={"Verify its you."} 
        paragragh={"To verify your email address, please check your inbox and enter the code below"}
        type={"text"}
        placeholder={"Enter 4 digit code"} 
        names={"VerifyCode"}
        value={"Verify code"}         
        footerSentence={"Didnt recieve an email? "} 
        footerLink={"Try Again"}
    />
  )
}


{/* <main className='emailMain'>
        <header className='imageDiv'>
            <img src="/Media Hub Logo 2 1.png" alt="logo" />
        </header>
        <div className='emailHeading'>
            <p>Let's get you started</p>
        </div>
        <section className='verify-container'>
            <img className='vector' src="/Vector.png" alt="" />
            <section className='verify-container2'>
                <div className='div1'>
                    <img src="/sms-tracking.png" alt="" />
                    <h3>Verify its you.</h3>
                    <p>To verify your email address, please check your inbox and enter the code below</p>
                </div>

                <div className='verificationInput'>
                    <Inputs
                        type={"text"}
                        placeholder={"Enter 4 digit code"}
                        names={"VerifyCode"} 
                    />
                    <Button customStyle='verificationButton' value={"Verify code"} />
                </div>
                <footer className='p3'>Didnt recieve an email? <Link className='p3child'>Try Again</Link></footer>
            </section>
        </section>
    </main> */}

