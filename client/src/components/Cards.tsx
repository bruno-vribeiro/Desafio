import React from 'react';
import editar from '../editar.png';
import excluir from '../excluir.png';
import favorito from '../coracao.png'

export default function Cards () {

    return(
        <div>
            <h2>Meus Anúncios</h2>
            <div>
                <img src={editar} alt="" />
                <img src={excluir} alt="" />
                <img src={favorito} alt="" />
                <p>
                    nome do carro<br/>
                    preço:000<br/>
                    Descrição:xxxxx<br/>
                    Ano:xxxxxx<br/>
                    Cor:Vermelho
                </p>
            </div>
        </div>
    )
}