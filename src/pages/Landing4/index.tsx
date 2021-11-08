import planos from '../../assets/landing4Planos.svg';
import comentario from '../../assets/landing4LoremIpsum.svg';
import profile from '../../assets/landing4ProfileAmanda.svg';
import quotes from '../../assets/landing4Quotes.svg';


export function Landing4() {
  return (
    <div id=" landing4">
      <div className="container">
        <div className="header">
          <h1>Nossos Planos</h1>
          <h1>Invista no seu futuro</h1>
        </div>
        <div className="planos">
          <img src={planos} alt="" />
        </div>
        <div className="depoimentos-title">
          <h1>DEPOIMENTOS</h1>
          <h1>Recomendados por quem é expert no assunto </h1>
        </div>
        <div className="depoimentos">
          <div className="comentario-amanda">
            <img src={comentario} alt="Comentário" />
            <div className="profile">
              <img src={profile} alt="Profile Amanda" />
              <img src={quotes} alt="Double Quotes" />
            </div>
          </div>
          <div className="comentario-amanda">
            <img src={comentario} alt="Comentário" />
            <div className="profile">
              <img src={profile} alt="Profile Amanda" />
              <img src={quotes} alt="Double Quotes" />
            </div>
          </div>
          <div className="comentario-amanda">
            <img src={comentario} alt="Comentário" />
            <div className="profile">
              <img src={profile} alt="Profile Amanda" />
              <img src={quotes} alt="Double Quotes" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}