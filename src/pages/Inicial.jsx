import Header from '../components/Header'
import style from "../styles/inicial.module.css"
import Hero  from '../components/Hero/Hero'
import Categorias from '../components/Categorias'
import Destaques from '../components/Destaques'


export default function Inicial() {
    return (
        <>
           
        <Header />
        <Hero/>
        <Categorias/>
        <Destaques/>

        

        </>
    )
}