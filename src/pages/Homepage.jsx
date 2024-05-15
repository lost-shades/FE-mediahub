import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { IoMdSearch } from 'react-icons/io'

export const Homepage = () => {
  return (
    <main className='mainStyle'>
      <header className='navStyle'>
        <nav>
          <img src="/Media Hub Logo 2 1.png" alt="logo" />
          <ul className='listStyle'>
            <li>Home</li>
            <li>Dashboard</li>
            <li>Services</li>
          </ul>
          <div className='navIcons'>
            <IoMdSearch/>
            <CgProfile/>
          </div>
        </nav>
      </header>
      <div>
        <button>Music</button>
        <button>Movies</button>
      </div>

      <section>
        <div>
          <p>Recomendations <a className='' href="/">See all</a></p>
        </div>
        <div>
          <img src="/public/Frame 1.png" alt="" />
          <img src="/public/Frame 2.png" alt="" />
          <img src="/public/Frame 3.png" alt="" />
          <img src="/public/Frame 4.png" alt="" />
        </div>
      </section>
      
      <section>
        <div>
          <p>Continue Watching <a className='' href="/">See all</a></p>
        </div>
        <div>
          <img src="/public/Frame 5.png" alt="" />
          <img src="/public/Frame 6.png" alt="" />
          <img src="/public/Frame 7.png" alt="" />
          <img src="/public/Frame 8.png" alt="" />
        </div>
      </section>

      <section>
        <div>
          <p>My Watch List <a className='' href="/">See all</a></p>
        </div>
        <div>
          <img src="/public/Frame 9.png" alt="" />
          <img src="/public/Frame 10.png" alt="" />
          <img src="/public/Frame 11.png" alt="" />
          <img src="/public/Frame 12.png" alt="" />
        </div>
      </section>

    </main>
  )
}
