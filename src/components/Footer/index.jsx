import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa"; // 👈 NOVO
import style from "./style.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      
      <div className={style.container}>
        
        <div className={style.explore}>
          <h2>Explore:</h2>
          <a href="">Inicio</a>
          <a href="">Categorias</a>
          <a href="">Mundo</a>
        </div>

        <div className={style.redes}>
          <h2>Siga-nós :</h2>

          <div className={style.item}>
            <FaTwitter className={style.svg} /> <span>@salvia</span>
          </div>

          <div className={style.item}>
            <FaInstagram className={style.svg} /> <span>@salvia</span>
          </div>

          <div className={style.item}>
            <FaFacebook className={style.svg} /> <span>@salvia</span>
          </div>
        </div>

        <div className={style.contato}>
          <h2>Entre em contato :</h2>
          <p>(16)99999-9999</p>
          <p>(16)99999-9999</p>
          <p>Salvia@gmail.com</p>
        </div>

      </div>

      <div className={style.copy}>
        <div className={style.copyContent}>
          <div className={style.icone}>
            <FaUtensils />
          </div>
          <span>Copyright©2026. All rights Reserved</span>
        </div>
      </div>

    </footer>
  );
}