import style from "./style.module.css";

export default function Pratos({ nome, prato }) {
  return (
    <div className={style.prato}>
      
      {/* CÍRCULO DO PRATO */}
      <div className={style.imagem}>
        <img src={prato} alt={nome} />
      </div>

      {/* TEXTO (fica por cima) */}
      <div className={style.texto}>
        <h1>{nome}</h1>
        <span>Acesse a receita aqui</span>
      </div>

    </div>
  );
}