import style from "./style.module.css";
import Espeto from "../../assets/imagens/EspetoCarne.png";
import Espeto2 from "../../assets/imagens/Variante2Espeto.png";

export default function HeroCategoria() {
  return (
    <div className={style.content}>
      <div className={style.left}>
        <h1>Destaques.</h1>
        <h5>Praticidade e Sabor para Qualquer Hora.</h5>
        <p>
          Com uma grande diversidade de ingredientes e estilos culinários, essa
          seção inclui carnes, aves, peixes, massas, pratos vegetarianos e muito
          mais. Os pratos principais são pensados para oferecer uma refeição
          equilibrada, combinando sabor, textura e apresentação.
        </p>
      </div>

      <div className={style.right}>
        <div className={style.efeitoSeparacao}>
          <img src={Espeto} alt="Espeto com carne" className={style.imagem1} />
          <img src={Espeto2} alt="Espeto separado da carne" className={style.imagem2} />
        </div>
      </div>
    </div>
  );
}