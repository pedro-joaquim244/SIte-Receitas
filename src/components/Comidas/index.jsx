import { useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import Carne from "../Card-Comida";

import Bife from "../../assets/imagens/BifeAcebolado.png";
import Carnes from "../../assets/imagens/Carne.png";
import Churrasco from "../../assets/imagens/churrasquinho.png";
import CarneFritas from "../../assets/imagens/Carne-com-fritas.png";
import Grelhado from "../../assets/imagens/Grelhado.png";
import Estrogonofe from "../../assets/imagens/Estrogonofe-frango.png";
import Frango from "../../assets/imagens/Frango-assado.png";
import FrangoVagem from "../../assets/imagens/frango-vagem.jpg";
import Yaksoba from "../../assets/imagens/yaksoba.png";
import Panqueca from "../../assets/imagens/panqueca.png";
import Escondidinho from "../../assets/imagens/escondidinho.png";
import Molho from "../../assets/imagens/molho-madeira.png";

export default function Comidas() {
  const [visivel, setVisivel] = useState([false, false, false]);

  const refs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.findIndex((ref) => ref.current === entry.target);

          if (entry.isIntersecting && index !== -1) {
            setVisivel((prev) => {
              const novo = [...prev];
              novo[index] = true;
              return novo;
            });
          }
        });
      },
      { threshold: 0.25 }
    );

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={style.container}>
      {/* CARNES */}
      <section
        className={`${style.secao} ${visivel[0] ? style.showSubida : ""}`}
        ref={refs[0]}
      >
        <h2 className={style.subtitle}>Carnes</h2>

        <div className={style.fileira}>
          <div className={style.cardWrapper}>
            <Carne nome="Bife acebolado" imagem={Bife} estrela="★★★★★" nota="4.9" />
          </div>

          <div className={style.cardWrapper}>
            <Carne nome="Carne assada" imagem={Carnes} estrela="★★★★" nota="4.6" />
          </div>

          <div className={style.cardWrapper}>
            <Carne nome="Churrasco Gaúcho" imagem={Churrasco} estrela="★★★★★" nota="5.0" />
          </div>

          <div className={style.cardWrapper}>
            <Carne nome="Carne e fritas" imagem={CarneFritas} estrela="★★★★" nota="4.7" />
          </div>
        </div>
      </section>

      {/* AVES */}
      <section
        className={`${style.secao} ${visivel[1] ? style.showSubida : ""}`}
        ref={refs[1]}
      >
        <h2 className={style.subtitle}>Aves</h2>

        <div className={style.fileira}>
          <div className={style.cardWrapper}>
            <Carne nome="Frango grelhado" imagem={Grelhado} estrela="★★★★" nota="4.5" />
          </div>

          <div className={style.cardWrapper}>
            <Carne nome="Estrogonofe de frango" imagem={Estrogonofe} estrela="★★★★★" nota="4.8" />
          </div>

          <div className={style.cardWrapper}>
            <Carne nome="Frango assado" imagem={Frango} estrela="★★★★" nota="4.4" />
          </div>

          <div className={style.cardWrapper}>
            <Carne nome="Frango com vagem" imagem={FrangoVagem} estrela="★★★★" nota="4.3" />
          </div>
        </div>
      </section>

      {/* PRATOS RÁPIDOS */}
      <section
        className={`${style.secao} ${visivel[2] ? style.showSubida : ""}`}
        ref={refs[2]}
      >
        <h2 className={style.subtitle}>Pratos rápidos</h2>

        <div className={style.fileira}>
          <div className={style.cardWrapper}>
            <Carne nome="Yaksoba" imagem={Yaksoba} estrela="★★★★★" nota="4.9" />
          </div>

          <div className={style.cardWrapper}>
            <Carne nome="Panqueca" imagem={Panqueca} estrela="★★★★" nota="4.6" />
          </div>

          <div className={style.cardWrapper}>
            <Carne nome="Escondidinho" imagem={Escondidinho} estrela="★★★★★" nota="4.8" />
          </div>

          <div className={style.cardWrapper}>
            <Carne nome="Moela à madeira" imagem={Molho} estrela="★★★" nota="3.9" />
          </div>
        </div>
      </section>
    </div>
  );
}