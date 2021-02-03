import React, { useRef } from 'react'
import './About.css'
import {items, webFrontend, webBackend, mobileBackend, mobileFrontend} from './data'

const About = () => {
    const refContainer = useRef(null)

    const toggle = () => {
        let visibile = refContainer.current.style.visibility
        console.log(visibile)
        if (visibile === "visible") {
            refContainer.current.style.visibility = "hidden"
        }
        else {
            refContainer.current.style.visibility = "visible"
        }
    }

    return (<section id="about" className="container flex-col">
        <h1 className="title">About</h1>
        <div className="about-flex-container container">
            <div className="about-flex1"> 
                <Item {...items[0]}/>
                <Item {...items[1]}/>
            </div>
            <div className="about-flex2"> 
                <Item {...items[2]}/>
                <Item {...items[3]}/>
            </div>
        </div>
        <i className="quote">"Work like hell. If other people are putting in 40 hour workweeeks and you're putting in 100, you will achieve in 4 months what it takes them in a year to achieve"</i>
        <h3>Elon Musk</h3>
        <div className="skillSection">
            <div className="skillsWeb">
                <h1 className="section-title">WEB</h1>
                <h2>Frontend</h2>
                {webFrontend.map((skill) => {
                    return <Bar {...skill}/>
                })}
                <h2 style={{marginTop: "10px"}}>Backend</h2>
                {webBackend.map((skill) => {
                    return <Bar {...skill}/>
                })}
                <div onClick={() => toggle()}> 
                    <h2 className="center">Others</h2>
                    <div className="fas fa-arrow-down center arrow"
                            style={{display:"block"}}>
                    </div> 
                </div>
                <div className="frameworksGrid hidden border" ref={refContainer}>
                    <h5>Amazon EC2</h5>
                    <h5>Amazon RDS</h5>
                    <h5>GitHub</h5>
                    <h5>Postman </h5>
                    <h5>Docker</h5>
                    <h5>HTTP</h5>
                    <h5>Axios</h5>
                    <h5>Unit Testing</h5>
                </div>
            </div>
            <div className="verticalLine"></div>
            <div className="skillsWeb">
                <h1 className="section-title">MOBILE</h1>
                <h2>Frontend</h2>
                {mobileFrontend.map((skill) => {
                    return <Bar {...skill}/>
                })}
                <h2 style={{marginTop: "10px"}}>Backend</h2>
                {mobileBackend.map((skill) => {
                    return <Bar {...skill}/>
                })}
                <br></br>
                <h2 className="center">Frameworks</h2>
                <div className="frameworksGrid">
                    <h5>MapKit</h5>
                    <h5>ARKit</h5>
                    <h5>SceneKit</h5>
                    <h5>Core Data</h5>
                    <h5>Core Motion</h5>
                    <h5>Core Location</h5>
                    <h5>Core Graphics</h5>
                    <h5>Alamofire</h5>
                </div>
            </div>
        </div>
    </section>
    )
}

const Item = ({icon, title, description}) => {
    return(
    <div className="item">
        <p id="iconIMG" className={icon}></p>        
        <h2>{title}</h2>
        <p className="description">{description}</p>
    </div>)
}

const Bar = ({label, percentage}) => {
    return (
    <div className="bar">
        <h3>{label}</h3>
        <div className="bar-back"> 
            <div className="shade" style={{width:percentage}}>
            </div>
            <span className="percent"
                    style={{color:"white"}}>{percentage}</span>
        </div>
    </div>
    
    )
}

export default About;