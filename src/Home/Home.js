import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div id="homeBanner" className="fullScreen">
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
            <h1 id="intro"> Hi I'm 
                <span> Andy Weng.</span> 
                <div>I'm a full-stack web and IOS mobile developer.</div>
            </h1>
            <a className="button" href="#about">View More</a>
        </div>
    )
}

export default Home;