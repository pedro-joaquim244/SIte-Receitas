import style from "./style.module.css";

export default function CardCategoria({ nome, receitas, icones }) {
    return (
        <>
            <div className={style.card}>
                <img className={style.icone} src={icones} alt="" />
                <div className={style.text}>
                    <h3>{nome}</h3>
                    <span>{receitas}</span>
                </div>
            </div>
        </>


    );
}