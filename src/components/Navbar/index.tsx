import logoWeb from '../../assets/home/navLogoWeb.svg';
import logoMobile from '../../assets/home/navLogoMobile.svg';

import { FaBars } from 'react-icons/fa';

import './styles.scss';
import './responsive.scss';

export function Navbar() {
  return (
    <div id="navbar">
      <div className="logoNav">
        <img src={logoWeb} alt="Logo Web" className="logoWeb" />
        <img src={logoMobile} alt="logo Mobile" className="logoMobile" />
      </div>
      <nav className="navMenu">
        <FaBars className="barsMenu" />
        <a href="#home" className="homeMenu">Home</a>
        <a href="#landing3">Quem Somos</a>
        <a href="#landing4">Planos</a>
        <a href="#landing5">Fala conosco</a>
        <button>Entrar</button>
      </nav>
    </div>
  )
}