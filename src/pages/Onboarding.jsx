import React from 'react'
import { Link } from 'react-router-dom'

export const Onboarding = () => {
  return (
    <main className='mainStyle'>
      <header className='mediaLogoDiv'>
        <img src="/Media Hub Logo 2 1.png" alt="logo" />
      </header>
      <section className='onboarding'>
        <div className='mediah1pDiv'>
          <h1>Select your Media accounts</h1>
          <p>Kindly select the accounts you want to connect to Media hub</p>
        </div>
        <section className='mediaSection'>
          <div>
            <Link><img src="/public/Media 1.png" alt="" /></Link>
            <Link><img src="/public/Media 2.png" alt="" /></Link>
            <Link><img src="/public/Media 3.png" alt="" /></Link>
          </div>
          <div>
            <Link><img src="/public/Media 4.png" alt="" /></Link>
            <Link><img src="/public/Media 5.png" alt="" /></Link>
            <Link><img src="/public/Media 6.png" alt="" /></Link>
          </div>
          <div>
            <Link><img src="/public/Media 7.png" alt="" /></Link>
            <Link><img src="/public/Media 8.png" alt="" /></Link>
            <Link><img src="/public/Media 9.png" alt="" /></Link>
          </div>
        </section>
        <div className='mediaButtonDiv'>
          <button>Skip</button>
          <button className='mediaDoneButton'>Done</button>
        </div>
      </section>
    </main>
         
  )
}
