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
    axios.get ("http://10.60.46.31:3001/pedidos/busca_nao_concluido_por_mesa/" + mesa  ) 
    .then( res => {
        console.log(res)
        if(res.data == 0) {
          console.log("Pedido zerado")
          return
        }
        const pedido_encontrado = res.data[ 0 ]
    //    alteraPedido(pedido_encontrado)
        buscaProdutosPedido(pedido_encontrado.id)
    })
    .catch( res => console.log(res) )
  }

  const buscaProdutosPedido = (id) => {
    
    axios.get("http://10.60.46.31:3001/pedidos/busca/" + id)
    .then( res => {
        console.log(res.data[1].produto)
        if(res.data == 0) {
          console.log("Produtos zerados")
          return
        }
        const produtos_encontrados = res.data[ 1 ].produto
        alteraProdutosPedido(produtos_encontrados)
    })
    .catch( res => console.log(res) )

  }

    return(
        <PedidoContexto.Provider value={[produtosPedido, alteraProdutosPedido]}>
            {props.children}
        </PedidoContexto.Provider>
    )

} 