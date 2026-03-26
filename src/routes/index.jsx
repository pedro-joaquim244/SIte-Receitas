import { Route, Routes } from 'react-router-dom';
import Inicial from '../pages/Inicial';
import Categoria from '../pages/Categoria';


export default function Rotas() {
  return (
    <Routes>
      <Route path='/' element={<Inicial />} />
      <Route path='/categoria' element={<Categoria />} />
    </Routes>
  )
}