import { useState } from "react";
import styles from "./style.module.css";

const opcoes = [
  "Entradas",
  "Destaques",
  "Doces",
  "Lanches",
  "Bebidas",
  "Massas"
];

const linksCategorias = {
  Entradas: "/categorias/entradas",
  Destaques: "/categorias/destaques",
  Doces: "/categorias/doces",
  Lanches: "/categorias/lanches",
  Bebidas: "/categorias/bebidas",
  Massas: "/categorias/massas"
};

export default function Roleta() {
  const [rotation, setRotation] = useState(0);
  const [girando, setGirando] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);
  const [categoriaSorteada, setCategoriaSorteada] = useState("");

  const degPorItem = 360 / opcoes.length;

  const backgroundRoleta = `repeating-conic-gradient(
    from -${degPorItem / 2}deg,
    #ff8a00 0deg ${degPorItem}deg,
    #ef6500 ${degPorItem}deg ${degPorItem * 2}deg
  )`;

  const girar = () => {
    if (girando) return;

    setGirando(true);
    setModalAberto(false);

    const randomIndex = Math.floor(Math.random() * opcoes.length);
    const categoria = opcoes[randomIndex];
    const voltasExtras = 360 * 6;

    setRotation((prev) => {
      const rotacaoAtual = ((prev % 360) + 360) % 360;
      const rotacaoAlvo = (360 - randomIndex * degPorItem) % 360;
      const ajusteFinal = (rotacaoAlvo - rotacaoAtual + 360) % 360;

      return prev + voltasExtras + ajusteFinal;
    });

    setTimeout(() => {
      setGirando(false);
      setCategoriaSorteada(categoria);
      setModalAberto(true);
    }, 4000);
  };

  const irParaCategoria = () => {
    if (!categoriaSorteada) return;
    window.location.href = linksCategorias[categoriaSorteada];
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.roletaArea}>
          <div className={styles.indicador}></div>

          <div
            className={styles.roleta}
            style={{
              transform: `rotate(${rotation}deg)`,
              background: backgroundRoleta,
            }}
          >
            {opcoes.map((item, index) => {
              const angulo = index * degPorItem;
              const letras = item.split("");
              const espacamento = 10;
              const deslocamentoInicial =
                -((letras.length - 1) * espacamento) / 2;

              return (
                <div
                  key={item}
                  className={styles.label}
                  style={{
                    transform: `rotate(${angulo}deg) translateY(-128px)`,
                  }}
                >
                  {letras.map((letra, i) => (
                    <span
                      key={i}
                      className={styles.letra}
                      style={{
                        transform: `rotate(${deslocamentoInicial + i * espacamento}deg)`,
                      }}
                    >
                      {letra}
                    </span>
                  ))}
                </div>
              );
            })}
          </div>

          <div className={styles.centro}>🍴</div>
        </div>

        <div className={styles.texto}>
          <h1>Está com dúvida da sua próxima receita?</h1>
          <p>
            Gire a roleta e descubra categoria diferente para você sair do
            padrão!
          </p>

          <button onClick={girar} disabled={girando}>
            {girando ? "Sorteando..." : "Sorteie Aqui"}
          </button>
        </div>
      </section>

      {modalAberto && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <h2>CATEGORIA SORTEADA:</h2>
            <p>{categoriaSorteada}</p>

            <div className={styles.botoesModal}>
              <button
                className={styles.botaoCategoria}
                onClick={irParaCategoria}
              >
                Ir para a categoria
              </button>

              <button
                className={styles.botaoFechar}
                onClick={() => setModalAberto(false)}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}