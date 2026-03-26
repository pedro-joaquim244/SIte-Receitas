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
import Molho from "../../assets/imagens/molho-madeira.png00000000000000000000000000000000000000000000000";


export default function Comidas() {
  return (
    <div className={style.container}>

      {/* círculos decorativos */}
      <div className={style.circulo}></div>
      <div className={style.circuloDireita}></div>

      <h2 className={style.subtitle}>Carnes</h2>
      <div className={style.fileira}>
        <Carne nome="Bife acebolado" imagem={Bife} />
        <Carne nome="Carne assada" imagem={Carnes} />
        <Carne nome="Churrasco" imagem={Churrasco} />
        <Carne nome="Carne e fritas" imagem={CarneFritas} />
      </div>

      <h2 className={style.subtitle}>Aves</h2>
      <div className={style.fileira}>
        <Carne nome="Frango Grelhado" imagem={Grelhado} />
        <Carne nome="Estrogonofe de frango" imagem={Estrogonofe} />
        <Carne nome="Frango assado" imagem={Frango} />
        <Carne nome="Frango com Vagem" imagem={FrangoVagem} />
      </div>

      <h2 className={style.subtitle}>Pratos rápidos</h2>
      <div className={style.fileira}>
        <Carne nome="Yaksoba" imagem={Yaksoba} />
        <Carne nome="Panqueca" imagem={Panqueca} />
        <Carne nome="Escondidinho" imagem={Escondidinho} />
        <Carne nome="Moela á madeira" imagem={Molho} />
      </div>

    </div>
  );
}