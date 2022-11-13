import "./AboutContentStyles.css"
import React from 'react'
import { Link } from "react-router-dom";
import code9 from "../images/code9.jpg";
import code8 from "../images/code8.jpg";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>I am Pain</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>

                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={code8} className="img" alt="true"></img>

                    </div>
                    <div className="img-stack bottom">
                        <img src={code9} className="img" alt="true"></img>

                    </div>
                </div>
            </div></div>
    )
};
export default AboutContent;
