import { Route, Routes } from 'react-router-dom';
import Sobre from '../pages/Sobre'
import Produto from '../pages/Produto'
import Inicial from '../pages/Inicial';


export default function Rotas() {
  return (
    <Routes>
      <Route path='/' element={<Inicial />} />
      <Route path='/produto/:id' element={<Produto />} />
      <Route path='/sobre' element={<Sobre />} />
    </Routes>
  )
}