import React from 'react';
//Esse link é como se foss <a href> do html, quando usa o react-router-dom, use esse cara para direcionar as páginas
import {Link} from 'react-router-dom';
//estilo da página
import './Header.css';

import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';

export default function Header() {
  return (
    <header id="main-header">
        <div className="header-content">
           
           <Link to="/">
           <img src={logo} alt="TcheloGram"/> 
           </Link>

           <Link to="/new">
           <img src={camera} alt="Enviar Publicação"/>
           </Link>
        </div>   
    </header>    
  );
}
