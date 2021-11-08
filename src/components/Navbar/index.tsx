import logoWeb from '../../assets/home/navLogoWeb.svg';
import logoMobile from '../../assets/home/navLogoMobile.svg';
import barsMenu from '../../assets/home/navBars.svg';

import './styles.scss';
import './responsive.scss';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div id="navbar">
      <div className="logoNav">
        <img src={logoWeb} alt="Logo Web" className="logoWeb" />
        <img src={logoMobile} alt="logo Mobile" className="logoMobile" />
      </div>
      <nav className="navMenu">
        <img src={barsMenu} alt="Bars Menu" className="barsMenu" />
        <a href="#home" className="homeMenu">Home</a>
        <a href="#landing3">Quem Somos</a>
        <a href="#landing4">Planos</a>
        <a href="/">Fala conosco</a>
        <button>Entrar</button>
      </nav>
    </div>
  )
}