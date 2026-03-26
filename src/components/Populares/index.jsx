import style from "./style.module.css";
import Pratos from "../Pratos-Populares";
import imagem1 from "../../assets/imagens/imagem1.png";
import imagem4 from "../../assets/imagens/imagem4.png";
import imagem2 from "../../assets/imagens/carnePanela.png";
import imagem3 from "../../assets/imagens/carneAssada.png";

export default function Populares() {
    return (
        <section className={style.populares}>
            <div className={style.circulo}></div>

            <div className={style.topo}>
                <h4>Salvia.</h4>
                <h3>Pratos populares</h3>
            </div>

            <div className={style.pratos}>
                <Pratos nome="Camarão com manga"
                    prato={imagem1} />
                <Pratos nome="Macarrão com vagem"
                    prato={imagem2} />
                <Pratos nome="Tender na panela"
                    prato={imagem3} />
                <Pratos nome="Carne de panela apimentada"
                    prato={imagem4} />
            </div>
        </section>
    );
}