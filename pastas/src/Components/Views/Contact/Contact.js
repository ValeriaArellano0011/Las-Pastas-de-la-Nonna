import React from "react";
import './Contact.css'

export default function Contact(){
    return(
        <div className="container" id="contact">
            <div>
                <div style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                    <h1>Contactanos</h1>
                </div>
                <div>
                    <h5>Podes contactarnos llamando a +541112341234 o a traves de WhatsApp haciendo click <a href="https://api.whatsapp.com/send?phone=5491130863361&text=Hola,%20quiero%20saber%20m%C3%A1s%20sobre%20las%20pastas" target="_blank" rel="noreferrer">acá</a></h5>
                </div>
            </div>

        </div>
    )
}
