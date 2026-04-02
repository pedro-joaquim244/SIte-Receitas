import { useState } from "react"
import { Link } from "react-router-dom"
import styles from "./styles.module.css"
import Logo from "../../assets/imagens/LogoSalvia.png"
import procurar from "../../assets/imagens/procurar.png"

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false)

    return (
        <header className={styles.header}>
            <img src={Logo} alt="Logo" />

            <div className={styles.search}>
                <input type="text" placeholder="Pesquisar" />
                <img src={procurar} alt="Buscar" />
            </div>

            {/* MENU NORMAL */}
            <nav className={styles.nav}>
                <a href="">Pagina inicial</a>
                <a href="">Categorias</a>
                <a href="">Mundo</a>
            </nav>

            {/* BOTÃO HAMBURGUER */}
            <div 
                className={`${styles.hamburguer} ${menuAberto ? styles.ativo : ""}`}
                onClick={() => setMenuAberto(!menuAberto)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* MENU MOBILE */}
            <div className={`${styles.menuMobile} ${menuAberto ? styles.show : ""}`}>
                <a href="">Pagina inicial</a>
                <a href="">Categorias</a>
                <a href="">Mundo</a>
            </div>
        </header>
    )
}