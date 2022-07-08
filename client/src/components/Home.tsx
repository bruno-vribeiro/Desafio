import filtro from "../coracao.png";

export default function Home() {
  return (
    <>
      <div>
        <input type="scanner" placeholder="Buscar"></input>
        <img src={filtro} alt="filtro" />
      </div>
      <button>Adicionar</button>
    </>
  );
}
