import { Link } from "react-router-dom"
import styles from "./styles.module.css"
import Logo from "../../assets/imagens/LogoSalvia.png"
import procurar from "../../assets/imagens/procurar.png"

export default function Header() {
    return (
        <header className={styles.header}>
            <img src={Logo} alt="" />

            <div className={styles.search}>
                <input type="text" placeholder="Pesquisar" />
                <img src={procurar} alt="" />
            </div>
            <nav>
                <a href="">Pagina inicial</a>
                <a href="">Categorias</a>
                <a href="">Mundo</a>
            </nav>
        </header>
    )
}