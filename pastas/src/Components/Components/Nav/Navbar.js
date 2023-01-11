import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import './Navbar.css'
import Logo  from '../../../Imgs/logo.svg';

const Nav = styled.nav`
    height: 90px;
    border-bottom: 2px solid #f1f1f1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    background-color: white;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 9999;
`

const ImgContainer = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: left;
    align-items: center;
`

const Navbar = ({orderClicked, setOrderClicked}) => {
    return (
        <Nav>
            <div className="logo">
                <ImgContainer>
                    <img src={Logo} style={{width: '90px', height: '90px'}} alt="logo"/>                    
                </ImgContainer>
                <div className='title-container'>
                    <h1 className='title'>Las pastas de la Nonna</h1>
                </div>
            </div>
            <Burger orderClicked={orderClicked} setOrderClicked={setOrderClicked}/>
        </Nav>
    )
}

export default Navbar