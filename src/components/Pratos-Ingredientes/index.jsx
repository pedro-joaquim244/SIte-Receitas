import style from "./style.module.css";
import prato from "../../assets/imagens/Prato.png";
import folha from "../../assets/imagens/Folhas.png";
import camarao from "../../assets/imagens/camarao.png";

export default function PratosIngredientes() {
  return (
    <>
    <div className={style.content}>
      <div className={style.card}>
        <img src={prato} className={style.prato} />

      {/* ingredientes */}
      <img src={folha} className={`${style.ingrediente} ${style.folha1}`} />
      <img src={folha} className={`${style.ingrediente} ${style.folha2}`} />
      <img src={camarao} className={`${style.ingrediente} ${style.camarao1}`} />
      <img src={camarao} className={`${style.ingrediente} ${style.camarao2}`} />
    </div>
    </div>
    </>
  );
}