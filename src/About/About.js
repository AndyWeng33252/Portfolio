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
        <div className="flex-row container">
            {items.map((item)=>{
                return <Item {...item}/>
            })}
        </div>
        <i>"Work like hell. If other people are putting in 40 hour workweeeks and you're putting in 100, you will achieve in 4 months what it takes them in a year to achieve"</i>
        <h5>Elon Musk</h5>
        <div className="skillSection">
            <div className="skillsWeb">
                <h1 className="center">WEB</h1>
                <h3>Frontend</h3>
                {webFrontend.map((skill) => {
                    return <Bar {...skill}/>
                })}
                <h3 style={{marginTop: "10px"}}>Backend</h3>
                {webBackend.map((skill) => {
                    return <Bar {...skill}/>
                })}
                <h3 className="center">Others</h3>
                <span className="fas fa-arrow-down center" 
                        onClick={() => toggle()}>
                </span>
                <div className="skillsGrid hidden" ref={refContainer}>
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
                <h1 className="center">MOBILE</h1>
                <h3>Frontend</h3>
                {mobileFrontend.map((skill) => {
                    return <Bar {...skill}/>
                })}
                <h3 style={{marginTop: "10px"}}>Backend</h3>
                {mobileBackend.map((skill) => {
                    return <Bar {...skill}/>
                })}
                <br></br>
                <h3 className="center">Frameworks</h3>
                <div className="skillsGrid">
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
        <h4>{title}</h4>
        <p style={{fontSize:"14px"}}>{description}</p>
    </div>)
}

const Bar = ({label, percentage}) => {
    return (
    <div className="bar border">
        <h5>{label}</h5>
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