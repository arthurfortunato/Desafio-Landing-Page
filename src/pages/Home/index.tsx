import logoMenuLateral from '../../assets/home/homeLogoLateral.svg';
import illustration from '../../assets/home/homeIllustration.svg';
import background from '../../assets/home/homeBackground.svg';


import { Navbar } from '../../components/Navbar';
import { Landing2 } from '../Landing2';
import { Landing3 } from '../Landing3';
import { Landing4 } from '../Landing4';
import { Landing5 } from '../Landing5';

import { HiOutlineArrowRight } from 'react-icons/hi'

import './styles.scss';
import './responsive.scss';

export function Home() {

  return (
    <div id="home">
      <Navbar />
      <main>
        <div className="menu-lateral">
          <div className="header-menu">
            <img src={logoMenuLateral} alt="Logo Menu Lateral" />
            <p>
              {`Seja aprovado no Enem e Vestibulares :)`}
            </p>
          </div>
          <div className="body-menu">
            <h1>Você escolhe<br /> o que aprender<strong>.</strong></h1>
            <p>
              Aqui você terá toda assistência que precisa <br />
              com materiais desenvolvido por <strong>mestres e
                doutores em matemática</strong>
            </p>
            <a href="#landing4">
              <button>
                <div className="button-content">
                  <p>Veja nossos planos</p>
                  <HiOutlineArrowRight size="20.3px" />
                </div>
              </button>
            </a>
          </div>
        </div>
        <div className="illustration">
          <img src={illustration} alt="" />
        </div>
        <div className="background">
          <img src={background} alt="" />
        </div>
      </main>
      <Landing2 />
      <Landing3 />
      <Landing4 />
      <Landing5 />
    </div>
  )
}