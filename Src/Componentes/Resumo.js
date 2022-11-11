import { Box } from "@react-native-material/core";
import { StyleSheet, Text  } from 'react-native';
import { PedidoContexto } from "../Contextos/PedidoContexto";
import React from "react";
import axios from "axios";


const Resumo = ({alteraPedido}) => {

    const [ produtosPedido, alteraProdutosPedido ] = React.useContext(PedidoContexto)

    React.useEffect(() => {
        axios.get ("http://10.60.46.31:3001/pedidos/busca_nao_concluido_por_mesa/" + 9 ) 
        .then( res => {
            console.log(res)
            if(res.data == 0) {
            console.log("Pedido zerado")
            return
            }
            const pedido_encontrado = res.data[ 0 ]
        //    alteraPedido(pedido_encontrado)
            alteraPedido(pedido_encontrado)
        })
        .catch( res => console.log(res) )
    },[])

    const calculaTotal = () => {
        let precoTotal = 0
        produtosPedido.map(p=>{
            precoTotal += parseFloat(p.preco_venda * p.quantidade)
        })
        return(
            precoTotal.toFixed(2).replace(".",",")
        )
    }

    console.log(produtosPedido)
    return(

        <Box>
            { produtosPedido == 0? <Text>  </Text> : 
                <Box>
                    <Text style={e.Container} > Código do pedido: { produtosPedido[0].id_pedidos } </Text>
                    <Text style={e.Texto} > Total: R$ { calculaTotal() }</Text>
                </Box>
            }
        </Box>
    );
}

const e = StyleSheet.create({
    Container:{
        textAlign: "center",
        padding: 10,
        fontSize: 20,
        backgroundColor:"#fefefe"
    },
    Texto:{
        fontSize: 18,
        textAlign: "right",
        padding: 10,
        margin: 3,
        borderBottomWidth: 1
    },
    Texto2:{
        fontWeight:  "bold" ,
    }
})

export default Resumo;