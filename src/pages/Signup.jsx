import React from 'react'
import { Button } from '../components/Button'
import { Inputs } from '../components/Inputs'


export const Signup = () => {
    function SocialButton({ src, alt }) {
        return (
          <div className="social-button">
            <img src={src} alt={alt} className="social-icon" />
          </div>
        );
      }
      
      const socialButtons = [
        {
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a9d85f687ce0a89320f3b43c3bf9b366c4b4445796c478b441301578b192e2e?apiKey=bc155cd4463f4c48a216b01c1991193c&",
          alt: "Google Logo",
        },
        {
          src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5220ac6808577307483f4c6309ba82b2f918bee7db497bec7b6c16a4295cbe5a?apiKey=bc155cd4463f4c48a216b01c1991193c&",
          alt: "Facebook Logo",
        },
      ];
            

    return (
        <main className="mainStyle">
            <header className='imageDiv'>
                <img src="/Media Hub Logo 2 1.png" alt="logo" />
            </header>
            <section className='formWrapper'>
                <form>
                    <div className='topheading'>
                        <h2>Let's get you started</h2>
                        <p>
                        Become a MediaHubber today and Keep track of all your Media
                        consumption
                        </p>
                    </div>
                    <div className='formContainer'>
                        <div className='inputgap'>
                            <div>
                            <Inputs
                                type={"text"}
                                placeholder={"Full Name"}
                                names={"Usersname"} 
                            />
                            <img
                                src=''
                                alt=""
                                className="input-icon"
                            />
                            </div>
                            <div>
                            <Inputs
                                type={"email"}
                                placeholder={"Email"}
                                names={"emailAddress"} 
                            />
                            <img
                                src=''
                                alt=""
                                className="input-icon"
                            />
                            </div>
                            <div>
                            <input
                                type={"password"}
                                placeholder={"Password"}
                                names={"passId"}
                            />
                            <img
                                src=''
                                alt=""
                                className="input-icon"
                            />
                            </div>
                        </div>
                        <Button className='buttonStyle' value={"Sign Up"} />
                        <p className="separator">Or</p>
                        <div className="socialButtons">
                        {socialButtons.map(({ src, alt }) => (
                            <SocialButton key={src} src={src} alt={alt} />
                        ))}
                        </div>
                        <p>Already have an account?<a href="/"> Sign in</a></p>
                    </div>
                </form>
            </section>
        </main>
    );
    }
