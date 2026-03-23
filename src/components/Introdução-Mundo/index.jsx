import style from "./style.module.css"
import imagem from "../../assets/imagens/MacarraoQueijo.png"

export default function Conhecimentos() {
    return (
        <>
            <div className={style.content}>
                <div className={style.text}>
                    <h2 className={style.title}>Conheça comidas dos 5 continentes.</h2>
                    <p>
                        Dividido em Europa, Ásia, África e Americas do sul e do Norte e Oceania, nossa seção mundo te apresentara as comidas mais famosas dos continentes do nosso Mundo todo.
                    </p>
                    <a href="">Explorar</a>
                </div>
                <div className={style.sobreposicao}>
                    <div className={style.circle}></div>
                    <div className={style.imagem}><img src={imagem} alt="" /></div>
                </div>

            </div>
        </>

    )
}