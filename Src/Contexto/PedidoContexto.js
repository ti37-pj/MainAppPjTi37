import React from "react";
import axios from "axios";
import { MesaContexto } from "./MesaContexto";
import Mesa from "../Telas/Mesa";

export const PedidoContexto = React.createContext()

export const PedidoProvedor = (props) =>{

    const [ mesa, alteraMesa ] = React.useContext( MesaContexto )
    const [produtosPedido, alteraProdutosPedido ] = React.useState([])
    /*
  React.useLayoutEffect(() => {
    buscaPedidoDaMesa()
  },[])
  */

  const buscaPedidoDaMesa = () => {
    console.log(`PedidoProvedor: mesa ${mesa}`)

    axios.get ("http://10.60.46.64:3001/pedidos/busca_nao_enviado_por_mesa/" + mesa  ) 
    .then( res => {
        if(res.data == 0) {
          console.log("Pedido zerado")
          return
        }

        console.log(res.data)
        alteraProdutosPedido(res.data)

        /*
        res.data.map(r=>{
          buscaProdutosPedido(r.id)
        })
        */
    
    })
    .catch( res => console.log(res) )
  }
/*
  const buscaProdutosPedido = (id) => {
    axios.get("http://10.60.46.64:3001/pedidos/busca/" + id)
    .then( res => {
        if(res.data == 0) {
          console.log("Produtos zerados")
          return
        }
        console.log(res.data)
        const produtos_encontrados = res.data[ 1 ].produto
        const produtos_concatenados = produtosPedido.concat(produtos_encontrados)

        //produtosPedido.push(produtos_encontrados)
        alteraProdutosPedido(produtos_concatenados)

    })
    .catch( res => console.log(res) )

  }*/

    return(
        <PedidoContexto.Provider value={{produtosPedido, alteraProdutosPedido, buscaPedidoDaMesa}}>
            {props.children}
        </PedidoContexto.Provider>
    )

} 