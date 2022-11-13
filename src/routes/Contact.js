import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import Form from '../Components/Form'
export const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="contact" text="Lets have a chat" />
            <Form />
            <Footer />
        </div>
    )
}
