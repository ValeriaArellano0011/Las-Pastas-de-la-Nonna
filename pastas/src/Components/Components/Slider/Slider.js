import React from "react";
import styled from "styled-components";

const Div = styled.div`
@media (max-width: 940px) {
    z-index: -24;
    position: relative;
    display: block;
}
`

export default function Slider(){
    return(
        <Div id="home">
            <div style={{zIndex: '1000'}} id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={require('../../../Imgs/pastas.jpg')} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={require('../../../Imgs/pastas2.jpg')} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={require('../../../Imgs/pastas3.jpg')} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>  
            </div>
        </Div>
    )
}