import boyTop from '../../assets/landing3BoyTop.svg';
import boyBottom from '../../assets/landing3BoyBottom.svg';

import './styles.scss';

export function Landing3() {
  return (
    <div id="landing3">
      <div className="box-top">
        <div className="image-box-top">
          <img src={boyTop} alt="Illustration Boy Box Top" />
        </div>
        <div className="content-box-top">
          <h1 className="title">100% matemática</h1>
          <h1>Matemática para quem quer entrar na facul.</h1>
          <p>
            Somos um cursinho online especialista em ensinar matemática.
            Temos os melhores professores mestres e doutores para tirar
            suas dúvidas e te ensinar matemática desde a teoria até a
            resolução de exercícios de todos os níveis.
          </p>
        </div>
      </div>
      <div className="box-bottom">
        <div className="content-box-bottom">
          <h1 className="title">QUER SER APROVADO?</h1>
          <h1>Se seu foco é ser aprovado, nós estamos aqui por você.</h1>
          <p>
            Somos um cursinho online especialista em ensinar matemática.
            Temos os melhores professores mestres e doutores para tirar
            suas dúvidas e te ensinar matemática desde a teoria até a
            resolução de exercícios de todos os níveis.
          </p>
        </div>
        <div className="image-box-bottom">
          <img src={boyBottom} alt="Illustration Boy Box Bottom" />
        </div>
      </div>
    </div>
  )
}