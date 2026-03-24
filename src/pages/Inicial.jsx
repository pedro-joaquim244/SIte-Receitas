import Header from '../components/Header'
import style from "../styles/inicial.module.css"
import Hero  from '../components/Hero/Hero'
import Categorias from '../components/Categorias'
import Destaques from '../components/Destaques'
import Conhecimentos from '../components/Introdução-Mundo'
import Roleta  from '../components/Roleta'
import Populares from '../components/Populares'
import Footer from '../components/Footer'

export default function Inicial() {
    return (
        <>
           
        <Header />
        <Hero/>
        <Categorias/>
        <Destaques/>
        <Conhecimentos/>
        <Roleta/>
        <Populares/>
        <Footer/>

        </>
    )
}