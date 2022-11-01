import React, { createContext, useEffect } from 'react';
import api from '../../api';

export const CategoriaContexto = createContext();

export const CategoriaProvedor = ({children}) => {

	useEffect(()=>{
		buscaTodos();
	}, [])
	
	const buscaTodos = () => {
		api.get("/categorias/busca_todos")
			.then(res => setCategorias(res.data))
			.catch(res => console.log(res));
	}

	const buscaCategoria = (id) => {
		return categorias.map(c => {
			if (c.id == id){
				return c.nome
			}
		})
	}

	const [categorias, setCategorias] = React.useState([]);

    return ( 
        <CategoriaContexto.Provider value={buscaCategoria}>
            {children}
        </CategoriaContexto.Provider>
     );
}