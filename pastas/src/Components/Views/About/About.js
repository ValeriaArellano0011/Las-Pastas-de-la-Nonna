import React from "react";
import './About.css'

export default function About(){
    return(
        <div className="container" id="about">
            <div className="img-container">
                <img src={require('../../../Imgs/chefs.jpg')} style={{borderRadius: '50%', height: '90%', width: '90%'}} alt="quienes somos"/>
            </div>
            <div>
                <h1>Quiénes somos</h1>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
        </div>
    )
}