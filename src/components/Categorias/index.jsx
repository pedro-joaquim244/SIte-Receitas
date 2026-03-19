import style from "./style.module.css";
import CardCategoria from "../Card-Categoria";
import entradas from "../../assets/imagens/entradas.png"
import destaques from "../../assets/imagens/Destaques.png"
import lanche from "../../assets/imagens/lanche.png"
import doces from "../../assets/imagens/Doces.png"
import bebidas from "../../assets/imagens/Bebidas.png"
import ComidaVegana from "../../assets/imagens/ComidaVegana.png"
export default function Categorias() {
    return (
        <>


            <h2 className={style.titulo}>Categorias</h2>
            <div className={style.cards}>
                <CardCategoria
                    nome="Entradas"
                    receitas={2}
                    icones={entradas}
                />
                <CardCategoria
                    nome="Destaques"
                    receitas={4}
                    icones={destaques}
                />
                <CardCategoria
                    nome="Lanche"
                    receitas={3}
                    icones={lanche}
                />
                <CardCategoria
                    nome="Doces"
                    receitas={3}
                    icones={doces}
                />
                <CardCategoria
                    nome="Entradas"
                    receitas={2}
                    icones={bebidas}
                />

            </div>
            <a className={style.button} href="">Ver mais</a>
        </>
    )
}