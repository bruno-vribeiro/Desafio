import "./App.css";
import AdicionarVeiculo from "./components/AdicionandoVeiculo";
import Filtro from "./components/Filtro";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Home />
      <AdicionarVeiculo />
      <Filtro />
    </>
  );
}

export default App;
