import React, { createContext } from 'react';

export const CarrinhoContexto = createContext();

export const CarrinhoProvedor = ({children}) => {

    const [ carrinho , setCarrinho] = React.useState([
    ]);

    return ( 
        <CarrinhoContexto.Provider value={[carrinho , setCarrinho]}>
            {children}
        </CarrinhoContexto.Provider>
     );
}