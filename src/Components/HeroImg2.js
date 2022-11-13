import "./HeroImg2Styles.css"
import React, { Component } from "react"
import code7 from "../images/code7.jpg";
import { Link } from "react-router-dom";

class HeroImg2 extends Component {
    render() {
        return (
            <div className="hero2">
                <div className="mask2">
                    <img className="into-img" src={code7} alt="profile" />

                </div>
                <div className="content2">
                    <p>
                        {this.props.heading}
                    </p>
                    <h1>{this.props.text}</h1>

                </div>
            </div>
        )
    }
}
export default HeroImg2