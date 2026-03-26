import { useEffect, useRef, useState } from "react";
import style from "./style.module.css";

export default function Pratos({ nome, prato }) {
  const pratoRef = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (pratoRef.current) {
      observer.observe(pratoRef.current);
    }

    return () => {
      if (pratoRef.current) {
        observer.unobserve(pratoRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={pratoRef}
      className={`${style.prato} ${visivel ? style.aparecer : ""}`}
    >
      <div className={style.imagem}>
        <img src={prato} alt={nome} />
      </div>

      <div className={style.texto}>
        <h1>{nome}</h1>
        <span>Acesse a receita aqui</span>
      </div>
    </div>
  );
}