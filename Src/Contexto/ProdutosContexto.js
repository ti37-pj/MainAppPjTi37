import React, { createContext } from 'react';
import axios

const produtoContexto = createContext();

const ProdutoContexto = ({children}) => {

    const [ produtos , setProdutos] = React.useState([
		{
			id:1,
			nome:"X-Tudo",
			descricao:"Pão, alface, queijo, bacon, 2 hamburguers, molho especial",
			preco:"20"
		},
		{
			id:2,
			nome:"Balde De Frango",
			descricao:"Frango frito com molho picante",
			preco:"15"
		},
		{
			id:3,
			nome:"Capuccino",
			descricao:"Pó de cappucino com leite",
			preco:"10"
		},
	])

    return ( 
        <produtoContexto.Provider value={{produtos, setProdutos}}>
            {children}
        </produtoContexto.Provider>
     );
}
 
export default ProdutoContexto;