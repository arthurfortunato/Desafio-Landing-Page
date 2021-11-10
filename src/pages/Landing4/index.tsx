import planoRecomendado from '../../assets/landing4/landing4PlanoRecomendado.svg';
import planoAprovado from '../../assets/landing4/landing4PlanoAprovado.svg';
import comentario from '../../assets/landing4/landing4LoremIpsum.svg';
import profileAmanda from '../../assets/landing4/landing4ProfileAmanda.svg';
import profileLucas from '../../assets/landing4/landing4ProfileLucas.svg';
import profileRodrigo from '../../assets/landing4/landing4ProfileRodrigo.svg';

import { RiDoubleQuotesR } from 'react-icons/ri';
import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

import './styles.scss';
import './responsive.scss';

export function Landing4() {
  return (
    <div id="landing4">
      <div className="container">
        <div className="header">
          <h1 className="nossos-planos">NOSSOS PLANOS</h1>
          <h1 className="invista">Invista no seu futuro</h1>
        </div>
        <div className="planos">
          <img src={planoRecomendado} alt="Plano Recomendado" className="plano-recomendado" />
          <img src={planoAprovado} alt="Plano Aprovado" className="plano-aprovado" />
        </div>
        <div className="depoimentos-title">
          <h1 className="title">DEPOIMENTOS</h1>
          <h1 className="recomendacao">Recomendados por <br />quem é expert no assunto </h1>
        </div>
        <div className="depoimentos">
          <div className="button-left">
            <button><MdOutlineArrowBackIosNew /></button>
          </div>
          <div className="comentario-amanda">
            <img src={comentario} alt="Comentário" />
            <div className="profile">
              <img src={profileAmanda} alt="Profile Amanda" />
              <RiDoubleQuotesR color="#32B5FF" size="60px" />
            </div>
          </div>
          <div className="comentario-lucas">
            <img src={comentario} alt="Comentário" />
            <div className="profile">
              <img src={profileLucas} alt="Profile Amanda" />
              <RiDoubleQuotesR color="#32B5FF" size="60px" />
            </div>
          </div>
          <div className="comentario-rodrigo">
            <img src={comentario} alt="Comentário" />
            <div className="profile">
              <img src={profileRodrigo} alt="Profile Amanda" />
              <RiDoubleQuotesR color="#32B5FF" size="60px" />
            </div>
          </div>
          <div className="button-right">
            <button><MdArrowForwardIos /></button>
          </div>
          <div className="button-responsive">
            <div className="left">
              <button><MdOutlineArrowBackIosNew /></button>
            </div>
            <div className="right">
              <button><MdArrowForwardIos /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}