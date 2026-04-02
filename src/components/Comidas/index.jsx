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

  const refs = [useRef(), useRef(), useRef()];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.findIndex(ref => ref.current === entry.target);

          if (entry.isIntersecting) {
            setVisivel((prev) => {
              const novo = [...prev];
              novo[index] = true;
              return novo;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={style.container}>

      {/* ESQUERDA */}
      <section className={style.secao} ref={refs[0]}>
        <h2 className={style.subtitle}>Carnes</h2>
        <div className={`${style.fileira} ${visivel[0] ? style.showEsquerda : ""}`}>
          <Carne nome="Bife acebolado" imagem={Bife} />
          <Carne nome="Carne assada" imagem={Carnes} />
          <Carne nome="Churrasco Gaúcho" imagem={Churrasco} />
          <Carne nome="Carne e fritas" imagem={CarneFritas} />
        </div>
      </section>

      {/* DIREITA */}
      <section className={style.secao} ref={refs[1]}>
        <h2 className={style.subtitle}>Aves</h2>
        <div className={`${style.fileira} ${visivel[1] ? style.showDireita : ""}`}>
          <Carne nome="Frango grelhado" imagem={Grelhado} />
          <Carne nome="Estrogonofe de frango" imagem={Estrogonofe} />
          <Carne nome="Frango assado" imagem={Frango} />
          <Carne nome="Frango com vagem" imagem={FrangoVagem} />
        </div>
      </section>

      {/* ESQUERDA */}
      <section className={style.secao} ref={refs[2]}>
        <h2 className={style.subtitle}>Pratos rápidos</h2>
        <div className={`${style.fileira} ${visivel[2] ? style.showEsquerda : ""}`}>
          <Carne nome="Yaksoba" imagem={Yaksoba} />
          <Carne nome="Panqueca" imagem={Panqueca} />
          <Carne nome="Escondidinho" imagem={Escondidinho} />
          <Carne nome="Moela à madeira" imagem={Molho} />
        </div>
      </section>

    </div>
  );
}