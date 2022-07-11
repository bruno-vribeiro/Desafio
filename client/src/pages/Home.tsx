
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import filtro from "../filtro.png";
import lupa from "../lupa.png";


interface Props{
  salvo:boolean
}
export default function Home({salvo}:Props) {
   salvo=false;
  return (
    <div className="principal">
      <div className="secundario">
      <div>
        <img id='lupa' src={lupa} alt="lupa da pesquisa" />
        <input type="scanner" placeholder="    Buscar"/>
        <img id='filtro' src={filtro} alt="filtro" />
      </div>
      <button>
        <Link to={'/adicionarVeiculo'}>Adicionar</Link>
      </button>
      {salvo? <Cards />:''}
      </div>
    </div>
  );
}
