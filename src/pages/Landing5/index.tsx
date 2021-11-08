import cellphone from '../../assets/landing5/landing5Cellphone.svg';
import logo from '../../assets/home/homeLogoLateral.svg';
import arrow from '../../assets/home/homeArrow.svg';
import logoWeb from '../../assets/home/navLogoWeb.svg'
import logoApps from '../../assets/landing5/landing5LogoApps.svg';

import './styles.scss';
import './responsive.scss';

export function Landing5() {
  return (
    <div id="landing5">
      <div className="app">
        <div className="cellphone">
          <img src={cellphone} alt="Cellphone" />
        </div>
        <div className="app-box">
          <div className="header-menu">
            <img src={logo} alt="Logo Menu Lateral" />
            <p>Baixe aulas no app e estude offline </p>
          </div>
          <div className="body-menu">
            <p>
              Receba lembretes no seu celular e tenha a facilidade
              de estudar a qualquer hora e de qualquer lugar.
              <strong> Baixe nosso app e confira.</strong>
            </p>
            <a href="/">
              <button>
                <p>Conheça nosso aplicativo</p>
                <img src={arrow} alt="Arrow Button" />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="fale-conosco">
          <div className="logo-app">
            <img src={logoWeb} alt="Logo Web" className="logo-web" />
            <img src={logoApps} alt="Logo Apps" />
          </div>
          <div className="contato">
            <div>
              <h1>Localização</h1>
              <p>Av. Brg. Faria Lima , 1422 São Paulo - SP </p>
            </div>
            <div>
              <h1>Fale conosco </h1>
              <p>(22) 4442-0126   info@digihouse.com</p>
            </div>
            <div>
              <h1>Políticas</h1>
              <p>Direitos autorais</p>
              <p>Termos de uso</p>
              <p>Políticas de Privacidade</p>
            </div>
          </div>
        </div>
        <div className="redes-sociais">
          <p>© Copyright 2021. All Right Reserved </p>
          <div>
            F T I
            <button>T</button>
          </div>
        </div>
      </div>
    </div>
  )
}