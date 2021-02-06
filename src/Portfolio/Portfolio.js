import React, { useEffect, useRef, useState } from 'react'
import './Portfolio.css'
import {projects} from './data'

const Portfolio = () => {
    const [category, setCategory] = useState(["web", "mobile", "other"])
    const [visible, setVisible] = useState(false)
    return(<div id="portfolio" style={{backgroundColor:"var(--backgroundDark)", paddingBottom:"100px",paddingTop:"25px"}}>
        <h1 className="title">Portfolio</h1>
        <div className="categoryTab"> 
            <button className="button" onClick={() => {setCategory(["web", "mobile", "other"])
                setVisible(true)}}> All </button>
            <button className="button" onClick={()=>{setCategory(["web"])
                setVisible(true)
            }}> Web </button>
            <button className="button" onClick={()=>{setCategory(["mobile"])
                setVisible(true)}}> Mobile </button>
            <button className="button" onClick={()=>{setCategory(["other"])
                setVisible(true)}}> Other</button>
        </div>
        <div className="flex-row"> 
            {projects.filter((project)=> {return category.includes(project.type)
            }).map((project) => <Project {...project} visibility={visible}/>)}
        </div>
    </div>

    )
}

const Project = ({title, demoLink, websiteLink, repoLink, description, image, visibility}) => {
    return ( <div className="projectGrid" style={{visibility: visibility && "visible"}}>
        <div id="projectAbout" 
                className="tab">About
        </div>
        {demoLink &&<div id="projectDemo" 
                className="tab">Demo</div>}
        {websiteLink && <div id="projectSite" className="tab">Website</div>}
        <div id="projectRepo" className="tab">Repo</div>

        <div id="infoSection" className="border">
            <div className="projectBackground" style={{backgroundImage:'url("'+image+'")'}}>
                <h6>{title}</h6>
            </div>
            <section className="aboutPage">
                <h1 style={{color:"white"}}>{title}</h1>
                <p style={{color:"white"}}> {description}
                </p>
            </section>
        </div>
    </div> 
    )
}
export default Portfolio;