import banner from '../../assets/landing2/landing2Banner.svg';
import bannerResponsivo from '../../assets/landing2/landing2BannerResponsivo.svg';
import sidebar from '../../assets/landing2/landing2Sidebar.svg';
import teenager from '../../assets/landing2/landing2Teenager.svg';

import { ImArrowRight2 } from 'react-icons/im';

import './styles.scss';
import './responsive.scss';
import { FaWindows } from 'react-icons/fa';

export function Landing2() {

  return (
    <div id="landing2">

      <header className="banner">
        <img src={banner} alt="Banner" className="banner" />
      </header>


      <div className="main-content">
        <div className="box-lateral">
          <div className="sidebar">
            <img src={sidebar} alt="Sidebar" />
          </div>
          <div className="content">
            <h1 className="h1">100% focado na Matemática</h1>
            <p className="p1">
              Todo material é construído por profissionais
              especializados e com foco no perfil de
              cada vestibular.
            </p>
            <h1 className="h2">Acompanhamento de perto!</h1>
            <p className="p2">Todo o suporte que você precisa para
              aprender o conteúdo dos principais vestibulares!
            </p>
            <h1 className="h3">Matemática de um jeito fácil!</h1>
            <p className="p3">Resolução instantânea de qualquer equação
              algébrica na plataforma, além de vídeos, apostilas,
              simulados e central de dúvidas 24h!</p>
            <button>
              <div className="button-content">
                <p>Quero ser aprovado</p>
                <ImArrowRight2 size="20px" color="#fff" />
              </div>
            </button>
          </div>
        </div>
        <aside>
          <img src={teenager} alt="Teenager" className="teenager" />
        </aside>
      </div>
    </div>
  )
}