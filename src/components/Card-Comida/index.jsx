import style from "./style.module.css";

export default function Carne({ nome, imagem, estrela, nota }) {
  return (
    <div className={style.card}>
      <div className={style.imagemContainer}>
        <img src={imagem} alt={nome} />
      </div>

      <div className={style.conteudo}>
        <h3 className={style.nome}>{nome}</h3>

        <div className={style.avaliacao}>
          <span className={style.estrelas}>{estrela}</span>
          <span className={style.nota}>{nota}</span>
        </div>
      </div>
    </div>
  );
}