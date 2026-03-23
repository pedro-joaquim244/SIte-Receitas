import style from "./style.module.css";

export default function Pratos({ nome, prato }) {
  return (
    <div className={style.prato}>
      <img src={prato} alt={nome} className={style.imagem} />

      <div className={style.laranja}></div>

      <div className={style.texto}>
        <h1>{nome}</h1>
        <span>Acesse a receita aqui</span>
      </div>
    </div>
  );
}