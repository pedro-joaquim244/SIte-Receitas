import styles from "./styles.module.css";
import Carousel from "../Carrossel-inicial";

export default function Hero() {
  return (
    <section className={styles.hero}>
      
      {/* LADO ESQUERDO (NÃO ALTERADO) */}
      <div className={styles.left}>
        <h1>Sálvia.</h1>

        <p>
          Aqui você encontra receitas simples, criativas e deliciosas para qualquer
          momento, desde pratos rápidos do dia a dia até preparos especiais para
          impressionar. Explore, experimente e transforme cada refeição em uma
          experiência cheia de sabor.
        </p>

        <button>Explorar</button>
      </div>

      {/* LADO DIREITO */}
      <div className={styles.right}>
        <div className={styles.curva}></div>

        <Carousel />
      </div>

    </section>
  );
}