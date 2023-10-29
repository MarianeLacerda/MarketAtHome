import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inicio } from './Pages/Inicio';
import { InicioCategory } from './Pages/InicioCategory';
import { Produto } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import woman_banner from './Components/Assets/banner_women.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/produtos' element={<InicioCategory banner={men_banner} category='men' />}/>
        <Route path='/servicos' element={<InicioCategory banner={woman_banner} category='women' />}/>
        <Route path='/product' element={<Produto/>}>
          <Route path=':productId' element={<Produto/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
