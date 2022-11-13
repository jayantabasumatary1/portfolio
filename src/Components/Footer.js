import "./FooterStyles.css"
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import React from 'react'

const Footer = () => {
    return (
        < div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div><p>Kopati Tea Estate</p>
                            <p>Udalguri, Assam, India</p>
                        </div>
                    </div>
                    <div className="phone">
                        <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div><p>8135030987</p>
                        </div>
                    </div>
                    <div className="mail">
                        <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div><p>jayantabasumatary01@gmail.com</p>
                        </div>
                    </div>

                </div>
                <div className="left">
                    <h4>About the company</h4>
                    <p>This is me Jayanta Basumatary currently working as a full stack software
                        Developer at Flexday India Solutions. I like programming and discussing on new projects.
                        Available for Freelancing.
                    </p>

                    <div className="social">
                        <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />


                        <FaGithub size={20} style={{ color: "#fff", marginRight: "2rem" }} />


                        <FaInstagram size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    </div>

                </div>
            </div></div >
    )
}
export default Footer;

