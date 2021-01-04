import React from 'react'
import Banner from './Banner'
import Products from './Products'
import Sidebar from './Sidebar'
import Trending from './Trending'

function Home() {
  return (
    <div>
      <Banner />
      <Trending />
      <div className="container">
        <main>
          <Sidebar />
          <Products />
        </main>
      </div>
    </div>
  )
}

export default Home
