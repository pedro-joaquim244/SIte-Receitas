import { useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import CardCategoria from "../Card-Categoria";

import entradas from "../../assets/imagens/entradas.png";
import destaques from "../../assets/imagens/Destaques.png";
import lanche from "../../assets/imagens/lanche.png";
import doces from "../../assets/imagens/Doces.png";
import bebidas from "../../assets/imagens/Bebidas.png";
import Massas from "../../assets/imagens/macarrão.png";

export default function Categorias() {
  const sectionRef = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className={visivel ? style.aparecer : ""}>
      
      <h2 id={style.titulo} className={style.tituloAnimado}>
        Categorias
      </h2>

      <div className={style.cards}>
        <CardCategoria nome="Entradas" receitas={2} icones={entradas} />
        <CardCategoria nome="Destaques" receitas={4} icones={destaques} />
        <CardCategoria nome="Lanche" receitas={3} icones={lanche} />
        <CardCategoria nome="Doces" receitas={3} icones={doces} />
        <CardCategoria nome="Bebidas" receitas={2} icones={bebidas} />
        <CardCategoria nome="Massas" receitas={10} icones={Massas} />
      </div>

      <a className={`${style.button} ${style.botaoAnimado}`} href="">
        Ver mais
      </a>
    </div>
  );
}