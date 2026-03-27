import style from "./style.module.css";
import icone from "../../assets/imagens/icone.png";

export default function Carne({ nome, imagem, estrela, nota }) {
  return (
    <div className={style.card}>
      <div className={style.imagemContainer}>
        <img src={imagem} alt={nome} className={style.imagem} />
      </div>

      <div className={style.conteudo}>
        <div className={style.info}>
          <h3 className={style.nome}>{nome}</h3>

          <div className={style.avaliacao}>
            <span className={style.estrelas}>{estrela}</span>
            <span className={style.nota}>{nota}</span>
          </div>
        </div>


      </div>
    </div>
  );
}