import React from "react";
import axios from "axios";

export const PedidoContexto = React.createContext()

export const PedidoProvedor = (props) =>{

    const [ mesa, alteraMesa ] = React.useState( 9 )
    const [produtosPedido, alteraProdutosPedido ] = React.useState([])
    
  React.useEffect(() => {
    buscaPedidoDaMesa()
  },[])

  const buscaPedidoDaMesa = () => {
    axios.get ("http://10.60.46.64:3001/pedidos/busca_nao_enviado_por_mesa/" + mesa  ) 
    .then( res => {
        if(res.data == 0) {
          console.log("Pedido zerado")
          return
        }

        res.data.map(r=>{
          buscaProdutosPedido(r.id)
        })
    
    })
    .catch( res => console.log(res) )
  }

  const buscaProdutosPedido = (id) => {

    return new Promise((resolve, reject))
    
    axios.get("http://10.60.46.64:3001/pedidos/busca/" + id)
    .then( res => {
        if(res.data == 0) {
          console.log("Produtos zerados")
          return
        }

        const produtos_encontrados = res.data[ 1 ].produto
        const produtos_concatenados = produtosPedido.concat(produtos_encontrados)

        //produtosPedido.push(produtos_encontrados)
        alteraProdutosPedido(produtos_concatenados)

    })
    .catch( res => console.log(res) )

  }

    return(
        <PedidoContexto.Provider value={[produtosPedido, alteraProdutosPedido]}>
            {props.children}
        </PedidoContexto.Provider>
    )

} 