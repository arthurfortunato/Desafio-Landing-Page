import planos from '../../assets/landing4Planos.svg';
import comentario from '../../assets/landing4LoremIpsum.svg';
import profileAmanda from '../../assets/landing4ProfileAmanda.svg';
import profileLucas from '../../assets/landing4ProfileLucas.svg';
import profileRodrigo from '../../assets/landing4ProfileRodrigo.svg';
import quotes from '../../assets/landing4Quotes.svg';

import './styles.scss';

export function Landing4() {
  return (
    <div id="landing4">
      <div className="container">
        <div className="header">
          <h1 className="nossos-planos">Nossos Planos</h1>
          <h1 className="invista">Invista no seu futuro</h1>
        </div>
        <div className="planos">
          <img src={planos} alt="" />
        </div>
        <div className="depoimentos-title">
          <h1 className="title">DEPOIMENTOS</h1>
          <h1 className="recomendacao">Recomendados por <br />quem é expert no assunto </h1>
        </div>
        <div className="depoimentos">
          <div className="box-button-comentario">
            <div>
              <button>T</button>
            </div>
            <div className="comentario-amanda">
              <img src={comentario} alt="Comentário" />
              <div className="profile">
                <img src={profileAmanda} alt="Profile Amanda" />
                <img src={quotes} alt="Double Quotes" />
              </div>
            </div>
          </div>
          <div className="comentario-lucas">
            <img src={comentario} alt="Comentário" />
            <div className="profile">
              <img src={profileLucas} alt="Profile Amanda" />
              <img src={quotes} alt="Double Quotes" />
            </div>
          </div>
          <div className="comentario-rodrigo">
            <img src={comentario} alt="Comentário" />
            <div className="profile">
              <img src={profileRodrigo} alt="Profile Amanda" />
              <img src={quotes} alt="Double Quotes" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}