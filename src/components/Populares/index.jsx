import style from "./style.module.css";
import Pratos from "../Pratos-Populares";
import imagem1 from "../../assets/imagens/imagem1.png";
import imagem4 from "../../assets/imagens/imagem4.png";
import imagem5 from "../../assets/imagens/imagem5.jpg";
import imagem6 from "../../assets/imagens/imagem6.jpg";
import imagem7 from "../../assets/imagens/imagem7.jpg";
import imagem8 from "../../assets/imagens/imagem8.jpg";
import imagem9 from "../../assets/imagens/imagem9.jpg";
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
                    prato={imagem9} />
                <Pratos nome="Macarrão com vagem"
                    prato={imagem8} />
                <Pratos nome="Tender na panela"
                    prato={imagem3} />
                <Pratos nome="Carne de panela apimentada"
                    prato={imagem4} />
                <Pratos nome="Vieiras Grelhadas"
                    prato={imagem5} />
                <Pratos nome="Esferas de Mel"
                    prato={imagem7} />
            </div>
        </section>
    );
}