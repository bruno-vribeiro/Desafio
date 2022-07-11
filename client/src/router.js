import AdicionarVeiculo from "./pages/AdicionandoVeiculo";
import Filtro from "./pages/Filtro";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./components/Cards.tsx";


export default function AppRouter (){

    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/adicionarVeiculo' element={<AdicionarVeiculo />} />
                <Route path='/filtro' element={<Filtro />} />
                <Route path='/cards' element={<Cards />} />
            </Routes>
        </Router>
    )
}

