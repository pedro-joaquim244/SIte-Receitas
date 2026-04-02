import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { FaUtensils, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import style from "./style.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.coluna}>
          <h2>Explore</h2>
          <a href="">Início</a>
          <a href="">Categorias</a>
          <a href="">Mundo</a>
        </div>

        <div className={style.coluna}>
          <h2>Siga-nos</h2>

          <div className={style.item}>
            <FaTwitter className={style.svg} />
            <span>@salvia</span>
          </div>

          <div className={style.item}>
            <FaInstagram className={style.svg} />
            <span>@salvia</span>
          </div>

          <div className={style.item}>
            <FaFacebook className={style.svg} />
            <span>@salvia</span>
          </div>
        </div>

        <div className={style.coluna}>
          <h2>Contato</h2>

          <div className={style.itemContato}>
            <FaPhoneAlt className={style.svg} />
            <p>(16) 99999-9999</p>
          </div>

          <div className={style.itemContato}>
            <FaPhoneAlt className={style.svg} />
            <p>(16) 99999-9999</p>
          </div>

          <div className={style.itemContato}>
            <FaEnvelope className={style.svg} />
            <p>salvia@gmail.com</p>
          </div>

          
        </div>
      </div>

      <div className={style.copy}>
        <div className={style.copyContent}>
          <div className={style.icone}>
            <FaUtensils />
          </div>
          <span>Copyright © 2026. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}