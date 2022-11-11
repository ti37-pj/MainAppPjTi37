import React, { createContext } from 'react';

export const CarrinhoContexto = createContext();

export const CarrinhoProvedor = ({children}) => {

    const [ carrinho , setCarrinho] = React.useState([
        {
            id:1000,
            nome:'Strogonoff de Filé',
            preco:30,
            quantidade:1,
            total:30,
            imagem:'https://img.itdg.com.br/images/recipes/000/002/462/320095/320095_original.jpg'
        },
        {
            id:1001,
            nome:'Strogonoff de Filé',
            preco:30,
            quantidade:1,
            total:30,
            imagem:'https://img.itdg.com.br/images/recipes/000/002/462/320095/320095_original.jpg'
        },
    ]);

    return ( 
        <CarrinhoContexto.Provider value={[carrinho , setCarrinho]}>
            {children}
        </CarrinhoContexto.Provider>
     );
}