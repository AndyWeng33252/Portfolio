import React, { useRef } from 'react';
import './Navigation.css'

const Navigation = () => {
    const longNavRef = useRef(null)
    const shortNavRef = useRef(null)

    const checkHide = () => {
        if (shortNavRef.current.style.display !== "none") {
            longNavRef.current.style.display = "none"
        }
    }

    const toggle = () => {
        longNavRef.current.style.display = (longNavRef.current.style.display === "block" ? "none": "block" )
    }
    return (<React.Fragment id="navWrap">
        <ul className="nav" id="longNavBar">
            <a href='#homeBanner'>Home</a>
            <a href='#about'>About</a>
            <a href='#portfolio'>Portfolio</a>
            <a href='#contact'>Contacts</a>
        </ul>

        <ul className="nav shortNav">
            <a class="fas fa-bars side" onClick={()=>toggle()} ref={shortNavRef}></a>
            <div id="longNav" ref={longNavRef} onClick={() => checkHide()}>
                <a href='#homeBanner'>Home</a>
                <a href='#about'>About</a>
                <a href='#portfolio'>Portfolio</a>
                <a href='#contact'>Contacts</a>
            </div>
        </ul>
    </React.Fragment>)
}

export default Navigation;