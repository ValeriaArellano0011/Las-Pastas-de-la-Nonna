import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li a{
    font-size: 15px;
    color: black;
    text-decoration: none;
  }
  li a:hover{
    color: black;
    font-weight: bold;
  }
  .pedido{
    color: #664439;
  }
  @media (max-width: 940px) {
    flex-flow: column nowrap;
    background-color: #7a574b;
    position: fixed;
    z-index: 22;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li a{
      text-decoration: none;
      color: #fff;
    }
    li a:hover{
      color: white;
      font-weight: bold;
    }
    .pedido{
      font-weight: bold;
      color: white;
    }
  }
`;


const RightNav = ({ open, setOpen }) => {

  return (
    <Ul open={open}>
      <li style={{padding: '37.5px 10px'}}><Link to="/" onClick={() => setOpen(!open)}><a href='#home'>Inicio</a></Link></li>
      <li style={{padding: '32.5px 10px'}}><Link to="/order" onClick={() => setOpen(!open)}><a href='#order' style={{fontWeight: 'bold', fontFamily: 'Square Peg, cursive', fontSize: '25px', alignContent: 'center', boxShadow: 'none', textDecoration: 'none'}} className="pedido">Hacé tu pedido!</a></Link></li>
      <li style={{padding: '37.5px 10px'}}><a href='/#about' onClick={() => setOpen(!open)}>Quienes somos</a></li>
      <li style={{padding: '37.5px 10px'}}><a href='#contact' onClick={() => setOpen(!open)}>Contacto</a></li>
      <li style={{padding: '37.5px 10px'}}><Link to="" onClick={() => setOpen(!open)}><a href='login'>Inicia sesión</a></Link></li>
    </Ul>
  )
}

export default RightNav