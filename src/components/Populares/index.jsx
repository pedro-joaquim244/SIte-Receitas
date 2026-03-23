import style from "./style.module.css";
import Pratos from "../Pratos-Populares";
import imagem1 from "../../assets/imagens/imagem1.png"
import imagem2 from "../../assets/imagens/carnePanela.png"
import imagem3 from "../../assets/imagens/carneAssada.png"
export default function Populares() {
    return (
        <>
            <h4>Salvia.</h4>
            <h3>Pratos Populares</h3>
            <div className={style.Pratos}>
                <Pratos
                    nome="Camarão com manga"
                    prato={imagem1}
                />
                <Pratos
                    nome="Macarrão a Bolonhesa"
                    prato={imagem2}
                />
                <Pratos
                    nome="Macarrão a Bolonhesa"
                    prato={imagem3}
                />
            </div>
        </>
    )
}