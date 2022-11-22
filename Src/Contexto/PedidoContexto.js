import React from "react";
import axios from "axios";
import { MesaContexto } from "./MesaContexto";
import Mesa from "../Telas/Mesa";

export const PedidoContexto = React.createContext()

export const PedidoProvedor = (props) =>{

    const [ mesa, alteraMesa ] = React.useContext( MesaContexto )
    const [pedidos, alteraPedidos ] = React.useState([])
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
        alteraPedidos(res.data)

        /*
        res.data.map(r=>{
          buscaProdutosPedido(r.id)
        })
        */
    
    })
    .catch( res => console.log(res) )
  }

    return(
        <PedidoContexto.Provider value={{pedidos, alteraPedidos, buscaPedidoDaMesa}}>
            {props.children}
        </PedidoContexto.Provider>
    )

} 