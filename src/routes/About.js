import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2';
import AboutContent from '../Components/AboutContent';
export const About = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="About" text="This world shall know pain" />
            <AboutContent />
            <Footer />
        </div>
    )
};
