import { Route, Routes } from "react-router-dom";
import './App.scss';
import { HeaderApp, MainApp, FooterApp} from './components/IndexApp';
import {ProductsMen} from './components/pages/ProductsMen';
import {ProductsWomen} from './components/pages/ProductsWomen';
import {ProductsChildren} from './components/pages/ProductsChildren';
import {ProductsOffers} from './components/pages/ProductsOffers';
import { Carrito } from "./components/pages/Carrito";



function App() {
    return(
        <>
        <HeaderApp />
        <Routes> 
            <Route path="/" element = {<MainApp /> }/>
            <Route path="/hombres" element = {<ProductsMen /> }/>
            <Route path="/mujeres" element = {<ProductsWomen /> }/>
            <Route path="/niños" element = {<ProductsChildren /> }/>
            <Route path="/ofertas" element = {<ProductsOffers /> }/>
            <Route path="/carrito" element = {<Carrito /> }/>
        </Routes>
        <FooterApp />
        </>


    )
}

export default App;