import "./HeroImgStyles.css"
import React from 'react'
import code2 from "../images/code2.jpg";
import { Link } from "react-router-dom";
const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={code2} alt="profile" />

            </div>
            <div className="content">
                <p>
                    Hi, I'M JAYANTA
                </p>
                <h1>A Full Stack Developer</h1>
                <div>
                    <Link to="/project" className="btn">
                        PROJECTS

                    </Link>
                    <Link to="/contact" className="btn btn-light">
                        CONTACT

                    </Link>
                </div>
            </div>

        </div>
    )
}
export default HeroImg;
