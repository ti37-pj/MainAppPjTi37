import React, { createContext, useEffect } from 'react';
import api from '../../api';

export const ProdutoContexto = createContext();

export const ProdutoProvedor = ({children}) => {

	useEffect(()=>{
		buscaTodos();
	}, [])
	
	const buscaTodos = () => {
		api.get("/categorias/busca_todos")
		.then(res =>{
			setCategorias(res.data)
			api.get("/produtos/busca_todos")
			.then(res => setProdutos(res.data))
		})
		.catch(res => console.log(res));
	}

	const [categorias, setCategorias] = React.useState([]);
    const [ produtos , setProdutos] = React.useState([]);

    return ( 
        <ProdutoContexto.Provider value={[produtos, setProdutos, categorias, setCategorias]}>
            {children}
        </ProdutoContexto.Provider>
     );
}