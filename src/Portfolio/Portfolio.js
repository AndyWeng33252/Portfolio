import React, { useRef } from 'react'
import './Portfolio.css'

const Portfolio = () => {
    return(<div>
        <h1 className="title">Portfolio</h1>
        <div className="flex-row"> 
            <Project/>
            <Project/>
            <Project/>
            <Project/>
        </div>
    </div>

    )
}

const Project = () => {
    const aboutRef = useRef(null)
    const demoRef = useRef(null)
    const aboutTabRef = useRef(null)
    const demoTabRef = useRef(null)

    const toggle= (string) => {
        if (string === "about"){
            demoRef.current.style.visibility = "hidden"
            aboutRef.current.style.visibility = "visible"
            aboutTabRef.current.style.backgroundColor = "rgb(4, 102, 81)"
            demoTabRef.current.style.backgroundColor = "var(--orange)"
        }
        else {
            demoRef.current.style.visibility = "visible"
            aboutRef.current.style.visibility = "hidden"
            demoTabRef.current.style.backgroundColor = "rgb(4, 102, 81)"
            aboutTabRef.current.style.backgroundColor = "var(--orange)"
        }
    }

    return ( <div className="projectGrid">
        <div id="projectAbout" 
                className="tab" 
                onClick={()=>toggle("about")}
                ref={aboutTabRef}>About
        </div>
        <div id="projectDemo" 
                className="tab" 
                onClick={()=>toggle("demo")}
                ref={demoTabRef}>Demo</div>
        <div id="projectSite" className="tab">Website</div>
        <div id="projectRepo" className="tab">Repo</div>

        <div id="infoSection" className="border">
            <section className="aboutPage" ref={aboutRef}>
                <h1 style={{color:"white"}}>Title</h1>
                <p style={{color:"white"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien ultricies, consectetur magna dignissim, porttitor augue. Curabitur sollicitudin iaculis.
                </p>
            </section>
            <section className="demoPage" ref={demoRef}>
                <h1 style={{color:"white"}}>Title</h1>
                <p style={{color:"white"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien ultricies, consectetur magna dignissim, porttitor augue. Curabitur sollicitudin iaculis.
                </p>
            </section>
        </div>
    </div> 
    )
}
export default Portfolio;