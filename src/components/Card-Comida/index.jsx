import style from "./style.module.css";

export default function Carne({ nome, imagem }) {
  return (
    <div className={style.card}>
      <img src={imagem} alt={nome} className={style.imagem} />
      <h3 className={style.nome}>{nome}</h3>
    </div>
  );
}