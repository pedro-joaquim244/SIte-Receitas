import { useParams } from 'react-router-dom';
import Header from '../components/Header'
import produtos from '../data/produtos.json';
import style from "../styles/produto.module.css"

export default function Produto() {

    const { id } = useParams();

    const produto = produtos.find((produto) => produto.id === Number(id))

    return (
        <>
            <Header />

            <div className={style.container}>

                <div className={style.card}>

                    <img
                        src={produto.imagem}
                        alt={produto['Destino da passagem']}
                        className={style.imagem}
                    />

                    <h1 className={style.titulo}>
                        ✈️ {produto['Destino da passagem']}
                    </h1>

                    <div className={style.info}>
                        <p><strong>ID:</strong> {produto.id}</p>
                        <p><strong>Companhia:</strong> {produto['Companhia aérea']}</p>
                        <p><strong>Classe:</strong> {produto['Classe do voo']}</p>
                        <p><strong>Duração:</strong> {produto['Duração do voo']}</p>
                        <p><strong>Categoria:</strong> {produto['Categoria da viagem']}</p>
                    </div>

                    <div className={style.preco}>
                        R$ {produto.preco}
                    </div>

                    <button className={style.botao}>
                        Reservar passagem
                    </button>

                </div>

            </div>
        </>
    )
}