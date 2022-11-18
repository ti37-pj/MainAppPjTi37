import { Box } from "@react-native-material/core";
import { StyleSheet, Text  } from 'react-native';
import { PedidoContexto } from "../Contexto/PedidoContexto";
import React from "react";
import axios from "axios";


const Resumo = ({alteraPedido}) => {

    const [ produtosPedido, alteraProdutosPedido ] = React.useContext(PedidoContexto)

    React.useEffect(() => {
        axios.get ("http://10.60.46.64:3001/pedidos/busca_nao_enviado_por_mesa/" + 9 ) 
        .then( res => {
            console.log(res.data)
            if(res.data == 0) {
            console.log("Pedido zerado")
            return
            }
            const pedido_encontrado = res.data[ 0 ]
            alteraPedido(pedido_encontrado)
        })
        .catch( res => console.log(res) )
    },[])

    return(

        <Box>
            { produtosPedido == 0? <Text>  </Text> : 
                <Box>
                    <Text style={e.Container} > Codigo do Pedido: { produtosPedido[0].id_pedidos } </Text>
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