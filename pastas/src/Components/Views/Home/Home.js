import React from "react";
import Slider from "../../Components/Slider/Slider";
import Contact from "../Contact/Contact";
import About from "../About/About";

export default function Home(){
    return(
        <div style={{display: 'flexbox', justifyContent: 'center', alignItems: 'center'}}>
            <Slider/>
            <About/>
            <Contact/>
        </div>
    )
}