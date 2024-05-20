import React from 'react'
import { Navigations } from '../components/Navigations'
import { Toggle } from '../components/Toggle'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'

export const ProfilePage = () => {
  return (
    <main className='homePageMain'>
        <Navigations 
            Home='Home'
            Dashboard='Dashboard' 
            Services='Services'
            showButtons = {false}        
       />
       <Toggle />
       <section>
            <CgProfile/>
            <div>
                <p>Users Name</p>
            </div>
            <div>
                <Link>Overview</Link>
                <Link>Overview</Link>
                <Link>Overview</Link>
                <Link>Overview</Link>
            </div>
       </section>
    </main>
  )
}