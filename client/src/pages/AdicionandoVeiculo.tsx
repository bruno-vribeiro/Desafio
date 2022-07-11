import { Link } from "react-router-dom";
import Home from "./Home";

export default function AdicionarVeiculo () {
    return(
        <div className="principal">
            <form>
            <label htmlFor="">Nome:</label>
            <input type="text" />
            <label htmlFor="">Marca:</label>
            <input type="text" />
            <label htmlFor="">Cor:</label>
            <input type="text" />
            <label htmlFor="">Ano:</label>
            <input type="text" />
            <label htmlFor="">Placa:</label>
            <input type="text" />
            <button
            onClick={()=>{
                <Home salvo={true} />
            }}
            >
                <Link to={'/'}>Salvar</Link>
            </button>
        </form>
        </div>
    )
}