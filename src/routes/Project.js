import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import PriceCard from '../Components/priceCard'
import Work from '../Components/Work'

export const Project = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="CHECK OUT MY PROJECTS" text="Machine Learning, Web development, Algorithms and many more.." />
            <Work />
            <PriceCard />
            <Footer />
        </div>
    )
}
