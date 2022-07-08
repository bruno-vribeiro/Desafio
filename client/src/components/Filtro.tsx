export default function Filtro () {
    return(
        <>
            <form>
                <label htmlFor="">Marca:</label>
                <input type="text" />
                <label htmlFor="">Cor:</label>
                <input type="text" />
                <label htmlFor="">Ano:</label>
                <input type="text" />
                <label htmlFor="">Preço min.</label>
                <input type="text" />
                <label htmlFor="">Preço max.:</label>
                <input type="text" />
                <button>Salvar</button>
            </form>
        </>
    )
}