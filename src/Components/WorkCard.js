import "./WorkCardStyles.css"
import React from 'react'
import { NavLink } from "react-router-dom"
import ProjectCardData from "./WorkCardData"

const WorkCard = (props) => {
    return (
        <div className="project-card">
            <img src={props.imgsrc} alt="project-1">
            </img>
            <h2 classname="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <NavLink to={props.view} className="btn">View</NavLink>
                    <NavLink to={props.view} className="btn">Source</NavLink>
                </div>
            </div>
        </div>
    )
};
export default WorkCard;
