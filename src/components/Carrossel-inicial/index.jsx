import { useState } from "react";
import styles from "./styles.module.css";

import prato1 from "../../assets/imagens/prato1.png";
import prato2 from "../../assets/imagens/prato2.jpg";
import prato3 from "../../assets/imagens/prato3.png";

export default function Carousel() {
  const pratos = [
    { id: 1, img: prato1 },
    { id: 2, img: prato2 },
    { id: 3, img: prato3 },
  ];

  const [ativo, setAtivo] = useState(0);
  const [direcao, setDirecao] = useState(""); // "cima" ou "baixo"

  function handleClick(index) {
    if (index === ativo) return;

    // define de onde veio
    if (index === (ativo + 1) % pratos.length) {
      setDirecao("cima");
    } else {
      setDirecao("baixo");
    }

    setAtivo(index);
  }

  return (
    <div className={styles.container}>
      {pratos.map((prato, index) => {
        let classe = "";

        if (index === ativo) classe = `${styles.ativo} ${styles[direcao]}`;
        else if (index === (ativo + 1) % pratos.length)
          classe = styles.proximo;
        else classe = styles.anterior;

        return (
          <img
            key={prato.id}
            src={prato.img}
            className={`${styles.prato} ${classe}`}
            onClick={() => handleClick(index)}
          />
        );
      })}
    </div>
  );
}