import style from "./style.module.css"

export default function PratosDestaques({ nome, imagem, subtitulo }) {
    return (
        <div className={style.card}>
            <div className={style.imageWrapper}>
                <img
                    src={imagem}
                    alt={nome}
                    className={style.image}
                />
            </div>

            <div className={style.text}>
                <h2 className={style.title}>{nome}</h2>
                <p className={style.subtitle}>{subtitulo}</p>

                <h2 className={style.textHover}>
                    Ver <span className={style.receita}>Receita</span>
                </h2>
            </div>
        </div>
    )
}