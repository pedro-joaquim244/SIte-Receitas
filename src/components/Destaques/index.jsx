import style from "./style.module.css";
import PratosDestaques from "../Pratos-Destaques";
import Arroz from "../../assets/imagens/Arroz.png";
import Risotto from "../../assets/imagens/ristotto.png";
import Frango from "../../assets/imagens/frango.png"
export default function Destaques() {
    return (
        <>
            <h1 id={style.titulo}>Pratos em Destaques</h1>
            <div className={style.Pratos}>
                <PratosDestaques
                    nome="Arroz"
                    imagem={Arroz}
                    subtitulo="chawal"
                />
                <PratosDestaques
                    nome="Risotto"
                    imagem={Risotto}
                    subtitulo="bacon"
                />
                <PratosDestaques
                    nome="Frango"
                    imagem={Frango}
                    subtitulo="Grelhado"
                />


            </div>
        </>

    )
}