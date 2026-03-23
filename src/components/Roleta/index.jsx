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

    export default function Roleta() {
    const [rotation, setRotation] = useState(0);
    const [girando, setGirando] = useState(false);

    const degPorItem = 360 / opcoes.length;

    const backgroundRoleta = `repeating-conic-gradient(
        from -${degPorItem / 2}deg,
        #ff8a00 0deg ${degPorItem}deg,
        #ef6500 ${degPorItem}deg ${degPorItem * 2}deg
    )`;

    const girar = () => {
        if (girando) return;

        setGirando(true);

        const randomIndex = Math.floor(Math.random() * opcoes.length);
        const voltasExtras = 360 * 6;

        setRotation((prev) => {
        const rotacaoAtual = ((prev % 360) + 360) % 360;
        const rotacaoAlvo = (360 - randomIndex * degPorItem) % 360;
        const ajusteFinal = (rotacaoAlvo - rotacaoAtual + 360) % 360;

        return prev + voltasExtras + ajusteFinal;
        });

        setTimeout(() => {
        setGirando(false);
        alert(`Receita sorteada: ${opcoes[randomIndex]} 🍽️`);
        }, 4000);
    };

    return (
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

                return (
                <span
                    key={item}
                    className={styles.label}
                    style={{
                    transform: `rotate(${angulo}deg) translateY(-108px) rotate(-${angulo}deg)`,
                    }}
                >
                    {item}
                </span>
                );
            })}
            </div>

            <div className={styles.centro}>🍴</div>
        </div>

        <div className={styles.texto}>
            <h1>Está com dúvida da sua próxima receita?</h1>
            <p>
            Gire a roleta e descubra categoria diferente para voce sair do padrão!
            </p>

            <button onClick={girar} disabled={girando}>
            Sorteie Aqui
            </button>
        </div>
        </section>
    );
    } 