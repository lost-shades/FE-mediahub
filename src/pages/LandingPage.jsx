import React from 'react'
import { Navigations } from '../components/Navigations'

export const LandingPage = () => {
  return (
    <main>
        <Navigations 
            Home='Home'
            Dashboard='Dashboard' 
            Services='Services'
            showIcons = {false}        
        />
        <section>
       
       </section>
 
       <section>
         <div>
           <h1>What can you do with Media Hub</h1>
           <div>
             <div>
               <img src="/public/musicicon.png" alt="" />
               <h2>Link and create Playlist</h2>
               <p>Link your playlist from your favourite streaming platform and even create new ones with Media Hub</p>
             </div>
             <div>
               <img src="/public/video.png" alt="" />
               <h2>Link and create Watchlist</h2>
               <p>Link your Watchlist from your favourite streaming platform and even create new ones with Media Hub</p>
             </div>
             <div>
               <img src="/public/shareicon.png" alt="" />
               <h2>Share Media Hub Contents</h2>
               <p>Share your saved movies,Music, recommendations,and even Playlist with anybody.</p>
             </div>
             <div>
               <img src="/public/trackingicon.png" alt="" />
               <h2>Track Media Contents</h2>
               <p>Keep track of all your media contents on all streaming platforms and unify them on Media Hub</p>
             </div>
           </div>
         </div>
       </section>
 
       <section>
         <div>
           <h1>View your Unified Media Contents</h1>
           <p>Gain access to al your linked media contents from different platform all on your Media Hub homepage.</p>
         </div>
         <div>
           <img src="/public/homeimg.png" alt="" />
         </div>
       </section>
 
       <section>
         <div>
           <img src="/public/statsimg.png" alt="" />
         </div>
         <div>
           <h1>Track and view streaming Progress</h1>
           <p>
           Keep track of all your streaming progress for movies and music on the Media Hub dashboard.
           </p>
         </div>
       </section>
 
       <section>
         <div>
           <p>Pricing</p>
         </div>
         <div>
           <div>
             <h3>Free</h3>
             <p>$0.00</p>
             <p>Connect 2 streaming services </p>
             <p>Limited manual media tracking</p>
             <p>Share playlist/watch list within the app</p>
             <button>Get Plan</button>
           </div>
           
           <div>
             <h3>Pro</h3>
             <p>$4.99</p>
             <p>Connect  up to 5 streaming services </p>
             <p>Unlimited manual media tracking</p>
             <p>Share playlist/watch list across
                 social platforms
             </p>
             <p>Advanced goal setting with
                progress tracking</p>
                <button>Get Plan</button>
           </div>
 
           <div>
             <h3>Premium</h3>
             <p>$06.99</p>
             <p>Connect all supported streaming
               services </p>
             <p>Advanced media tracking with
                 data visualization</p>
             <p>Collaborative playlist/watch list
                 share and edit with others </p>
                 <p>Customizable goals with achievement
                   badges and challenges </p>
             <button>Get Plan</button>
           </div>
         </div>
       </section>
 
       <section></section>
       <section></section>
    </main>
  )
}

