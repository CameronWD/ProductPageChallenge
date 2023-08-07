import React from 'react'
import HeroBanner from './components/HeroBanner'
import ListedProducts from './components/ListedProducts'
import products from './data/products'


import './App.css'

function App() {
  return (
    <div>
      <header>
        <HeroBanner />
      </header>
      <main>
        <ListedProducts products={products} />
      </main>

    </div>
   
  )

}

export default App
