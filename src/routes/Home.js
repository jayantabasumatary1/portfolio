import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImg from "../Components/HeroImg"
import Footer from '../Components/Footer'
import Work from "../Components/Work"
export const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroImg />
            <Work />
            <Footer />
        </div>
    )
}