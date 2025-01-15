import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import { Counter } from '../app/Counter'
import { Products } from '../Components/Products'

const Home = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Hero />
            <Products />
        </div>
    )
}

export default Home