import './App.css';
import { BrowserRouter, Navigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Contactos from './components/Contactos';
import Navbarprim from './layouts/Navbarprim';
import bootstrap from "bootstrap/dist/css/bootstrap.min.css?inline";
import Footer1 from './layouts/Footer';

function App() {
  return (
    <div className="App">
      <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbarprim/>}>
            <Route index element={<Home/>}/>
            <Route path='Menu' element={<Menu/>}/>
            <Route path='Contactos' element={<Contactos/>}/>

            <Route path='*' element={<Navigate replace to="/"/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
