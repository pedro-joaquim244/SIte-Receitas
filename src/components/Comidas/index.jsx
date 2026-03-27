import style from "./style.module.css";
import Carne from "../Card-Comida";
import Bife from "../../assets/imagens/BifeAcebolado.png";
import Carnes from "../../assets/imagens/Carne.png";
import Churrasco from "../../assets/imagens/churrasquinho.png";
import CarneFritas from "../../assets/imagens/Carne-com-fritas.png";
import Grelhado from "../../assets/imagens/Grelhado.png";
import Estrogonofe from "../../assets/imagens/Estrogonofe-frango.png";
import Frango from "../../assets/imagens/Frango-assado.png";
import FrangoVagem from "../../assets/imagens/frango-vagem.jpg";
import Yaksoba from "../../assets/imagens/yaksoba.png";
import Panqueca from "../../assets/imagens/panqueca.png";
import Escondidinho from "../../assets/imagens/escondidinho.png";
import Molho from "../../assets/imagens/molho-madeira.png";


export default function Comidas() {
  return (
    <div className={style.container}>

      {/* círculos decorativos */}
      <div className={style.circulo}></div>
      <div className={style.circuloDireita}></div>

      <h2 className={style.subtitle}>Carnes</h2>
      <div className={style.fileira}>
        <Carne nome="Bife acebolado"
          imagem={Bife}
          estrela="★★★★"
          nota="4.2"
        />
        <Carne nome="Carne assada"
          imagem={Carnes}
          estrela="★★★★★"
          nota="5"
        />
        <Carne nome="Churrasco Gaucho"
          imagem={Churrasco}
          estrela="★★★"
          nota="3.4"
        />
        <Carne nome="Carne e fritas"
          imagem={CarneFritas}
          estrela="★★★★★"
          nota="4.7"
        />
      </div>

      <h2 className={style.subtitle}>Aves</h2>
      <div className={style.fileira}>
        <Carne nome="Frango Grelhado" imagem={Grelhado} estrela="★★★★★" nota="4.8" />
        <Carne nome="Estrogonofe de frango" imagem={Estrogonofe} estrela="★★★★" nota="4.3" />
        <Carne nome="Frango assado" imagem={Frango} estrela="★★★★★" nota="4.9" />
        <Carne nome="Frango com Vagem" imagem={FrangoVagem} estrela="★★★★★" nota="4.7" />
      </div>

      <h2 className={style.subtitle}>Pratos rápidos</h2>
      <div className={style.fileira}>
        <Carne nome="Yaksoba" imagem={Yaksoba} estrela="★★★★★" nota="4.6" />
        <Carne nome="Panqueca" imagem={Panqueca} estrela="★★★★" nota="4.5" />
        <Carne nome="Escondidinho" imagem={Escondidinho} estrela="★★★" nota="3.3" />
        <Carne nome="Moela á madeira" imagem={Molho} estrela="★★★★★" nota="4.8" />
      </div>

    </div>
  );
}